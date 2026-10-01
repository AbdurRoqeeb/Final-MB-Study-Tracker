import React, { useState, useEffect, useMemo } from 'react';
import { SubjectType, StudyPriority, Topic, StudyStatus } from './types';
import { getCuratedSyllabus } from './data/syllabus';

// Import components
import DashboardHeader from './components/DashboardHeader';
import StatsDashboard from './components/StatsDashboard';
import StudyPlanWidget from './components/StudyPlanWidget';
import PostingScheduleBanner from './components/PostingScheduleBanner';
import FiltersSection from './components/FiltersSection';
import TopicCard from './components/TopicCard';
import DailyStudySchedule from './components/DailyStudySchedule';
import StudyMomentumChart from './components/StudyMomentumChart';
import RevisionTimetable from './components/RevisionTimetable';

import { RotateCcw, CheckCircle2 } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'MBBS_STUDY_TRACKER_STATUS_V2';

export default function App() {
  // Theme Toggle state (defaults to light mode)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('MBBS_THEME');
    return (saved as 'dark' | 'light') || 'light';
  });

  // Tab Selection state: 'revision' (25-day revision timetable for Oct 26 exam), 'planner', 'syllabus'
  const [activeTab, setActiveTab] = useState<'revision' | 'planner' | 'syllabus'>('revision');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('MBBS_THEME', theme);
  }, [theme]);

  // Simulated Date Anchor (defaults dynamically to current real-world date if within window)
  const [simulatedDate, setSimulatedDate] = useState<Date>(() => {
    const today = new Date();
    const minDate = new Date('2026-06-01T00:00:00');
    const maxDate = new Date('2026-10-31T23:59:59');
    if (today >= minDate && today <= maxDate) {
      return today;
    }
    return new Date('2026-10-01T12:00:00');
  });

  // Load curated list of topics (which deduplicates dynamically on load)
  const [topics, setTopics] = useState<Topic[]>(() => {
    const rawCurated = getCuratedSyllabus();
    
    // Check local storage for progress overrides
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const progressMap = JSON.parse(saved) as Record<string, { status: StudyStatus; completedAt?: string } | StudyStatus>;
        return rawCurated.map(topic => {
          if (progressMap[topic.id]) {
            const entry = progressMap[topic.id];
            if (typeof entry === 'object' && entry !== null && 'status' in entry) {
              return { 
                ...topic, 
                status: entry.status,
                completedAt: entry.completedAt
              };
            } else if (typeof entry === 'string') {
              return { ...topic, status: entry as StudyStatus };
            }
          }
          return topic;
        });
      }
    } catch (e) {
      console.error("Failed to load progress from localStorage", e);
    }
    return rawCurated;
  });

  // Save to localStorage when topics change
  const handleStatusChange = (id: string, nextStatus: StudyStatus) => {
    const todayStr = simulatedDate.toISOString().split('T')[0];
    setTopics(prev => {
      const updated = prev.map(topic => {
        if (topic.id === id) {
          return { 
            ...topic, 
            status: nextStatus,
            completedAt: nextStatus === StudyStatus.DONE ? (topic.completedAt || todayStr) : undefined
          };
        }
        return topic;
      });

      // Persist full progress state to local storage
      const progressMap: Record<string, { status: StudyStatus; completedAt?: string }> = {};
      updated.forEach(t => {
        if (t.status !== StudyStatus.NOT_STARTED || t.completedAt) {
          progressMap[t.id] = {
            status: t.status,
            completedAt: t.completedAt
          };
        }
      });
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progressMap));

      return updated;
    });
  };

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | 'ALL'>('ALL');
  const [selectedSubspecialty, setSelectedSubspecialty] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<StudyStatus | 'ALL'>('ALL');
  const [selectedPriority, setSelectedPriority] = useState<StudyPriority | 'ALL'>('ALL');
  const [selectedBatch, setSelectedBatch] = useState<string>('ALL');
  const [showHighYieldOnly, setShowHighYieldOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'PRIORITY' | 'ALPHABETICAL' | 'BATCH'>('PRIORITY');

  // Compute available subspecialties based on selected subject
  const availableSubspecialties = useMemo(() => {
    const filteredBySub = selectedSubject === 'ALL' 
      ? topics 
      : topics.filter(t => t.subject === selectedSubject);
    
    const set = new Set<string>();
    filteredBySub.forEach(t => set.add(t.subspecialty));
    return Array.from(set).sort();
  }, [topics, selectedSubject]);

  // Reset subspecialty if subject changes and previous subspecialty doesn't belong
  useEffect(() => {
    if (selectedSubspecialty !== 'ALL' && !availableSubspecialties.includes(selectedSubspecialty)) {
      setSelectedSubspecialty('ALL');
    }
  }, [selectedSubject, availableSubspecialties, selectedSubspecialty]);

  // Filter topics
  const filteredTopics = useMemo(() => {
    return topics.filter(topic => {
      // Search text match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = topic.topicName.toLowerCase().includes(query);
        const matchesSub = topic.subspecialty.toLowerCase().includes(query);
        const matchesSubject = topic.subject.toLowerCase().includes(query);
        const matchesBatch = topic.batch.toLowerCase().includes(query);
        if (!matchesName && !matchesSub && !matchesSubject && !matchesBatch) {
          return false;
        }
      }

      // Subject Filter
      if (selectedSubject !== 'ALL' && topic.subject !== selectedSubject) {
        return false;
      }

      // Subspecialty Filter
      if (selectedSubspecialty !== 'ALL' && topic.subspecialty !== selectedSubspecialty) {
        return false;
      }

      // Status Filter
      if (selectedStatus !== 'ALL' && topic.status !== selectedStatus) {
        return false;
      }

      // Priority Filter
      if (selectedPriority !== 'ALL' && topic.priority !== selectedPriority) {
        return false;
      }

      // Batch Filter
      if (selectedBatch !== 'ALL' && topic.batch !== selectedBatch) {
        return false;
      }

      // High Yield Toggle
      if (showHighYieldOnly && !topic.highYield) {
        return false;
      }

      return true;
    });
  }, [
    topics, 
    searchQuery, 
    selectedSubject, 
    selectedSubspecialty, 
    selectedStatus, 
    selectedPriority, 
    selectedBatch, 
    showHighYieldOnly
  ]);

  // Sort topics
  const sortedTopics = useMemo(() => {
    return [...filteredTopics].sort((a, b) => {
      if (sortBy === 'ALPHABETICAL') {
        return a.topicName.localeCompare(b.topicName);
      }

      if (sortBy === 'BATCH') {
        const batchDiff = a.batch.localeCompare(b.batch);
        if (batchDiff !== 0) return batchDiff;
        return a.topicName.localeCompare(b.topicName);
      }

      // Default: PRIORITY - HIGH -> ADVANCE_PREP -> UPCOMING
      const priorityOrder = {
        [StudyPriority.HIGH]: 0,
        [StudyPriority.ADVANCE_PREP]: 1,
        [StudyPriority.UPCOMING]: 2
      };
      
      const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) return priorityDiff;

      // Secondary: Batch priority (M3/S3 higher than M1/S1)
      if (b.batchPriority !== a.batchPriority) {
        return b.batchPriority - a.batchPriority; // Descending
      }

      // Tier: High Yield tags appear first
      if (a.highYield !== b.highYield) {
        return a.highYield ? -1 : 1;
      }

      // Fallback: Alphabetical topic name
      return a.topicName.localeCompare(b.topicName);
    });
  }, [filteredTopics, sortBy]);

  // Quick actions: Mark all filtered as completed
  const handleMarkFilteredAsDone = () => {
    const filteredIds = new Set(filteredTopics.map(t => t.id));
    const todayStr = simulatedDate.toISOString().split('T')[0];
    setTopics(prev => prev.map(t => {
      if (filteredIds.has(t.id)) {
        return {
          ...t,
          status: StudyStatus.DONE,
          completedAt: t.completedAt || todayStr
        };
      }
      return t;
    }));
  };

  // Quick actions: Reset progress of all clinical topics
  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all syllabus topic progress to Unread?")) {
      setTopics(prev => prev.map(t => ({ 
        ...t, 
        status: StudyStatus.NOT_STARTED,
        completedAt: undefined
      })));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-6 md:p-8 font-sans transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Countdown and Header */}
        <DashboardHeader
          simulatedDate={simulatedDate}
          setSimulatedDate={setSimulatedDate}
          theme={theme}
          setTheme={setTheme}
        />

        {/* Minimalist Segmented Tabs Navigation */}
        <nav className="flex items-center gap-1.5 bg-slate-200/80 border border-slate-200 p-1.5 rounded-2xl mb-6 self-start w-fit shadow-2xs">
          <button
            id="tab-revision-timetable"
            onClick={() => setActiveTab('revision')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'revision'
                ? 'bg-white text-indigo-950 shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <span>25-Day Revision</span>
            <span className="text-[10px] text-indigo-700 bg-indigo-50 px-1.5 py-0.2 rounded font-mono font-bold">Oct 1–25</span>
          </button>
          <button
            id="tab-study-planner"
            onClick={() => setActiveTab('planner')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'planner'
                ? 'bg-white text-indigo-950 shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <span>15-Week Study Planner</span>
          </button>
          <button
            id="tab-syllabus-search"
            onClick={() => setActiveTab('syllabus')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'syllabus'
                ? 'bg-white text-indigo-950 shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <span>Syllabus Directory</span>
          </button>
        </nav>

        {activeTab === 'revision' ? (
          /* Primary View: 25-Day Revision Timetable (Starting Oct 1, Oct 26 Exam) */
          <RevisionTimetable
            topics={topics}
            simulatedDate={simulatedDate}
            onStatusChange={handleStatusChange}
          />
        ) : (
          <div className="space-y-6">
            {/* Completion stats shown on Planner and Syllabus views */}
            <StatsDashboard topics={topics} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Topics / Planner Container */}
              <div className="lg:col-span-2 space-y-6">
                {activeTab === 'planner' ? (
                  /* 15-Week Study Planner calendar */
                  <>
                    <DailyStudySchedule
                      topics={topics}
                      simulatedDate={simulatedDate}
                      onStatusChange={handleStatusChange}
                    />
                    <div className="mt-6">
                      <StudyMomentumChart topics={topics} simulatedDate={simulatedDate} />
                    </div>
                  </>
                ) : (
                  /* Search & Filter Syllabus list */
                  <>
                    <FiltersSection
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      selectedSubject={selectedSubject}
                      setSelectedSubject={setSelectedSubject}
                      selectedSubspecialty={selectedSubspecialty}
                      setSelectedSubspecialty={setSelectedSubspecialty}
                      selectedStatus={selectedStatus}
                      setSelectedStatus={setSelectedStatus}
                      selectedPriority={selectedPriority}
                      setSelectedPriority={setSelectedPriority}
                      selectedBatch={selectedBatch}
                      setSelectedBatch={setSelectedBatch}
                      showHighYieldOnly={showHighYieldOnly}
                      setShowHighYieldOnly={setShowHighYieldOnly}
                      sortBy={sortBy}
                      setSortBy={setSortBy}
                      availableSubspecialties={availableSubspecialties}
                    />

                    {/* List Heading and Actions */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div>
                        <h3 className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                          <span>Syllabus Topics</span>
                          <span className="text-zinc-500 font-normal">
                            ({sortedTopics.length} lectures)
                          </span>
                        </h3>
                        <p className="text-[11px] text-zinc-500 mt-0.5">
                          Click status to cycle: Unread ➜ Studying ➜ Done.
                        </p>
                      </div>

                      {/* Bulk actions */}
                      <div className="flex items-center gap-2">
                        {sortedTopics.length > 0 && (
                          <button
                            onClick={handleMarkFilteredAsDone}
                            className="text-xs px-2.5 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Mark Filtered Done</span>
                          </button>
                        )}
                        <button
                          onClick={handleResetProgress}
                          className="text-xs px-2.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Reset</span>
                        </button>
                      </div>
                    </div>

                    {/* Topics Render Grid */}
                    <div className="space-y-2.5">
                      {sortedTopics.length > 0 ? (
                        sortedTopics.map(topic => (
                          <TopicCard
                            key={topic.id}
                            topic={topic}
                            onStatusChange={handleStatusChange}
                          />
                        ))
                      ) : (
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
                          <p className="font-medium text-zinc-300 text-xs">No matching syllabus lectures found</p>
                          <p className="text-[11px] text-zinc-500 mt-1">Try resetting or loosening your search filters.</p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Right sidebar widgets */}
              <div className="space-y-6">
                <StudyPlanWidget simulatedDate={simulatedDate} />
                <PostingScheduleBanner simulatedDate={simulatedDate} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
