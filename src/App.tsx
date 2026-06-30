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

import { Award, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'MBBS_STUDY_TRACKER_STATUS_V2';

export default function App() {
  // Theme Toggle state (defaults to dark mode)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('MBBS_THEME');
    return (saved as 'dark' | 'light') || 'dark';
  });

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
    const maxDate = new Date('2026-10-25T23:59:59');
    if (today >= minDate && today <= maxDate) {
      return today;
    }
    return new Date('2026-06-29T12:00:00');
  });

  // Load curated list of topics (which deduplicates dynamically on load)
  const [topics, setTopics] = useState<Topic[]>(() => {
    const rawCurated = getCuratedSyllabus();
    
    // Check local storage for progress overrides
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const progressMap = JSON.parse(saved) as Record<string, StudyStatus>;
        return rawCurated.map(topic => {
          // Match by topicName normalize-key to be robust against ID shifts
          const key = `${topic.subject}_${topic.topicName.trim().toLowerCase()}`;
          if (progressMap[key]) {
            return { ...topic, status: progressMap[key] };
          }
          return topic;
        });
      }
    } catch (e) {
      console.error("Failed to parse local storage status map:", e);
    }
    
    return rawCurated;
  });

  // Save progress changes to local storage on topics update
  useEffect(() => {
    const progressMap: Record<string, StudyStatus> = {};
    topics.forEach(t => {
      const key = `${t.subject}_${t.topicName.trim().toLowerCase()}`;
      progressMap[key] = t.status;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progressMap));
  }, [topics]);

  // Handle topic status cycle change
  const handleStatusChange = (id: string, nextStatus: StudyStatus) => {
    setTopics(prev => prev.map(t => t.id === id ? { ...t, status: nextStatus } : t));
  };

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedSubspecialty, setSelectedSubspecialty] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [showHighYieldOnly, setShowHighYieldOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'alphabetical' | 'status'>('default');

  // Dynamically compute available subspecialties based on selected subject
  const availableSubspecialties = useMemo(() => {
    const filteredList = topics.filter(t => selectedSubject === "All" || t.subject === selectedSubject);
    const setOfSubs = new Set<string>();
    filteredList.forEach(t => setOfSubs.add(t.subspecialty));
    return Array.from(setOfSubs).sort();
  }, [topics, selectedSubject]);

  // Filtered list computation
  const filteredTopics = useMemo(() => {
    return topics.filter(t => {
      // Keyword match
      const normQuery = searchQuery.toLowerCase().trim();
      const matchSearch = searchQuery === "" ||
        t.topicName.toLowerCase().includes(normQuery) ||
        t.lecturer.toLowerCase().includes(normQuery);

      // Subject match
      const matchSubject = selectedSubject === "All" || t.subject === selectedSubject;

      // Subspecialty match
      const matchSubspecialty = selectedSubspecialty === "All" || t.subspecialty === selectedSubspecialty;

      // Status match
      const matchStatus = selectedStatus === "All" || t.status === selectedStatus;

      // Priority match
      const matchPriority = selectedPriority === "All" || t.priority === selectedPriority;

      // Batch match
      const matchBatch = selectedBatch === "All" || t.batch === selectedBatch;

      // High yield match
      const matchHighYield = !showHighYieldOnly || t.highYield;

      return matchSearch && matchSubject && matchSubspecialty && matchStatus && matchPriority && matchBatch && matchHighYield;
    });
  }, [topics, searchQuery, selectedSubject, selectedSubspecialty, selectedStatus, selectedPriority, selectedBatch, showHighYieldOnly]);

  // Sorted list computation
  const sortedTopics = useMemo(() => {
    return [...filteredTopics].sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.topicName.localeCompare(b.topicName);
      }
      if (sortBy === 'status') {
        const orderStatus = {
          [StudyStatus.NOT_STARTED]: 0,
          [StudyStatus.IN_PROGRESS]: 1,
          [StudyStatus.DONE]: 2
        };
        return orderStatus[a.status] - orderStatus[b.status];
      }

      // Default Sort Order: Layered priority sort
      // Layer 1: Posting Priority (🔴 HIGH -> 🟡 ADVANCE PREP -> 🟢 UPCOMING)
      const priorityOrder = {
        [StudyPriority.HIGH]: 0,
        [StudyPriority.ADVANCE_PREP]: 1,
        [StudyPriority.UPCOMING]: 2
      };
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }

      // Layer 2: Lecture Batch Priority (recent Medicine 2/3 and Surgery 2/3 rank higher than M1/S1)
      if (b.batchPriority !== a.batchPriority) {
        return b.batchPriority - a.batchPriority; // Descending
      }

      // Tier: ⭐ High Yield tags appear first
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
    setTopics(prev => prev.map(t => filteredIds.has(t.id) ? { ...t, status: StudyStatus.DONE } : t));
  };

  // Quick actions: Reset progress of all clinical topics
  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all syllabus topic progress to Unread?")) {
      setTopics(prev => prev.map(t => ({ ...t, status: StudyStatus.NOT_STARTED })));
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 font-sans transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Countdown and Calendar Navigation Header */}
        <DashboardHeader
          simulatedDate={simulatedDate}
          setSimulatedDate={setSimulatedDate}
          theme={theme}
          setTheme={setTheme}
        />

        {/* Syllabus Completion Statistics Grid */}
        <StatsDashboard topics={topics} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Topics Container */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Filter and Search Box */}
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
                <h3 className="text-[10px] uppercase font-black text-slate-300 tracking-widest flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  Syllabus Topics List
                  <span className="text-[9px] uppercase font-bold bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">
                    {sortedTopics.length} Matches
                  </span>
                </h3>
                <p className="text-[9px] uppercase font-bold text-slate-500 mt-1">
                  Click statuses to cycle: Unread ➜ Studying ➜ Done.
                </p>
              </div>

              {/* Bulk actions */}
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                {sortedTopics.length > 0 && (
                  <button
                    onClick={handleMarkFilteredAsDone}
                    className="flex-1 sm:flex-initial text-[10px] uppercase font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 px-3 py-1.5 rounded transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Mark Filtered Done
                  </button>
                )}
                <button
                  onClick={handleResetProgress}
                  className="flex-1 sm:flex-initial text-[10px] uppercase font-bold bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white px-3 py-1.5 rounded transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Progress
                </button>
              </div>
            </div>

            {/* Topics Render Grid */}
            <div className="space-y-3">
              {sortedTopics.length > 0 ? (
                sortedTopics.map(topic => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    onStatusChange={handleStatusChange}
                  />
                ))
              ) : (
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-10 text-center shadow-sm">
                  <Sparkles className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                  <p className="font-bold text-slate-300 text-xs uppercase tracking-wider">No matching syllabus lectures found</p>
                  <p className="text-[11px] text-slate-500 mt-1">Try resetting or loosening your search filters to show more topics.</p>
                </div>
              )}
            </div>

          </div>

          {/* Right sidebar widgets */}
          <div className="space-y-6">
            {/* Interactive Daily Study Schedule */}
            <DailyStudySchedule
              topics={topics}
              simulatedDate={simulatedDate}
              onStatusChange={handleStatusChange}
            />

            {/* Dynamic recommended daily planner */}
            <StudyPlanWidget simulatedDate={simulatedDate} />

            {/* Posting Schedule Timeline Banner */}
            <PostingScheduleBanner simulatedDate={simulatedDate} />

            {/* Pro Study Tips */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
              <h4 className="text-[10px] uppercase font-black text-slate-300 tracking-widest pb-3 border-b border-slate-850 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                LAUTECH Final MB Strategy
              </h4>
              <ul className="space-y-3 text-[11px] text-slate-400 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold shrink-0">1.</span>
                  <span><strong className="text-slate-200">Active Posting Focus:</strong> Never completely neglect Medicine or Surgery. Study them in the background (using 30% split) during CommMed!</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold shrink-0">2.</span>
                  <span><strong className="text-slate-200">Recency Advantage:</strong> Within Medicine and Surgery groups, focus first on <strong className="text-slate-300">M2/M3</strong> and <strong className="text-slate-300">S2/S3</strong> as they represent more recent lectures.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold shrink-0">3.</span>
                  <span><strong className="text-slate-200">High-Yield Leverage:</strong> Subspecialties like <em className="text-slate-300">Cardiology, Nephrology, Urology, Trauma, and Epidemiology</em> historically carry the highest weight. Star-mark ⭐ these on your list.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold shrink-0">4.</span>
                  <span><strong className="text-slate-200">Past Question Sync:</strong> Once a topic is marked as Completed, review relevant LAUTECH essay questions to test retention.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
