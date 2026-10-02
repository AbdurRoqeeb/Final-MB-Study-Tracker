import React, { useState, useEffect, useMemo } from 'react';
import { SubjectType, StudyPriority, Topic, StudyStatus } from './types';
import { getCuratedSyllabus } from './data/syllabus';

// Import components
import DashboardHeader from './components/DashboardHeader';
import StatsDashboard from './components/StatsDashboard';
import FiltersSection from './components/FiltersSection';
import TopicCard from './components/TopicCard';
import RevisionTimetable from './components/RevisionTimetable';
import StudyTipModal from './components/StudyTipModal';
import Footer from './components/Footer';
import { getTopicRevisionRole } from './data/mcqSatelliteData';

import { RotateCcw, CheckCircle2, BookOpen, Layers, Sparkles } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'MBBS_STUDY_TRACKER_STATUS_V2';

export default function App() {
  // Theme Toggle state (defaults to light mode)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('MBBS_THEME');
    return (saved as 'dark' | 'light') || 'light';
  });

  // Tab Selection state: 'revision' (25-day revision timetable for Oct 26 exam) or 'syllabus' (filterable curriculum directory)
  const [activeTab, setActiveTab] = useState<'revision' | 'syllabus'>('revision');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
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

  // Filter States for Syllabus Directory
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | 'ALL'>('ALL');
  const [selectedSubspecialty, setSelectedSubspecialty] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<StudyStatus | 'ALL'>('ALL');
  const [selectedPriority, setSelectedPriority] = useState<StudyPriority | 'ALL'>('ALL');
  const [selectedBatch, setSelectedBatch] = useState<string>('ALL');
  const [showHighYieldOnly, setShowHighYieldOnly] = useState(false);
  const [selectedRevisionPlan, setSelectedRevisionPlan] = useState<'ALL' | 'MCQ_ONLY' | 'CURRICULUM_CORE'>('ALL');
  const [sortBy, setSortBy] = useState<'PRIORITY' | 'ALPHABETICAL' | 'BATCH'>('PRIORITY');

  const isAll = (val?: string) => !val || val.toUpperCase() === 'ALL';

  // Compute available subspecialties based on selected subject
  const availableSubspecialties = useMemo(() => {
    const filteredBySub = isAll(selectedSubject) 
      ? topics 
      : topics.filter(t => t.subject === selectedSubject);
    
    const set = new Set<string>();
    filteredBySub.forEach(t => {
      if (t.subspecialty) set.add(t.subspecialty);
    });
    return Array.from(set).sort();
  }, [topics, selectedSubject]);

  // Reset subspecialty if subject changes and previous subspecialty doesn't belong
  useEffect(() => {
    if (!isAll(selectedSubspecialty) && !availableSubspecialties.includes(selectedSubspecialty)) {
      setSelectedSubspecialty('ALL');
    }
  }, [selectedSubject, availableSubspecialties, selectedSubspecialty]);

  // Filter topics
  const filteredTopics = useMemo(() => {
    return topics.filter(topic => {
      // Search text match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = topic.topicName.toLowerCase().includes(query);
        const matchesSub = topic.subspecialty.toLowerCase().includes(query);
        const matchesSubject = topic.subject.toLowerCase().includes(query);
        const matchesBatch = topic.batch.toLowerCase().includes(query);
        const matchesLecturer = topic.lecturer ? topic.lecturer.toLowerCase().includes(query) : false;
        if (!matchesName && !matchesSub && !matchesSubject && !matchesBatch && !matchesLecturer) {
          return false;
        }
      }

      // Subject Filter
      if (!isAll(selectedSubject) && topic.subject !== selectedSubject) {
        return false;
      }

      // Subspecialty Filter
      if (!isAll(selectedSubspecialty) && topic.subspecialty !== selectedSubspecialty) {
        return false;
      }

      // Status Filter
      if (!isAll(selectedStatus) && topic.status !== selectedStatus) {
        return false;
      }

      // Priority Filter
      if (!isAll(selectedPriority) && topic.priority !== selectedPriority) {
        return false;
      }

      // Batch Filter
      if (!isAll(selectedBatch) && topic.batch !== selectedBatch) {
        return false;
      }

      // High Yield Toggle
      if (showHighYieldOnly && !topic.highYield) {
        return false;
      }

      // Revision Track Filter
      if (selectedRevisionPlan === 'MCQ_ONLY') {
        const role = getTopicRevisionRole(topic.topicName, topic.subject);
        if (role.role !== 'MCQ') return false;
      } else if (selectedRevisionPlan === 'CURRICULUM_CORE') {
        const role = getTopicRevisionRole(topic.topicName, topic.subject);
        if (role.role === 'MCQ') return false;
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
    showHighYieldOnly,
    selectedRevisionPlan
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

  const [isStudyTipOpen, setIsStudyTipOpen] = useState(false);

  const currentDayNumber = useMemo(() => {
    const startMs = new Date('2026-10-01T00:00:00').getTime();
    const curMs = simulatedDate.getTime();
    const diffDays = Math.floor((curMs - startMs) / (1000 * 60 * 60 * 24));
    return Math.max(1, Math.min(25, diffDays + 1));
  }, [simulatedDate]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] text-slate-800 dark:text-slate-100 p-4 sm:p-6 md:p-8 font-sans transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col min-h-screen justify-between">
        <div>
          {/* Main Countdown and Header */}
          <DashboardHeader
            simulatedDate={simulatedDate}
            setSimulatedDate={setSimulatedDate}
            theme={theme}
            setTheme={setTheme}
          />

          {/* Navigation Bar and Popup Trigger */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <nav className="flex items-center gap-1.5 bg-slate-200/80 dark:bg-[#111726] border border-slate-200 dark:border-slate-800 p-1.5 rounded-2xl w-fit shadow-2xs">
              <button
                id="tab-revision-timetable"
                onClick={() => setActiveTab('revision')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'revision'
                    ? 'bg-white dark:bg-indigo-600 text-indigo-950 dark:text-white shadow-xs border border-slate-200/60 dark:border-indigo-500'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>25-Day Revision Timetable</span>
                <span className="text-[10px] text-indigo-700 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/90 px-1.5 py-0.2 rounded font-mono font-bold">Oct 1–25</span>
              </button>
              <button
                id="tab-syllabus-search"
                onClick={() => setActiveTab('syllabus')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'syllabus'
                    ? 'bg-white dark:bg-indigo-600 text-indigo-950 dark:text-white shadow-xs border border-slate-200/60 dark:border-indigo-500'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Syllabus Directory &amp; Filters</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  ({topics.length})
                </span>
              </button>
            </nav>

            {/* Space-Saving Pop-up Trigger Button */}
            <button
              onClick={() => setIsStudyTipOpen(true)}
              className="px-3.5 py-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer flex items-center gap-2 self-start sm:self-auto"
              title="Open Gemini AI clinical study strategy pop-up"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Study Tip of the Day</span>
              <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded font-mono">AI</span>
            </button>
          </div>

          {/* Study Tip Modal Pop-up */}
          <StudyTipModal
            isOpen={isStudyTipOpen}
            onClose={() => setIsStudyTipOpen(false)}
            dayNumber={currentDayNumber}
          />

          {activeTab === 'revision' ? (
            /* Primary View: 25-Day Revision Timetable (Starting Oct 1, Oct 26 Exam) */
            <RevisionTimetable
              topics={topics}
              simulatedDate={simulatedDate}
              onStatusChange={handleStatusChange}
            />
          ) : (
            /* Preserved View: Filterable Syllabus Directory */
            <div className="space-y-6">
              {/* Overall & Posting Group Progress Metrics */}
              <StatsDashboard topics={topics} />

              {/* Comprehensive Filter & Search Controls */}
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
                selectedRevisionPlan={selectedRevisionPlan}
                setSelectedRevisionPlan={setSelectedRevisionPlan}
                sortBy={sortBy}
                setSortBy={setSortBy}
                availableSubspecialties={availableSubspecialties}
              />

              {/* Action Toolbar & Topic Counter */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-2xs">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Clinical Curriculum Lectures</span>
                    <span className="text-[11px] font-semibold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 px-2 py-0.5 rounded-md">
                      {sortedTopics.length} Matches
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Click any status button to cycle: Unread ➜ Studying ➜ Done.
                  </p>
                </div>

                {/* Bulk Actions */}
                <div className="flex items-center gap-2">
                  {sortedTopics.length > 0 && (
                    <button
                      onClick={handleMarkFilteredAsDone}
                      className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700 transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mark Filtered Done</span>
                    </button>
                  )}
                  <button
                    onClick={handleResetProgress}
                    className="text-xs font-medium px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#131929] hover:bg-slate-200 dark:hover:bg-[#1b233a] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Progress</span>
                  </button>
                </div>
              </div>

              {/* Topics Grid */}
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
                  <div className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center shadow-xs space-y-3">
                    <BookOpen className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto" />
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">No matching syllabus lectures found</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                        Your current filter criteria returned 0 lectures. Reset or loosen your filters to display topics.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedSubject('ALL');
                        setSelectedSubspecialty('ALL');
                        setSelectedStatus('ALL');
                        setSelectedPriority('ALL');
                        setSelectedBatch('ALL');
                        setSelectedRevisionPlan('ALL');
                        setShowHighYieldOnly(false);
                      }}
                      className="text-xs font-semibold px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-2xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset All Filters</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Global Academic Footer */}
        <Footer onNavigateTab={setActiveTab} activeTab={activeTab} />
      </div>
    </div>
  );
}
