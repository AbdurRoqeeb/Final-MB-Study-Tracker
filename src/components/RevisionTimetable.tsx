import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Topic, StudyStatus } from '../types';
import { REVISION_TIMETABLE, RevisionDay, TargetQuestion } from '../data/revisionPlan';
import { TOP_TESTED_TOPICS } from '../data/pqRepository';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  CheckCircle2,
  Circle,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Search,
  X,
  Flame,
  Target,
  BarChart3,
  TrendingUp,
  Layers,
  ArrowRight
} from 'lucide-react';

interface RevisionTimetableProps {
  topics: Topic[];
  simulatedDate: Date;
  onStatusChange: (id: string, nextStatus: StudyStatus) => void;
}

interface StreakState {
  activeDates: string[]; // YYYY-MM-DD
  currentStreak: number;
  longestStreak: number;
}

export default function RevisionTimetable({
  topics,
  simulatedDate,
  onStatusChange
}: RevisionTimetableProps) {
  // View mode: 'detailed' (day-by-day focus) | 'matrix' (full 25-day roadmap) | 'frequencies' (frequency ranking reference)
  const [viewMode, setViewMode] = useState<'detailed' | 'matrix' | 'frequencies'>('detailed');

  // Selected day index (0 to 24, corresponding to Day 1 to Day 25)
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

  // Quick Search Query
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Practiced PQ keys stored in localStorage
  const [practicedPQKeys, setPracticedPQKeys] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('MBBS_PRACTICED_PQS');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Study Streak State stored in localStorage
  const [streakState, setStreakState] = useState<StreakState>(() => {
    try {
      const saved = localStorage.getItem('MBBS_STUDY_STREAK_V2');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    const todayStr = '2026-10-01';
    return {
      activeDates: [todayStr],
      currentStreak: 1,
      longestStreak: 1
    };
  });

  // Record an active study date to maintain streak
  const recordStudyActivity = (dateStr?: string) => {
    const todayKey = dateStr || simulatedDate.toISOString().split('T')[0];
    setStreakState(prev => {
      if (prev.activeDates.includes(todayKey)) return prev;

      const newDates = [...prev.activeDates, todayKey].sort();
      const newStreak = prev.currentStreak + 1;
      const newLongest = Math.max(prev.longestStreak, newStreak);
      const updated = {
        activeDates: newDates,
        currentStreak: newStreak,
        longestStreak: newLongest
      };
      localStorage.setItem('MBBS_STUDY_STREAK_V2', JSON.stringify(updated));
      return updated;
    });
  };

  const togglePracticedPQ = (key: string) => {
    setPracticedPQKeys(prev => {
      const isRemoving = prev.includes(key);
      const updated = isRemoving ? prev.filter(k => k !== key) : [...prev, key];
      localStorage.setItem('MBBS_PRACTICED_PQS', JSON.stringify(updated));
      if (!isRemoving) {
        recordStudyActivity();
      }
      return updated;
    });
  };

  // Pomodoro timer state
  const [pomodoroSeconds, setPomodoroSeconds] = useState<number>(1500);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<'study' | 'break'>('study');
  const [showTimer, setShowTimer] = useState<boolean>(false);

  // Calculate current simulated day index (Day 1 starts Oct 1, 2026)
  const currentSimulatedDayIndex = useMemo(() => {
    const startMs = new Date('2026-10-01T00:00:00').getTime();
    const curMs = simulatedDate.getTime();
    const diffDays = Math.floor((curMs - startMs) / (1000 * 60 * 60 * 24));
    return Math.max(0, Math.min(24, diffDays));
  }, [simulatedDate]);

  useEffect(() => {
    setSelectedDayIndex(currentSimulatedDayIndex);
  }, [currentSimulatedDayIndex]);

  // Pomodoro timer effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && pomodoroSeconds > 0) {
      interval = setInterval(() => {
        setPomodoroSeconds(prev => prev - 1);
      }, 1000);
    } else if (pomodoroSeconds === 0) {
      setIsTimerRunning(false);
      if (timerMode === 'study') {
        setTimerMode('break');
        setPomodoroSeconds(300);
      } else {
        setTimerMode('study');
        setPomodoroSeconds(1500);
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, pomodoroSeconds, timerMode]);

  const toggleTimer = () => setIsTimerRunning(prev => !prev);
  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerMode('study');
    setPomodoroSeconds(1500);
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Jump to Today Action
  const handleJumpToToday = () => {
    setSelectedDayIndex(currentSimulatedDayIndex);
    setViewMode('detailed');
  };

  const activeDay = REVISION_TIMETABLE[selectedDayIndex] || REVISION_TIMETABLE[0];

  // Helper to map daily session keywords to real syllabus topics in state
  const getTopicsForDay = (day: RevisionDay): Topic[] => {
    const keywords: string[] = [
      ...day.sessions.morning.suggestedTopicKeywords,
      ...day.sessions.afternoon.suggestedTopicKeywords,
      ...day.sessions.evening.suggestedTopicKeywords
    ];

    const matchedMap = new Map<string, Topic>();

    keywords.forEach(kw => {
      const normKw = kw.toLowerCase().trim();
      topics.forEach(t => {
        if (t.topicName.toLowerCase().includes(normKw) || t.subspecialty.toLowerCase().includes(normKw)) {
          if (!matchedMap.has(t.id)) {
            matchedMap.set(t.id, t);
          }
        }
      });
    });

    return Array.from(matchedMap.values());
  };

  const activeDayTopics = useMemo(() => getTopicsForDay(activeDay), [activeDay, topics]);
  const activeDayCompleted = activeDayTopics.filter(t => t.status === StudyStatus.DONE).length;
  const activeDayTotal = activeDayTopics.length;

  const handleMarkDayDone = () => {
    activeDayTopics.forEach(t => {
      if (t.status !== StudyStatus.DONE) {
        onStatusChange(t.id, StudyStatus.DONE);
      }
    });
    recordStudyActivity();
  };

  // Quick Search Matching across all 25 days
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();

    return REVISION_TIMETABLE.map((day, idx) => {
      const matches: string[] = [];

      if (day.dailyTheme.toLowerCase().includes(q)) matches.push(`Theme: ${day.dailyTheme}`);
      if (day.clinicalPearl.toLowerCase().includes(q)) matches.push(`Pearl: ${day.clinicalPearl.slice(0, 80)}...`);

      // Sessions & PQs
      const morningPq = day.sessions.morning.targetPq;
      if (day.sessions.morning.title.toLowerCase().includes(q)) matches.push(`Morning: ${day.sessions.morning.title}`);
      if (morningPq?.key.toLowerCase().includes(q) || morningPq?.topicClue.toLowerCase().includes(q)) {
        matches.push(`Morning PQ: ${morningPq?.key} — ${morningPq?.topicClue}`);
      }

      const afternoonPq = day.sessions.afternoon.targetPq;
      if (day.sessions.afternoon.title.toLowerCase().includes(q)) matches.push(`Afternoon: ${day.sessions.afternoon.title}`);
      if (afternoonPq?.key.toLowerCase().includes(q) || afternoonPq?.topicClue.toLowerCase().includes(q)) {
        matches.push(`Afternoon PQ: ${afternoonPq?.key} — ${afternoonPq?.topicClue}`);
      }

      const eveningPq = day.sessions.evening.targetPq;
      if (day.sessions.evening.title.toLowerCase().includes(q)) matches.push(`Evening: ${day.sessions.evening.title}`);
      if (eveningPq?.key.toLowerCase().includes(q) || eveningPq?.topicClue.toLowerCase().includes(q)) {
        matches.push(`Evening PQ: ${eveningPq?.key} — ${eveningPq?.topicClue}`);
      }

      const allObjectives = [
        ...day.sessions.morning.keyObjectives,
        ...day.sessions.afternoon.keyObjectives,
        ...day.sessions.evening.keyObjectives
      ];
      const matchedObj = allObjectives.find(o => o.toLowerCase().includes(q));
      if (matchedObj) matches.push(`Concept: ${matchedObj}`);

      if (matches.length > 0) {
        return {
          day,
          dayIndex: idx,
          matches
        };
      }
      return null;
    }).filter(Boolean) as { day: RevisionDay; dayIndex: number; matches: string[] }[];
  }, [searchQuery]);

  // Overall Revision Progress Metrics (75 PQs total, 25 days)
  const totalPQs = 75;
  const practicedCount = practicedPQKeys.length;
  const pqProgressPercent = Math.min(100, Math.round((practicedCount / totalPQs) * 100));

  // Compute days where at least 1 PQ was practiced
  const daysWithPracticedPQ = useMemo(() => {
    let count = 0;
    REVISION_TIMETABLE.forEach(day => {
      const mDone = day.sessions.morning.targetPq && practicedPQKeys.includes(day.sessions.morning.targetPq.key);
      const aDone = day.sessions.afternoon.targetPq && practicedPQKeys.includes(day.sessions.afternoon.targetPq.key);
      const eDone = day.sessions.evening.targetPq && practicedPQKeys.includes(day.sessions.evening.targetPq.key);
      if (mDone || aDone || eDone) count++;
    });
    return count;
  }, [practicedPQKeys]);
  const daysPercent = Math.min(100, Math.round((daysWithPracticedPQ / 25) * 100));

  // 7-Day Study Streak Visualizer Strip
  const streakStrip = useMemo(() => {
    const days: { dateStr: string; dayName: string; isActive: boolean; isToday: boolean }[] = [];
    const baseDate = new Date(simulatedDate);

    for (let i = 6; i >= 0; i--) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const dayName = d.toLocaleDateString('en-US', { weekday: 'narrow' });
      const isActive = streakState.activeDates.includes(dateStr);
      const isToday = i === 0;
      days.push({ dateStr, dayName, isActive, isToday });
    }
    return days;
  }, [simulatedDate, streakState.activeDates]);

  // Helper component to render a target past question card
  const renderPqCard = (pq?: TargetQuestion, label: string = 'Recommended Past Question') => {
    if (!pq) return null;
    const isDone = practicedPQKeys.includes(pq.key);

    return (
      <div className="mt-3.5 pt-3 border-t border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-[#090d16] rounded-xl p-3.5 border border-slate-200 dark:border-slate-800 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div>
            <div className="text-[10px] font-semibold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
              {label}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 flex items-center gap-2 flex-wrap">
              <span>{pq.key}</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 font-mono">({pq.marks})</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              {pq.topicClue}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
            <button
              onClick={() => togglePracticedPQ(pq.key)}
              className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                isDone
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300'
                  : 'bg-white dark:bg-[#131929] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-[#1b233a]'
              }`}
            >
              {isDone ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Practiced</span>
                </>
              ) : (
                <>
                  <Circle className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>Mark Practiced</span>
                </>
              )}
            </button>

            <a
              href="https://finalmbpq.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 hover:dark:bg-indigo-600 text-white font-medium transition-colors inline-flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <span>Search on finalmbpq</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {pq.modelAnswerOutline && pq.modelAnswerOutline.length > 0 && (
          <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Key Checklist Points:
            </span>
            <ul className="space-y-0.5">
              {pq.modelAnswerOutline.map((pt, pIdx) => (
                <li key={pIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5 leading-relaxed">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Controls: View Selector, Search Bar & Priority Breakdown */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        {/* View switcher tabs */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#131929] p-1 rounded-xl border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setViewMode('detailed')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              viewMode === 'detailed'
                ? 'bg-white dark:bg-indigo-600 text-indigo-950 dark:text-white font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Day Study View
          </button>
          <button
            onClick={() => setViewMode('matrix')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              viewMode === 'matrix'
                ? 'bg-white dark:bg-indigo-600 text-indigo-950 dark:text-white font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            25-Day Roadmap ({practicedCount}/75)
          </button>
          <button
            onClick={() => setViewMode('frequencies')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              viewMode === 'frequencies'
                ? 'bg-white dark:bg-indigo-600 text-indigo-950 dark:text-white font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Exam Frequencies
          </button>
        </div>

        {/* Quick Search Bar */}
        <div className="relative flex-1 max-w-md">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Quick search topics, PQs, or mnemonics (e.g. Schizophrenia, Q2 Jan 2025)..."
              className="w-full bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-8 py-1.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 shadow-2xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Search Floating Results Dropdown */}
          {searchQuery.trim() && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white dark:bg-[#0f1524] border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg z-30 max-h-80 overflow-y-auto p-2 space-y-1.5">
              <div className="flex items-center justify-between px-2 py-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">
                <span>Search Matches ({searchResults.length} days found)</span>
                <span className="text-[10px] text-slate-400">Click to jump to day</span>
              </div>

              {searchResults.length > 0 ? (
                searchResults.map(({ day, dayIndex, matches }) => (
                  <button
                    key={day.dayNumber}
                    onClick={() => {
                      setSelectedDayIndex(dayIndex);
                      setViewMode('detailed');
                      setSearchQuery('');
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-indigo-50/70 dark:hover:bg-indigo-950/60 transition-colors border border-transparent hover:border-indigo-100 dark:hover:border-indigo-800 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white mb-0.5">
                      <span className="group-hover:text-indigo-700 dark:group-hover:text-indigo-400">
                        Day {day.dayNumber} ({day.shortDateLabel}): {day.dailyTheme}
                      </span>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 shrink-0 ml-1" />
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {matches[0]}
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-xs text-slate-500 dark:text-slate-400">
                  No revision topics match "{searchQuery}". Try another keyword or question code.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Jump to Today Button */}
        {selectedDayIndex !== currentSimulatedDayIndex && (
          <button
            onClick={handleJumpToToday}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 hover:dark:bg-indigo-600 text-white text-xs font-semibold shadow-2xs transition-all cursor-pointer shrink-0 animate-pulse"
            title="Snap immediately to current day"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Jump to Today (Day {currentSimulatedDayIndex + 1})</span>
          </button>
        )}
      </div>

      {/* Aesthetic Progress Bar & Study Streak Visualizer Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 & 2: Revision Progress Bar */}
        <div className="md:col-span-2 bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Revision Progress &amp; PQ Mastery
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Targeting 75 authentic exam past questions across the 25-day schedule.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 px-2.5 py-1 rounded-lg">
                {practicedCount} / 75 PQs Practiced ({pqProgressPercent}%)
              </span>
              <span className="text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#131929] border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg">
                {daysWithPracticedPQ} / 25 Days Active ({daysPercent}%)
              </span>
            </div>
          </div>

          {/* Unified Progress Bar */}
          <div className="space-y-1.5">
            <div className="w-full bg-slate-100 dark:bg-[#151c2d] h-2.5 rounded-full overflow-hidden flex border border-slate-200/80 dark:border-slate-700">
              <div
                className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-500"
                style={{ width: `${pqProgressPercent}%` }}
                title={`PQs Practiced: ${pqProgressPercent}%`}
              ></div>
              <div
                className="bg-indigo-300 dark:bg-indigo-800/80 h-full transition-all duration-500"
                style={{ width: `${Math.max(0, daysPercent - pqProgressPercent)}%` }}
                title={`Days Covered: ${daysPercent}%`}
              ></div>
            </div>

            {/* 4 Exam Phases Milestone Indicators */}
            <div className="grid grid-cols-4 text-[10px] text-slate-400 dark:text-slate-500 font-medium pt-0.5">
              <div className="border-l border-slate-200 dark:border-slate-800 pl-1.5">
                <span className="block font-semibold text-slate-700 dark:text-slate-300">Phase 1</span>
                <span>Days 1–7 (Foundations)</span>
              </div>
              <div className="border-l border-slate-200 dark:border-slate-800 pl-1.5">
                <span className="block font-semibold text-slate-700 dark:text-slate-300">Phase 2</span>
                <span>Days 8–14 (Subspecialties)</span>
              </div>
              <div className="border-l border-slate-200 dark:border-slate-800 pl-1.5">
                <span className="block font-semibold text-slate-700 dark:text-slate-300">Phase 3</span>
                <span>Days 15–21 (Complex Cases)</span>
              </div>
              <div className="border-l border-slate-200 dark:border-slate-800 pl-1.5">
                <span className="block font-semibold text-slate-700 dark:text-slate-300">Phase 4</span>
                <span>Days 22–25 (Exam Sprint)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Study Streak Visualizer */}
        <div className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-700/60 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold">
                <Flame className="w-4 h-4 fill-indigo-600 dark:fill-indigo-400 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                  Study Streak
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Daily consistency
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-base font-extrabold text-indigo-700 dark:text-indigo-400 font-mono">
                {streakState.currentStreak} Days
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                Best: {streakState.longestStreak}d
              </div>
            </div>
          </div>

          {/* 7-Day Streak Blocks Strip */}
          <div className="bg-slate-50 dark:bg-[#080b13] border border-slate-200/80 dark:border-slate-800 rounded-xl p-2.5">
            <div className="flex items-center justify-between text-center gap-1">
              {streakStrip.map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 mb-1">
                    {item.dayName}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                      item.isActive
                        ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-2xs'
                        : item.isToday
                        ? 'bg-indigo-50 dark:bg-indigo-950/80 border-2 border-indigo-400 dark:border-indigo-500 text-indigo-700 dark:text-indigo-300'
                        : 'bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600'
                    }`}
                    title={`${item.dateStr}: ${item.isActive ? 'Studied' : 'Pending'}`}
                  >
                    {item.isActive ? (
                      <Flame className="w-3 h-3 fill-white text-white" />
                    ) : item.isToday ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                    ) : (
                      <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => recordStudyActivity()}
            className="w-full py-1 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white bg-indigo-50 dark:bg-indigo-950/80 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 rounded-lg transition-colors cursor-pointer border border-indigo-200 dark:border-indigo-700/60"
          >
            ✓ Check-in Today's Study Session
          </button>
        </div>
      </div>

      {viewMode === 'detailed' ? (
        <div className="space-y-6">
          {/* Day Navigation Bar with Jump to Today */}
          <div className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-3 flex items-center justify-between gap-2 shadow-xs overflow-x-auto">
            <button
              onClick={() => setSelectedDayIndex(prev => Math.max(0, prev - 1))}
              disabled={selectedDayIndex === 0}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer shrink-0"
              title="Previous Day"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Horizontal Day Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 px-1 scrollbar-none">
              {REVISION_TIMETABLE.map((day, idx) => {
                const isSelected = idx === selectedDayIndex;
                const isToday = idx === currentSimulatedDayIndex;
                const eveningDone = day.sessions.evening.targetPq
                  ? practicedPQKeys.includes(day.sessions.evening.targetPq.key)
                  : false;

                return (
                  <button
                    key={day.dayNumber}
                    onClick={() => setSelectedDayIndex(idx)}
                    className={`px-3 py-2 rounded-xl text-xs transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-indigo-600 dark:bg-indigo-500 text-white font-semibold shadow-xs'
                        : isToday
                        ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-700'
                        : 'bg-slate-50 dark:bg-[#111726] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a2339] hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-800'
                    }`}
                  >
                    <span>Day {day.dayNumber}</span>
                    <span className="text-[10px] opacity-80 font-normal">
                      {day.shortDateLabel}
                    </span>
                    {eveningDone && (
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-emerald-500 dark:bg-emerald-400'}`}></span>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setSelectedDayIndex(prev => Math.min(24, prev + 1))}
              disabled={selectedDayIndex === 24}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer shrink-0"
              title="Next Day"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Active Day Overview Card */}
          <div className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400">Day {activeDay.dayNumber} of 25</span>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <span className="dark:text-slate-300">{activeDay.dateLabel}</span>
                  {selectedDayIndex === currentSimulatedDayIndex && (
                    <>
                      <span className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="text-indigo-700 dark:text-indigo-300 font-semibold bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 px-2 py-0.5 rounded">Today</span>
                    </>
                  )}
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <span className="text-slate-600 dark:text-slate-300 font-medium">{activeDay.phaseName}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeDay.dailyTheme}
                </h2>
              </div>

              {/* Progress & Focus Timer & Jump to Today Button */}
              <div className="flex items-center gap-2.5 flex-wrap">
                {selectedDayIndex !== currentSimulatedDayIndex && (
                  <button
                    onClick={handleJumpToToday}
                    className="text-xs px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-700 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Target className="w-3.5 h-3.5" />
                    <span>Jump to Today</span>
                  </button>
                )}

                {activeDayTotal > 0 && (
                  <div className="text-xs text-slate-600 dark:text-slate-300 text-right">
                    <span className="font-semibold text-slate-900 dark:text-white">{activeDayCompleted}/{activeDayTotal}</span> topics mastered
                  </div>
                )}
                {activeDayTotal > 0 && activeDayCompleted < activeDayTotal && (
                  <button
                    onClick={handleMarkDayDone}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#131929] hover:bg-slate-200 dark:hover:bg-[#1b233a] text-slate-800 dark:text-slate-200 font-medium transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
                  >
                    Mark topics done
                  </button>
                )}
                <button
                  onClick={() => setShowTimer(!showTimer)}
                  className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                    showTimer
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white dark:bg-[#131929] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#1b233a]'
                  }`}
                  title="Toggle 25-minute Pomodoro Timer"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-mono font-semibold">{formatTimer(pomodoroSeconds)}</span>
                </button>
              </div>
            </div>

            {/* Collapsible Timer Box */}
            {showTimer && (
              <div className="bg-indigo-50/70 dark:bg-[#0c1426] border border-indigo-200 dark:border-indigo-700/60 rounded-xl p-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-indigo-900 dark:text-indigo-200">
                    {timerMode === 'study' ? '25-Min Study Sprint' : '5-Min Rest Break'}
                  </span>
                  <span className="text-xl font-mono font-bold text-indigo-700 dark:text-indigo-400">
                    {formatTimer(pomodoroSeconds)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTimer}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 hover:dark:bg-indigo-600 text-white text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                  >
                    {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isTimerRunning ? 'Pause' : 'Start Sprint'}</span>
                  </button>
                  <button
                    onClick={resetTimer}
                    className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                    title="Reset timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Editorial Clinical Pearl Box */}
            <div className="bg-indigo-50/50 dark:bg-[#10172c] border-l-4 border-indigo-600 dark:border-indigo-400 rounded-r-xl p-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-800 dark:text-indigo-300 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Clinical Pearl &amp; Board Recall Mnemonic</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                {activeDay.clinicalPearl}
              </p>
            </div>
          </div>

          {/* Three Prioritized Sessions with Target PQs in Every Block */}
          <div className="space-y-4">
            {/* Session 1: Internal Medicine & Psychiatry (50% Study Time · 5.0h) */}
            <div className="bg-white dark:bg-[#0d121f] border border-indigo-200/80 dark:border-indigo-500/30 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-100/80 dark:bg-indigo-950/90 border border-indigo-200 dark:border-indigo-700 px-2.5 py-0.5 rounded-md">
                    #1 Priority (50% Daily Time)
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Internal Medicine &amp; Psychiatry
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#131929] px-2 py-0.5 rounded border dark:border-slate-800">
                  8:00 AM – 1:00 PM (5.0 Hours)
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {activeDay.sessions.morning.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeDay.sessions.morning.description}
              </p>

              {/* Target Concept Checklist */}
              <div className="bg-slate-50 dark:bg-[#080b13] border border-slate-200/80 dark:border-slate-800 rounded-xl p-3.5 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Core High-Yield Concepts for This Morning:
                </span>
                <ul className="space-y-1">
                  {activeDay.sessions.morning.keyObjectives.map((obj, i) => (
                    <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">–</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Medicine/Psychiatry PQ from finalmbpq */}
              {renderPqCard(activeDay.sessions.morning.targetPq, 'Morning Practice Past Question (finalmbpq.vercel.app)')}
            </div>

            {/* Session 2: Surgery (35% Study Time · 3.5h) */}
            <div className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded-md">
                    #2 Priority (35% Daily Time)
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Surgery &amp; Operative Principles
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#131929] px-2 py-0.5 rounded border dark:border-slate-800">
                  2:00 PM – 5:30 PM (3.5 Hours)
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {activeDay.sessions.afternoon.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeDay.sessions.afternoon.description}
              </p>

              {/* Target Concept Checklist */}
              <div className="bg-slate-50 dark:bg-[#080b13] border border-slate-200/80 dark:border-slate-800 rounded-xl p-3.5 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Core High-Yield Concepts for This Afternoon:
                </span>
                <ul className="space-y-1">
                  {activeDay.sessions.afternoon.keyObjectives.map((obj, i) => (
                    <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-slate-600 dark:text-slate-400 font-bold mt-0.5">–</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Surgery PQ from finalmbpq */}
              {renderPqCard(activeDay.sessions.afternoon.targetPq, 'Afternoon Practice Past Question (finalmbpq.vercel.app)')}
            </div>

            {/* Session 3: Community Medicine & Drill (15% Study Time · 2.0h) */}
            <div className="bg-white dark:bg-[#0d121f] border border-sky-200/80 dark:border-sky-500/30 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-sky-900 dark:text-sky-200 bg-sky-100/80 dark:bg-sky-950/90 border border-sky-200 dark:border-sky-700 px-2.5 py-0.5 rounded-md">
                    #3 Priority (15% Daily Time)
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Community Medicine &amp; Evening Drill
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#131929] px-2 py-0.5 rounded border dark:border-slate-800">
                  6:30 PM – 8:30 PM (2.0 Hours)
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {activeDay.sessions.evening.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeDay.sessions.evening.description}
              </p>

              {/* Target Concept Checklist */}
              <div className="bg-slate-50 dark:bg-[#080b13] border border-slate-200/80 dark:border-slate-800 rounded-xl p-3.5 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Core Public Health Concepts:
                </span>
                <ul className="space-y-1">
                  {activeDay.sessions.evening.keyObjectives.map((obj, i) => (
                    <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-sky-700 dark:text-sky-400 font-bold mt-0.5">–</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Comm Med PQ from finalmbpq */}
              {renderPqCard(activeDay.sessions.evening.targetPq, 'Evening Practice Past Question (finalmbpq.vercel.app)')}
            </div>
          </div>
        </div>
      ) : viewMode === 'matrix' ? (
        /* Full 25-Day Revision Roadmap */
        <div className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Complete 25-Day Revision Matrix (Oct 1 – Oct 25, 2026)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                All 25 days with 3 targeted past questions per day (75 total PQs mapped to finalmbpq).
              </p>
            </div>
            <div className="flex items-center gap-3">
              {selectedDayIndex !== currentSimulatedDayIndex && (
                <button
                  onClick={handleJumpToToday}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>Jump to Today</span>
                </button>
              )}
              <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 px-3 py-1.5 rounded-lg">
                {practicedCount} / 75 Past Question Drills Completed
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase bg-slate-50/70 dark:bg-[#070a11]">
                  <th className="py-3 px-3">Day / Date</th>
                  <th className="py-3 px-3">Medicine &amp; Psych (5h · 50%)</th>
                  <th className="py-3 px-3">Surgery (3.5h · 35%)</th>
                  <th className="py-3 px-3">Comm Med &amp; PQ (2h · 15%)</th>
                  <th className="py-3 px-3 text-right">View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {REVISION_TIMETABLE.map((day, idx) => {
                  const isToday = idx === currentSimulatedDayIndex;
                  const isSelected = idx === selectedDayIndex;
                  return (
                    <tr
                      key={day.dayNumber}
                      className={`hover:bg-slate-50/80 dark:hover:bg-[#131929] transition-colors ${
                        isToday ? 'bg-indigo-50/30 dark:bg-indigo-950/30' : isSelected ? 'bg-slate-50 dark:bg-[#131929]/50' : ''
                      }`}
                    >
                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>Day {day.dayNumber}</span>
                          {isToday && (
                            <span className="text-[10px] text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-700 px-1.5 py-0.2 rounded font-semibold">
                              Today
                            </span>
                          )}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-[11px]">{day.shortDateLabel} ({day.dayOfWeek})</div>
                      </td>

                      <td className="py-3.5 px-3 max-w-[240px]">
                        <span className="font-semibold text-slate-900 dark:text-white block truncate">
                          {day.sessions.morning.title.replace('Internal Medicine: ', '').replace('Psychiatry in Medicine: ', 'Psych: ')}
                        </span>
                        {day.sessions.morning.targetPq && (
                          <span className="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block mt-0.5 truncate">
                            PQ: {day.sessions.morning.targetPq.key}
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-3 max-w-[220px]">
                        <span className="font-semibold text-slate-900 dark:text-slate-200 block truncate">
                          {day.sessions.afternoon.title.replace('Surgery: ', '')}
                        </span>
                        {day.sessions.afternoon.targetPq && (
                          <span className="text-[11px] text-slate-600 dark:text-slate-400 font-mono block mt-0.5 truncate">
                            PQ: {day.sessions.afternoon.targetPq.key}
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-3 max-w-[220px]">
                        <span className="font-semibold text-slate-900 dark:text-slate-200 block truncate">
                          {day.sessions.evening.title.replace('Community Medicine & Drill: ', '')}
                        </span>
                        {day.sessions.evening.targetPq && (
                          <span className="text-[11px] text-sky-800 dark:text-sky-400 font-mono block mt-0.5 truncate">
                            PQ: {day.sessions.evening.targetPq.key}
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => {
                            setSelectedDayIndex(idx);
                            setViewMode('detailed');
                          }}
                          className="text-xs text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white font-medium px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 hover:bg-indigo-100 dark:hover:bg-indigo-900 border border-indigo-200 dark:border-indigo-700 transition-colors cursor-pointer"
                        >
                          Open Day
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Top Exam Frequencies Reference View */
        <div className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Top Exam Topic Frequencies
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Frequency analysis of recurring topics from past LAUTECH MB4 final examination papers.
              </p>
            </div>
            <a
              href="https://finalmbpq.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 font-medium px-3.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-2xs self-start sm:self-auto"
            >
              <span>Visit finalmbpq.vercel.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {TOP_TESTED_TOPICS.slice(0, 16).map((topicItem) => (
              <div
                key={topicItem.rank}
                className="bg-slate-50/70 dark:bg-[#070a11] border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 font-bold">#{topicItem.rank}</span>
                    <span className="text-xs text-indigo-700 dark:text-indigo-400 font-semibold">{topicItem.specialty}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white leading-snug">
                    {topicItem.topic}
                  </h4>
                </div>
                <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-700 px-2 py-0.5 rounded-md shrink-0 font-mono">
                  {topicItem.frequency}×
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
