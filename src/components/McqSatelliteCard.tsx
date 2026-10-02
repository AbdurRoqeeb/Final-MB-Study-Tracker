import React, { useState } from 'react';
import { Topic, StudyStatus } from '../types';
import {
  getDayMcqSatellite,
  findMatchingSyllabusTopic,
  DayMcqPlan,
  McqSyllabusItem
} from '../data/mcqSatelliteData';
import {
  CheckSquare,
  Square,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Layers,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

interface McqSatelliteCardProps {
  dayNumber: number;
  topics: Topic[];
  onStatusChange: (id: string, nextStatus: StudyStatus) => void;
  onNavigateToSyllabus?: (searchTerm: string) => void;
}

export default function McqSatelliteCard({
  dayNumber,
  topics,
  onStatusChange,
  onNavigateToSyllabus
}: McqSatelliteCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const dayData: DayMcqPlan = getDayMcqSatellite(dayNumber);
  const { medicine, surgery, commMed } = dayData.satelliteTopics;

  const itemsList = [medicine, surgery, commMed];

  // Resolve each syllabus item to its corresponding Topic in the syllabus directory
  const resolvedItems = itemsList.map((item: McqSyllabusItem) => {
    const matched = findMatchingSyllabusTopic(item, topics);
    const isDone = matched ? matched.status === StudyStatus.DONE : false;
    const isStudying = matched ? matched.status === StudyStatus.IN_PROGRESS : false;
    return {
      item,
      matchedTopic: matched,
      isDone,
      isStudying
    };
  });

  const dayDoneCount = resolvedItems.filter(r => r.isDone).length;

  const handleToggleStatus = (matchedTopic?: Topic) => {
    if (!matchedTopic) return;
    const nextStatus = matchedTopic.status === StudyStatus.DONE
      ? StudyStatus.NOT_STARTED
      : StudyStatus.DONE;
    onStatusChange(matchedTopic.id, nextStatus);
  };

  return (
    <div className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs transition-colors">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-700/80 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
              <Layers className="w-3.5 h-3.5" />
            </span>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              MCQ Syllabus Satellite Drill (Day {dayNumber})
            </h3>
            <span className="text-[10px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 px-2 py-0.2 rounded-md font-mono">
              {dayDoneCount}/3 Syllabus Topics Mastered
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Linked directly to authentic curriculum lectures in the Syllabus Directory that are prime targets for Multiple Choice &amp; Single Best Answer questions.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer shadow-2xs"
            title={isExpanded ? "Collapse MCQ panel" : "Expand MCQ panel"}
          >
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* 3 MCQ Satellite Topic Blocks */}
      {isExpanded && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {resolvedItems.map(({ item, matchedTopic, isDone, isStudying }) => {
            const displayName = matchedTopic ? matchedTopic.topicName : item.fallbackTopicName;
            const batchLabel = matchedTopic ? `Batch ${matchedTopic.batch}` : 'Syllabus Core';

            return (
              <div
                key={item.id}
                className={`rounded-xl p-4 border transition-all flex flex-col justify-between space-y-3 ${
                  isDone
                    ? 'bg-emerald-50/40 dark:bg-[#07130f] border-emerald-200 dark:border-emerald-800/60'
                    : isStudying
                    ? 'bg-indigo-50/30 dark:bg-[#091122] border-indigo-200/80 dark:border-indigo-800/60'
                    : 'bg-slate-50/70 dark:bg-[#080c14] border-slate-200/80 dark:border-slate-800'
                }`}
              >
                <div>
                  {/* Top Badges & Status Checkbox */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/70 dark:border-indigo-800 px-2 py-0.5 rounded font-mono uppercase tracking-wider">
                        {item.specialty}
                      </span>
                      <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded font-mono">
                        {batchLabel}
                      </span>
                    </div>

                    {matchedTopic && (
                      <button
                        onClick={() => handleToggleStatus(matchedTopic)}
                        className={`text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                          isDone
                            ? 'text-emerald-700 dark:text-emerald-400'
                            : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                        title="Click to sync topic status in Syllabus Directory"
                      >
                        {isDone ? (
                          <>
                            <CheckSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>Done</span>
                          </>
                        ) : (
                          <>
                            <Square className="w-3.5 h-3.5 text-slate-400" />
                            <span>Mark Done</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Title directly from syllabus */}
                  <div className="mb-2">
                    <div className="text-[10px] font-medium text-slate-400 dark:text-slate-500 mb-0.5 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-slate-400" />
                      <span>Syllabus Directory Lecture:</span>
                    </div>
                    <h4 className={`text-xs sm:text-sm font-bold leading-snug ${
                      isDone
                        ? 'line-through text-slate-500 dark:text-slate-400'
                        : 'text-slate-900 dark:text-white'
                    }`}>
                      {displayName}
                    </h4>
                  </div>

                  {/* Why tested in MCQ */}
                  <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">MCQ Stem / Exam Trap: </span>
                    {item.whyMcqFavorite}
                  </div>

                  {/* Vignette Clue */}
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 italic bg-white/80 dark:bg-[#0c121e] border border-slate-200/60 dark:border-slate-800 p-2 rounded-lg">
                    <span className="font-semibold text-indigo-700 dark:text-indigo-400 not-italic">Clinical Vignette: </span>
                    "{item.classicVignetteClue}"
                  </div>
                </div>

                {/* Bottom Takeaway & Link */}
                <div className="pt-2.5 border-t border-slate-200/60 dark:border-slate-800 space-y-2">
                  <div className="text-[11px] text-indigo-900 dark:text-indigo-300 flex items-start gap-1.5 font-medium">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item.singleBestAnswerFact}</span>
                  </div>

                  {onNavigateToSyllabus && matchedTopic && (
                    <button
                      onClick={() => onNavigateToSyllabus(matchedTopic.topicName.split(' ')[0])}
                      className="text-[10px] font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer transition-colors pt-0.5"
                    >
                      <span>Find in Syllabus Directory</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
