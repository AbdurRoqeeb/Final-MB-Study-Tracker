import React, { useState, useEffect, useMemo } from 'react';
import { Clock, Sparkles, CheckSquare, Square, RotateCcw, Calendar, ChevronLeft, ChevronRight, Flame, Target, BookOpen } from 'lucide-react';
import { Topic, StudyStatus, SubjectType, StudyPriority } from '../types';

interface DailyStudyScheduleProps {
  topics: Topic[];
  simulatedDate: Date;
  onStatusChange: (id: string, nextStatus: StudyStatus) => void;
}

interface DaySchedule {
  dayIndex: number;
  date: Date;
  weekNumber: number;
  topics: Topic[];
}

export default function DailyStudySchedule({
  topics = [],
  simulatedDate = new Date('2026-06-29T12:00:00'),
  onStatusChange = () => {}
}: DailyStudyScheduleProps) {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

  // Parse simulated date anchor
  const startDateStr = '2026-06-29';
  const startDate = useMemo(() => new Date(startDateStr + 'T00:00:00'), []);

  // Calculate current simulated day index (0 to 104)
  const currentSimulatedDayIndex = useMemo(() => {
    const diffMs = simulatedDate.getTime() - startDate.getTime();
    const day = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return Math.max(0, Math.min(104, day));
  }, [simulatedDate, startDate]);

  // Sync selected week and day to simulated date on mount or when simulated date changes
  useEffect(() => {
    const dayIdx = currentSimulatedDayIndex;
    setSelectedDayIndex(dayIdx);
    setSelectedWeek(Math.floor(dayIdx / 7) + 1);
  }, [currentSimulatedDayIndex]);

  // Deterministically generate the 105-day schedule mapping all syllabus topics
  const daySchedules = useMemo(() => {
    const schedules: DaySchedule[] = [];
    
    // Initialize 105 days
    for (let i = 0; i < 105; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      schedules.push({
        dayIndex: i,
        date: d,
        weekNumber: Math.floor(i / 7) + 1,
        topics: []
      });
    }

    // Sort topics to make sure the distribution is completely stable and high-yield topics are prioritized early in schedules
    const commMed = [...topics]
      .filter(t => t.subject === SubjectType.COMMUNITY_MEDICINE)
      .sort((a, b) => {
        if (a.highYield !== b.highYield) return a.highYield ? -1 : 1;
        return a.topicName.localeCompare(b.topicName);
      });

    const medicine = [...topics]
      .filter(t => t.subject === SubjectType.MEDICINE)
      .sort((a, b) => {
        if (a.highYield !== b.highYield) return a.highYield ? -1 : 1;
        return a.topicName.localeCompare(b.topicName);
      });

    const surgery = [...topics]
      .filter(t => t.subject === SubjectType.SURGERY)
      .sort((a, b) => {
        if (a.highYield !== b.highYield) return a.highYield ? -1 : 1;
        return a.topicName.localeCompare(b.topicName);
      });

    // Helper to safely distribute topics across segments with deterministic spacing
    const distribute = (list: Topic[], partitionPoints: number[], dayRanges: [number, number][]) => {
      list.forEach((topic, idx) => {
        let rangeIdx = 0;
        for (let p = 0; p < partitionPoints.length; p++) {
          if (idx >= partitionPoints[p]) {
            rangeIdx = p + 1;
          }
        }
        
        const [startDay, endDay] = dayRanges[rangeIdx];
        const prevSplit = rangeIdx === 0 ? 0 : partitionPoints[rangeIdx - 1];
        const nextSplit = rangeIdx === partitionPoints.length ? list.length : partitionPoints[rangeIdx];
        const countInThisSegment = nextSplit - prevSplit;
        
        const idxInSegment = idx - prevSplit;
        const segmentLength = endDay - startDay + 1;
        
        // Distribute mathematically and deterministically
        const offset = countInThisSegment > 0 
          ? Math.floor((idxInSegment / countInThisSegment) * segmentLength) 
          : 0;
        const targetDay = Math.min(endDay, startDay + (offset % segmentLength));
        
        schedules[targetDay].topics.push(topic);
      });
    };

    // 1. CommMed: 75% goes to days [0, 34] (Weeks 1-5 active posting), 25% to days [35, 104] (Medicine & Surgery postings)
    const cmSplit = Math.floor(commMed.length * 0.75);
    distribute(commMed, [cmSplit], [[0, 34], [35, 104]]);

    // 2. Medicine: 15% to days [0, 34] (CommMed phase preview), 70% to days [35, 69] (Weeks 6-10 active posting), 15% to days [70, 104] (Surgery phase review)
    const medSplit1 = Math.floor(medicine.length * 0.15);
    const medSplit2 = Math.floor(medicine.length * 0.85);
    distribute(medicine, [medSplit1, medSplit2], [[0, 34], [35, 69], [70, 104]]);

    // 3. Surgery: 15% to days [0, 34] (CommMed phase preview), 15% to days [35, 69] (Medicine phase preview), 70% to days [70, 104] (Weeks 11-15 active posting)
    const surgSplit1 = Math.floor(surgery.length * 0.15);
    const surgSplit2 = Math.floor(surgery.length * 0.30);
    distribute(surgery, [surgSplit1, surgSplit2], [[0, 34], [35, 69], [70, 104]]);

    return schedules;
  }, [topics, startDate]);

  // Overall finish details
  const targetDate = new Date('2026-10-12T00:00:00');
  const diffTime = targetDate.getTime() - simulatedDate.getTime();
  const daysRemaining = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const pendingTopicsCount = topics.filter(t => t.status !== StudyStatus.DONE).length;
  const requiredPace = daysRemaining > 0 ? (pendingTopicsCount / daysRemaining) : 0;

  // Header labels for posting phases
  const getPostingPhaseInfo = (weekNum: number) => {
    if (weekNum <= 5) return { name: "Community Medicine Posting", style: "border-amber-500/30 text-amber-500 bg-amber-500/5" };
    if (weekNum <= 10) return { name: "Internal Medicine Posting", style: "border-blue-500/30 text-blue-400 bg-blue-500/5" };
    return { name: "Surgery Posting & Revision", style: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" };
  };

  const selectedDaySchedule = daySchedules[selectedDayIndex] || { topics: [], date: new Date() };
  
  // Quick navigation helpers
  const handleNextDay = () => {
    if (selectedDayIndex < 104) {
      const nextIdx = selectedDayIndex + 1;
      setSelectedDayIndex(nextIdx);
      setSelectedWeek(Math.floor(nextIdx / 7) + 1);
    }
  };

  const handlePrevDay = () => {
    if (selectedDayIndex > 0) {
      const prevIdx = selectedDayIndex - 1;
      setSelectedDayIndex(prevIdx);
      setSelectedWeek(Math.floor(prevIdx / 7) + 1);
    }
  };

  const handleJumpToToday = () => {
    setSelectedDayIndex(currentSimulatedDayIndex);
    setSelectedWeek(Math.floor(currentSimulatedDayIndex / 7) + 1);
  };

  const formatDateLabel = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  };

  const weekDays = useMemo(() => {
    const startIdx = (selectedWeek - 1) * 7;
    return daySchedules.slice(startIdx, startIdx + 7);
  }, [selectedWeek, daySchedules]);

  // Calculate stats for current week
  const weekStats = useMemo(() => {
    const startIdx = (selectedWeek - 1) * 7;
    const weekScheduleDays = daySchedules.slice(startIdx, startIdx + 7);
    let total = 0;
    let done = 0;
    weekScheduleDays.forEach(day => {
      day.topics.forEach(t => {
        total++;
        if (t.status === StudyStatus.DONE) {
          done++;
        }
      });
    });
    return { total, done, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
  }, [selectedWeek, daySchedules]);

  return (
    <div id="daily-study-schedule" className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-5">
      
      {/* Target Progress Pace Widget */}
      <div className="bg-slate-950 p-4 rounded-lg border border-slate-850 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-xl pointer-events-none"></div>
        <div className="flex justify-between items-center mb-2.5">
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-rose-500 animate-pulse" />
            <h4 className="text-[10px] uppercase font-black text-slate-300 tracking-widest">
              Daily Syllabus Coverage Pace
            </h4>
          </div>
          <span className="text-[9px] font-mono text-slate-500 font-bold uppercase">
            Target: Oct 12, 2026
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center p-2 bg-slate-900/60 rounded border border-slate-850/80 mb-3">
          <div>
            <div className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">Days Left</div>
            <div className="text-xs font-black text-white">{daysRemaining}</div>
          </div>
          <div>
            <div className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">Remaining</div>
            <div className="text-xs font-black text-white">{pendingTopicsCount}</div>
          </div>
          <div>
            <div className="text-[8px] text-rose-400 font-black uppercase tracking-wider">Required Pace</div>
            <div className="text-xs font-black text-rose-400">{requiredPace.toFixed(2)}/day</div>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 leading-relaxed">
          To finish all remaining topics before study revision target, cover exactly <span className="text-amber-400 font-bold">{requiredPace.toFixed(1)}</span> mixed subjects lectures each day.
        </p>
      </div>

      {/* Interactive Calendar Navigator */}
      <div>
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-850">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-amber-500" />
            <h4 className="text-[10px] uppercase font-black text-slate-300 tracking-widest">15-Week Final Postings Planner</h4>
          </div>
          {selectedDayIndex !== currentSimulatedDayIndex && (
            <button
              onClick={handleJumpToToday}
              className="text-[9px] uppercase font-black text-amber-500 hover:text-amber-400 cursor-pointer flex items-center gap-1"
            >
              <Target className="w-3.5 h-3.5" />
              Jump to Today
            </button>
          )}
        </div>

        {/* Week Selector Dropdown and Phase Info */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSelectedWeek(prev => Math.max(1, prev - 1))}
              disabled={selectedWeek === 1}
              className="p-1 rounded bg-slate-950 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <select
              value={selectedWeek}
              onChange={(e) => {
                const wk = Number(e.target.value);
                setSelectedWeek(wk);
                setSelectedDayIndex((wk - 1) * 7);
              }}
              className="bg-slate-950 border border-slate-800 text-slate-200 text-[10px] font-black uppercase tracking-wider rounded px-2.5 py-1 outline-none cursor-pointer"
            >
              {Array.from({ length: 15 }).map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Week {i + 1} of 15
                </option>
              ))}
            </select>
            <button
              onClick={() => setSelectedWeek(prev => Math.min(15, prev + 1))}
              disabled={selectedWeek === 15}
              className="p-1 rounded bg-slate-950 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <span className={`text-[9px] uppercase font-black px-2 py-0.5 rounded border ${getPostingPhaseInfo(selectedWeek).style}`}>
            {getPostingPhaseInfo(selectedWeek).name}
          </span>
        </div>

        {/* 7-Days Horizontal Navigator for Selected Week */}
        <div className="grid grid-cols-7 gap-1 bg-slate-950 p-1 rounded border border-slate-850 mb-4 select-none">
          {weekDays.map((day) => {
            const isSelected = day.dayIndex === selectedDayIndex;
            const isToday = day.dayIndex === currentSimulatedDayIndex;
            const isFinished = day.topics.length > 0 && day.topics.every(t => t.status === StudyStatus.DONE);

            const weekdaysShort = ["M", "T", "W", "T", "F", "S", "S"];
            const dayNum = day.date.getDate();

            return (
              <button
                key={day.dayIndex}
                onClick={() => setSelectedDayIndex(day.dayIndex)}
                className={`flex flex-col items-center py-1.5 rounded cursor-pointer transition-all ${
                  isSelected
                    ? "bg-amber-500 text-slate-950 font-black shadow-[0_0_8px_rgba(245,158,11,0.25)]"
                    : isToday
                    ? "bg-slate-800/80 text-amber-400 border border-amber-500/30"
                    : isFinished
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                <span className="text-[8px] uppercase tracking-wider font-bold mb-0.5">
                  {weekdaysShort[day.dayIndex % 7]}
                </span>
                <span className="text-xs font-black tracking-tight">
                  {dayNum}
                </span>
                {day.topics.length > 0 && (
                  <span className={`w-1 h-1 rounded-full mt-1 ${isSelected ? 'bg-slate-950' : 'bg-slate-600'}`}></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Week Progress breakdown */}
        <div className="flex justify-between items-center text-[9px] text-slate-500 uppercase font-black tracking-wide mb-4">
          <span>Week {selectedWeek} Progress Checklist</span>
          <span className="text-slate-400">
            {weekStats.done} of {weekStats.total} covered • {weekStats.percent}%
          </span>
        </div>

        {/* Current Selected Day Topic Details */}
        <div className="bg-slate-950/60 rounded-lg border border-slate-850 p-4">
          <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-850">
            <div>
              <span className="text-[8px] font-mono text-amber-500 uppercase tracking-widest font-black block">
                Day {selectedDayIndex + 1} of 105 Study Agenda
              </span>
              <h4 className="text-xs font-black text-white">
                {formatDateLabel(selectedDaySchedule.date)}
              </h4>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevDay}
                disabled={selectedDayIndex === 0}
                className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-20 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNextDay}
                disabled={selectedDayIndex === 104}
                className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-20 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Assigned Daily Topic Mix */}
          {selectedDaySchedule.topics.length > 0 ? (
            <div className="space-y-3">
              {selectedDaySchedule.topics.map((topic) => {
                const isDone = topic.status === StudyStatus.DONE;
                const isStudying = topic.status === StudyStatus.IN_PROGRESS;

                const cycleStatus = () => {
                  if (topic.status === StudyStatus.NOT_STARTED) {
                    onStatusChange(topic.id, StudyStatus.IN_PROGRESS);
                  } else if (topic.status === StudyStatus.IN_PROGRESS) {
                    onStatusChange(topic.id, StudyStatus.DONE);
                  } else {
                    onStatusChange(topic.id, StudyStatus.NOT_STARTED);
                  }
                };

                const categoryColors = {
                  [SubjectType.MEDICINE]: "text-blue-400 border-blue-500/20 bg-blue-500/5",
                  [SubjectType.SURGERY]: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
                  [SubjectType.COMMUNITY_MEDICINE]: "text-amber-500 border-amber-500/20 bg-amber-500/5"
                };

                return (
                  <div
                    key={topic.id}
                    className={`p-3 rounded border transition-all flex items-start gap-3 ${
                      isDone
                        ? "bg-slate-900/40 border-slate-900/40 opacity-55"
                        : "bg-slate-900 border-slate-850 hover:border-slate-800"
                    }`}
                  >
                    <button
                      onClick={cycleStatus}
                      className="mt-0.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors shrink-0"
                    >
                      {isDone ? (
                        <CheckSquare className="w-4 h-4 text-emerald-400 animate-pulse" />
                      ) : isStudying ? (
                        <Clock className="w-4 h-4 text-amber-500 animate-pulse" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <span className={`text-[8px] uppercase font-black px-1.5 py-0.2 rounded border ${categoryColors[topic.subject]}`}>
                          {topic.subject === SubjectType.COMMUNITY_MEDICINE ? "CommMed" : topic.subject === SubjectType.MEDICINE ? "Medicine" : "Surgery"}
                        </span>
                        <span className="text-[8px] text-slate-500 uppercase font-mono font-bold">
                          {topic.subspecialty}
                        </span>
                        {topic.highYield && (
                          <span className="text-[8px] text-rose-400 font-black">
                            ⭐ HIGH YIELD
                          </span>
                        )}
                      </div>

                      <h5 className={`text-[11px] font-bold leading-snug ${isDone ? "line-through text-slate-500" : "text-white"}`}>
                        {topic.topicName}
                      </h5>
                      <span className="text-[9px] text-slate-500 mt-0.5 block">
                        Lecturer: <strong className="text-slate-400">{topic.lecturer}</strong>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-6 border border-dashed border-slate-800 rounded bg-slate-900/10">
              <BookOpen className="w-6 h-6 text-slate-700 mx-auto mb-2" />
              <p className="text-[10px] font-bold text-slate-500 uppercase">
                Rest Day or Integrated Practical Review
              </p>
              <p className="text-[9px] text-slate-600 mt-1">
                Use today to catch up on unfinished lectures or review clinical logs.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
