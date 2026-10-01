import React, { useState, useMemo, useEffect } from 'react';
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
  BookOpen,
  Award,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

interface RevisionTimetableProps {
  topics: Topic[];
  simulatedDate: Date;
  onStatusChange: (id: string, nextStatus: StudyStatus) => void;
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

  // Practiced PQ keys stored in localStorage
  const [practicedPQKeys, setPracticedPQKeys] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('MBBS_PRACTICED_PQS');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const togglePracticedPQ = (key: string) => {
    setPracticedPQKeys(prev => {
      const updated = prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key];
      localStorage.setItem('MBBS_PRACTICED_PQS', JSON.stringify(updated));
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
  };

  // Helper component to render a target past question card
  const renderPqCard = (pq?: TargetQuestion, label: string = 'Recommended Past Question') => {
    if (!pq) return null;
    const isDone = practicedPQKeys.includes(pq.key);

    return (
      <div className="mt-3.5 pt-3 border-t border-slate-200/80 bg-white/90 rounded-xl p-3.5 border border-slate-200 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div>
            <div className="text-[10px] font-semibold text-indigo-700 uppercase tracking-wider">
              {label}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 flex items-center gap-2 flex-wrap">
              <span>{pq.key}</span>
              <span className="text-[11px] font-normal text-slate-500 font-mono">({pq.marks})</span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {pq.topicClue}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
            <button
              onClick={() => togglePracticedPQ(pq.key)}
              className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                isDone
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {isDone ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Practiced</span>
                </>
              ) : (
                <>
                  <Circle className="w-3.5 h-3.5 text-slate-400" />
                  <span>Mark Practiced</span>
                </>
              )}
            </button>

            <a
              href="https://finalmbpq.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors inline-flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <span>Search on finalmbpq</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {pq.modelAnswerOutline && pq.modelAnswerOutline.length > 0 && (
          <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-1">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
              Key Checklist Points:
            </span>
            <ul className="space-y-0.5">
              {pq.modelAnswerOutline.map((pt, pIdx) => (
                <li key={pIdx} className="text-xs text-slate-600 flex items-start gap-1.5 leading-relaxed">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
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
      {/* Top Controls: View Selector & Priority Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setViewMode('detailed')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              viewMode === 'detailed'
                ? 'bg-white text-indigo-950 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Day Study View
          </button>
          <button
            onClick={() => setViewMode('matrix')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              viewMode === 'matrix'
                ? 'bg-white text-indigo-950 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            25-Day Full Roadmap
          </button>
          <button
            onClick={() => setViewMode('frequencies')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              viewMode === 'frequencies'
                ? 'bg-white text-indigo-950 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            High-Yield Frequencies
          </button>
        </div>

        {/* Cohesive Time Allocation Pill */}
        <div className="flex items-center gap-2 text-xs text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-2xs flex-wrap">
          <span className="font-semibold text-indigo-900">1. Medicine &amp; Psych (5h · 50%)</span>
          <span className="text-slate-300">/</span>
          <span className="font-semibold text-slate-800">2. Surgery (3.5h · 35%)</span>
          <span className="text-slate-300">/</span>
          <span className="font-semibold text-slate-600">3. Comm Med &amp; PQ (2h · 15%)</span>
        </div>
      </div>

      {viewMode === 'detailed' ? (
        <div className="space-y-6">
          {/* Day Navigation Bar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-3 flex items-center justify-between gap-2 shadow-xs overflow-x-auto">
            <button
              onClick={() => setSelectedDayIndex(prev => Math.max(0, prev - 1))}
              disabled={selectedDayIndex === 0}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer shrink-0"
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
                        ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                        : isToday
                        ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
                    }`}
                  >
                    <span>Day {day.dayNumber}</span>
                    <span className="text-[10px] opacity-80 font-normal">
                      {day.shortDateLabel}
                    </span>
                    {eveningDone && (
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-emerald-500'}`}></span>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setSelectedDayIndex(prev => Math.min(24, prev + 1))}
              disabled={selectedDayIndex === 24}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer shrink-0"
              title="Next Day"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Active Day Overview Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-bold text-indigo-700">Day {activeDay.dayNumber} of 25</span>
                  <span className="text-slate-300">·</span>
                  <span>{activeDay.dateLabel}</span>
                  {selectedDayIndex === currentSimulatedDayIndex && (
                    <>
                      <span className="text-slate-300">·</span>
                      <span className="text-indigo-700 font-semibold bg-indigo-50 px-1.5 py-0.5 rounded">Today</span>
                    </>
                  )}
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600 font-medium">{activeDay.phaseName}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                  {activeDay.dailyTheme}
                </h2>
              </div>

              {/* Progress & Focus Timer */}
              <div className="flex items-center gap-3">
                {activeDayTotal > 0 && (
                  <div className="text-xs text-slate-600 text-right">
                    <span className="font-semibold text-slate-900">{activeDayCompleted}/{activeDayTotal}</span> topics mastered
                  </div>
                )}
                {activeDayTotal > 0 && activeDayCompleted < activeDayTotal && (
                  <button
                    onClick={handleMarkDayDone}
                    className="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium transition-colors cursor-pointer border border-indigo-200"
                  >
                    Mark topics completed
                  </button>
                )}
                <button
                  onClick={() => setShowTimer(!showTimer)}
                  className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                    showTimer
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
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
              <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-indigo-900">
                    {timerMode === 'study' ? '25-Min Study Sprint' : '5-Min Rest Break'}
                  </span>
                  <span className="text-xl font-mono font-bold text-indigo-700">
                    {formatTimer(pomodoroSeconds)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTimer}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                  >
                    {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isTimerRunning ? 'Pause' : 'Start Sprint'}</span>
                  </button>
                  <button
                    onClick={resetTimer}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                    title="Reset timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Editorial Clinical Pearl Box */}
            <div className="bg-indigo-50/50 border-l-4 border-indigo-600 rounded-r-xl p-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-800 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Clinical Pearl &amp; Board Recall Mnemonic</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {activeDay.clinicalPearl}
              </p>
            </div>
          </div>

          {/* Three Prioritized Sessions with Target PQs in Every Block */}
          <div className="space-y-4">
            {/* Session 1: Internal Medicine & Psychiatry (50% Study Time · 5.0h) */}
            <div className="bg-white border border-indigo-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-indigo-900 bg-indigo-100/80 border border-indigo-200 px-2.5 py-0.5 rounded-md">
                    #1 Priority (50% Daily Time)
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    Internal Medicine &amp; Psychiatry
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  8:00 AM – 1:00 PM (5.0 Hours)
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {activeDay.sessions.morning.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeDay.sessions.morning.description}
              </p>

              {/* Target Concept Checklist */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Core High-Yield Concepts for This Morning:
                </span>
                <ul className="space-y-1">
                  {activeDay.sessions.morning.keyObjectives.map((obj, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                      <span className="text-indigo-600 font-bold mt-0.5">–</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Medicine/Psychiatry PQ from finalmbpq */}
              {renderPqCard(activeDay.sessions.morning.targetPq, 'Morning Practice Past Question (finalmbpq.vercel.app)')}
            </div>

            {/* Session 2: Surgery (35% Study Time · 3.5h) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md">
                    #2 Priority (35% Daily Time)
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    Surgery &amp; Operative Principles
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  2:00 PM – 5:30 PM (3.5 Hours)
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {activeDay.sessions.afternoon.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeDay.sessions.afternoon.description}
              </p>

              {/* Target Concept Checklist */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Core High-Yield Concepts for This Afternoon:
                </span>
                <ul className="space-y-1">
                  {activeDay.sessions.afternoon.keyObjectives.map((obj, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                      <span className="text-slate-600 font-bold mt-0.5">–</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Surgery PQ from finalmbpq */}
              {renderPqCard(activeDay.sessions.afternoon.targetPq, 'Afternoon Practice Past Question (finalmbpq.vercel.app)')}
            </div>

            {/* Session 3: Community Medicine & Drill (15% Study Time · 2.0h) */}
            <div className="bg-white border border-sky-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-sky-900 bg-sky-100/80 border border-sky-200 px-2.5 py-0.5 rounded-md">
                    #3 Priority (15% Daily Time)
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    Community Medicine &amp; Evening Drill
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  6:30 PM – 8:30 PM (2.0 Hours)
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {activeDay.sessions.evening.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeDay.sessions.evening.description}
              </p>

              {/* Target Concept Checklist */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Core Public Health Concepts:
                </span>
                <ul className="space-y-1">
                  {activeDay.sessions.evening.keyObjectives.map((obj, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                      <span className="text-sky-700 font-bold mt-0.5">–</span>
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
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Complete 25-Day Revision Matrix (Oct 1 – Oct 25, 2026)
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                All 25 days with 3 targeted past questions per day (75 total PQs mapped to finalmbpq).
              </p>
            </div>
            <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg">
              {practicedPQKeys.length} / 75 Past Question Drills Completed
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-[11px] font-semibold text-slate-600 uppercase bg-slate-50/70">
                  <th className="py-3 px-3">Day / Date</th>
                  <th className="py-3 px-3">Medicine &amp; Psych (5h · 50%)</th>
                  <th className="py-3 px-3">Surgery (3.5h · 35%)</th>
                  <th className="py-3 px-3">Comm Med &amp; PQ (2h · 15%)</th>
                  <th className="py-3 px-3 text-right">View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {REVISION_TIMETABLE.map((day, idx) => {
                  const isToday = idx === currentSimulatedDayIndex;
                  return (
                    <tr
                      key={day.dayNumber}
                      className={`hover:bg-slate-50/80 transition-colors ${
                        isToday ? 'bg-indigo-50/30' : ''
                      }`}
                    >
                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <span>Day {day.dayNumber}</span>
                          {isToday && (
                            <span className="text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.2 rounded font-semibold">
                              Today
                            </span>
                          )}
                        </div>
                        <div className="text-slate-500 text-[11px]">{day.shortDateLabel} ({day.dayOfWeek})</div>
                      </td>

                      <td className="py-3.5 px-3 max-w-[240px]">
                        <span className="font-semibold text-slate-900 block truncate">
                          {day.sessions.morning.title.replace('Internal Medicine: ', '').replace('Psychiatry in Medicine: ', 'Psych: ')}
                        </span>
                        {day.sessions.morning.targetPq && (
                          <span className="text-[11px] text-indigo-700 font-mono block mt-0.5 truncate">
                            PQ: {day.sessions.morning.targetPq.key}
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-3 max-w-[220px]">
                        <span className="font-semibold text-slate-900 block truncate">
                          {day.sessions.afternoon.title.replace('Surgery: ', '')}
                        </span>
                        {day.sessions.afternoon.targetPq && (
                          <span className="text-[11px] text-slate-600 font-mono block mt-0.5 truncate">
                            PQ: {day.sessions.afternoon.targetPq.key}
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-3 max-w-[220px]">
                        <span className="font-semibold text-slate-900 block truncate">
                          {day.sessions.evening.title.replace('Community Medicine & Drill: ', '')}
                        </span>
                        {day.sessions.evening.targetPq && (
                          <span className="text-[11px] text-sky-800 font-mono block mt-0.5 truncate">
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
                          className="text-xs text-indigo-700 hover:text-indigo-900 font-medium px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors cursor-pointer"
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
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Top Exam Topic Frequencies
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Frequency analysis of recurring topics from past LAUTECH MB4 final examination papers.
              </p>
            </div>
            <a
              href="https://finalmbpq.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white bg-indigo-600 hover:bg-indigo-700 font-medium px-3.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-2xs self-start sm:self-auto"
            >
              <span>Visit finalmbpq.vercel.app</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {TOP_TESTED_TOPICS.slice(0, 16).map((topicItem) => (
              <div
                key={topicItem.rank}
                className="bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 flex items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 font-bold">#{topicItem.rank}</span>
                    <span className="text-xs text-indigo-700 font-semibold">{topicItem.specialty}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-slate-900 leading-snug">
                    {topicItem.topic}
                  </h4>
                </div>
                <div className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md shrink-0 font-mono">
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
