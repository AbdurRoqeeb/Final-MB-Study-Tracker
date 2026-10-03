import React, { useState, useMemo, useEffect } from 'react';
import { Topic, StudyStatus, SubjectType } from '../types';
import { getDayGroupedSyllabusTopics, SpecialtyMcqGroup } from '../data/mcqGroupedPlan';
import {
  Layers,
  CheckCircle2,
  Circle,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  CheckCheck,
  Clock,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  Sparkles,
  Link as LinkIcon
} from 'lucide-react';

interface McqGroupedSatelliteCardProps {
  dayNumber: number;
  topics: Topic[];
  onStatusChange: (id: string, nextStatus: StudyStatus) => void;
  onNavigateToSyllabus?: (searchTerm: string) => void;
}

export default function McqGroupedSatelliteCard({
  dayNumber,
  topics,
  onStatusChange,
  onNavigateToSyllabus
}: McqGroupedSatelliteCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<SubjectType>(SubjectType.MEDICINE);

  // Dedicated interactive MCQ drill timer state
  const [drillSeconds, setDrillSeconds] = useState<number>(900); // 15 mins default
  const [isDrillRunning, setIsDrillRunning] = useState<boolean>(false);
  const [showDrillTimer, setShowDrillTimer] = useState<boolean>(false);

  // Grouped syllabus topics for active day
  const { grouping, medicineTopics, surgeryTopics, commMedTopics, totalTopicsCount } = useMemo(() => {
    return getDayGroupedSyllabusTopics(dayNumber, topics);
  }, [dayNumber, topics]);

  // Overall completed count for this day's group
  const allDayTopics = [...medicineTopics, ...surgeryTopics, ...commMedTopics];
  const dayDoneCount = allDayTopics.filter(t => t.status === StudyStatus.DONE).length;

  const currentGroup: { group: SpecialtyMcqGroup; topicList: Topic[] } = useMemo(() => {
    if (activeTab === SubjectType.SURGERY) {
      return { group: grouping.surgeryGroup, topicList: surgeryTopics };
    }
    if (activeTab === SubjectType.COMMUNITY_MEDICINE) {
      return { group: grouping.commMedGroup, topicList: commMedTopics };
    }
    return { group: grouping.medicineGroup, topicList: medicineTopics };
  }, [activeTab, grouping, medicineTopics, surgeryTopics, commMedTopics]);

  // Timer countdown effect
  useEffect(() => {
    let interval: any = null;
    if (isDrillRunning && drillSeconds > 0) {
      interval = setInterval(() => {
        setDrillSeconds(prev => prev - 1);
      }, 1000);
    } else if (drillSeconds === 0) {
      setIsDrillRunning(false);
    }
    return () => clearInterval(interval);
  }, [isDrillRunning, drillSeconds]);

  const setTimerDuration = (mins: number) => {
    setIsDrillRunning(false);
    setDrillSeconds(mins * 60);
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleToggleTopic = (topic: Topic) => {
    const nextStatus = topic.status === StudyStatus.DONE
      ? StudyStatus.NOT_STARTED
      : StudyStatus.DONE;
    onStatusChange(topic.id, nextStatus);
  };

  const handleMarkGroupDone = (list: Topic[]) => {
    list.forEach(t => {
      if (t.status !== StudyStatus.DONE) {
        onStatusChange(t.id, StudyStatus.DONE);
      }
    });
  };

  return (
    <div className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs transition-colors mb-5">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-700/80 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Related MCQ Syllabus Topics (Day {dayNumber})
              </h3>
              <span className="text-[10px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 px-2 py-0.2 rounded-md font-mono">
                {dayDoneCount}/{totalTopicsCount} Lectures Mastered
              </span>
              <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 px-2 py-0.2 rounded-md font-mono flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{grouping.totalAllocatedMinutes}m Total MCQ Time</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Specific syllabus lectures paired directly with today's essay topics, with allocated study times for thorough MCQ mastery.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setShowDrillTimer(!showDrillTimer)}
            className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs ${
              showDrillTimer
                ? 'bg-indigo-50 dark:bg-indigo-950/80 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#131929] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            title="Toggle MCQ drill study timer"
          >
            <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>MCQ Timer</span>
            {isDrillRunning && (
              <span className="font-mono text-emerald-600 dark:text-emerald-400 text-[10px]">
                {formatTimer(drillSeconds)}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer shadow-2xs transition-colors"
            title={isExpanded ? "Collapse MCQ panel" : "Expand MCQ panel"}
          >
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Optional Integrated Drill Timer Strip */}
      {isExpanded && showDrillTimer && (
        <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-[#090d18] border border-indigo-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 font-mono text-base">
              ⏱️ {formatTimer(drillSeconds)}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500">
              ({currentGroup.group.timePerTopicMinutes}m target per topic)
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setTimerDuration(15)}
              className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400"
            >
              15m
            </button>
            <button
              onClick={() => setTimerDuration(20)}
              className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400"
            >
              20m
            </button>
            <button
              onClick={() => setTimerDuration(30)}
              className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400"
            >
              30m
            </button>

            <button
              onClick={() => setIsDrillRunning(!isDrillRunning)}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1 cursor-pointer"
            >
              {isDrillRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isDrillRunning ? 'Pause' : 'Start'}</span>
            </button>

            <button
              onClick={() => {
                setIsDrillRunning(false);
                setDrillSeconds(currentGroup.group.timePerTopicMinutes * 60);
              }}
              className="p-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-[#131929] text-slate-500 cursor-pointer"
              title="Reset timer"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {isExpanded && (
        <div className="mt-3.5 space-y-4">
          {/* Specialty Selector Tabs */}
          <div className="flex items-center justify-between gap-2 flex-wrap border-b border-slate-100 dark:border-slate-800/80 pb-2.5">
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-[#131929] p-1 rounded-xl">
              <button
                onClick={() => setActiveTab(SubjectType.MEDICINE)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === SubjectType.MEDICINE
                    ? 'bg-white dark:bg-indigo-600 text-indigo-950 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Medicine Cluster</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200/60 dark:bg-black/20">
                  {medicineTopics.length}
                </span>
                <span className="text-[9px] font-mono font-bold text-indigo-600 dark:text-indigo-300">
                  {grouping.medicineGroup.allocatedTimeMinutes}m
                </span>
              </button>

              <button
                onClick={() => setActiveTab(SubjectType.SURGERY)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === SubjectType.SURGERY
                    ? 'bg-white dark:bg-indigo-600 text-indigo-950 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Surgery Cluster</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200/60 dark:bg-black/20">
                  {surgeryTopics.length}
                </span>
                <span className="text-[9px] font-mono font-bold text-indigo-600 dark:text-indigo-300">
                  {grouping.surgeryGroup.allocatedTimeMinutes}m
                </span>
              </button>

              <button
                onClick={() => setActiveTab(SubjectType.COMMUNITY_MEDICINE)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === SubjectType.COMMUNITY_MEDICINE
                    ? 'bg-white dark:bg-indigo-600 text-indigo-950 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Comm Med Cluster</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200/60 dark:bg-black/20">
                  {commMedTopics.length}
                </span>
                <span className="text-[9px] font-mono font-bold text-indigo-600 dark:text-indigo-300">
                  {grouping.commMedGroup.allocatedTimeMinutes}m
                </span>
              </button>
            </div>

            <button
              onClick={() => handleMarkGroupDone(currentGroup.topicList)}
              className="text-xs font-semibold px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#131929] hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
            >
              <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Mark All {currentGroup.topicList.length} Done</span>
            </button>
          </div>

          {/* Time Allocation & Related Essay Topic Alignment Banner */}
          <div className="bg-indigo-50/70 dark:bg-[#111728] border border-indigo-200/80 dark:border-indigo-800/60 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <LinkIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <div className="text-xs">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Aligned with Today's Essay Topic:
                </span>
                <span className="font-bold text-indigo-950 dark:text-white">
                  {currentGroup.group.relatedEssayTopic}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 bg-white/80 dark:bg-[#0c121e] px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-slate-700">
              <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono">
                {currentGroup.group.allocatedTimeMinutes} mins allocated (~{currentGroup.group.timePerTopicMinutes}m/topic)
              </span>
            </div>
          </div>

          {/* Group Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left: Syllabus Topics Checklist (7 cols) */}
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Syllabus Directory Lectures ({currentGroup.topicList.length} topics)
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {currentGroup.topicList.filter(t => t.status === StudyStatus.DONE).length} of {currentGroup.topicList.length} completed
                </span>
              </div>

              {currentGroup.topicList.length > 0 ? (
                <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-1">
                  {currentGroup.topicList.map(topic => {
                    const isDone = topic.status === StudyStatus.DONE;

                    return (
                      <div
                        key={topic.id}
                        onClick={() => handleToggleTopic(topic)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
                          isDone
                            ? 'bg-emerald-50/50 dark:bg-[#07130f] border-emerald-200 dark:border-emerald-800/60 text-slate-500'
                            : 'bg-slate-50/60 dark:bg-[#0a0f1c] border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <button
                            type="button"
                            className="shrink-0 text-slate-400 hover:text-indigo-600 cursor-pointer"
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                            )}
                          </button>

                          <div className="min-w-0">
                            <span className={`text-xs font-semibold block truncate leading-tight ${
                              isDone ? 'line-through text-slate-400 dark:text-slate-500' : ''
                            }`}>
                              {topic.topicName}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              Batch {topic.batch} · {topic.subspecialty}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-black/30 px-1.5 py-0.2 rounded border border-slate-200/60 dark:border-slate-800">
                            ⏱️ {currentGroup.group.timePerTopicMinutes}m
                          </span>

                          {topic.highYield && (
                            <span className="text-[9px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 px-1.5 py-0.2 rounded">
                              High Yield
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 text-center text-xs text-slate-400 border border-dashed rounded-xl">
                  No direct syllabus lectures found matching this cluster.
                </div>
              )}
            </div>

            {/* Right: High-Yield MCQ Pearls & Traps (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50/40 via-white to-sky-50/30 dark:from-[#0a0f1c] dark:via-[#090e1a] dark:to-[#081224] border border-indigo-100 dark:border-indigo-900/40 rounded-xl p-3.5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-indigo-100/70 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-950 dark:text-indigo-200">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>MCQ Exam Pearls for this Cluster</span>
                </div>
              </div>

              {/* Master Pearl */}
              <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-white/80 dark:bg-[#070b14] border-l-3 border-indigo-600 dark:border-indigo-400 p-2.5 rounded-r-lg font-medium">
                {currentGroup.group.highYieldPearl}
              </div>

              {/* Specific MCQ stems */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Frequently Tested MCQ / SBA Stems:
                </span>
                {currentGroup.group.mcqExamTips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed bg-white/60 dark:bg-[#0c121e] border border-slate-200/50 dark:border-slate-800/80 p-2 rounded-lg"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
