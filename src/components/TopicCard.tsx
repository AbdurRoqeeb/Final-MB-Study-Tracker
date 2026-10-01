import React from 'react';
import { Topic, StudyStatus } from '../types';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface TopicCardProps {
  key?: string | number;
  topic: Topic;
  onStatusChange: (id: string, nextStatus: StudyStatus) => void;
}

export default function TopicCard({ topic, onStatusChange }: TopicCardProps) {
  const { id, subject, batch, topicName, subspecialty, highYield, status } = topic;

  // Cycle statuses: NOT_STARTED -> IN_PROGRESS -> DONE -> NOT_STARTED
  const handleStatusCycle = () => {
    if (status === StudyStatus.NOT_STARTED) {
      onStatusChange(id, StudyStatus.IN_PROGRESS);
    } else if (status === StudyStatus.IN_PROGRESS) {
      onStatusChange(id, StudyStatus.DONE);
    } else {
      onStatusChange(id, StudyStatus.NOT_STARTED);
    }
  };

  const statusConfig = {
    [StudyStatus.NOT_STARTED]: {
      bg: "bg-white dark:bg-[#131929] border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600",
      icon: <Circle className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />,
      label: "Unread"
    },
    [StudyStatus.IN_PROGRESS]: {
      bg: "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/80",
      icon: <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />,
      label: "Studying"
    },
    [StudyStatus.DONE]: {
      bg: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60",
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />,
      label: "Done"
    }
  };

  return (
    <div
      id={`topic-card-${id}`}
      className={`border rounded-xl p-4 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        status === StudyStatus.DONE
          ? "bg-slate-50/70 dark:bg-[#090d16]/70 border-slate-200/80 dark:border-slate-800 opacity-75"
          : "bg-white dark:bg-[#0d121f] border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 shadow-2xs"
      }`}
    >
      {/* Metadata & Title */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1 flex-wrap">
          <span className="font-semibold text-indigo-900 dark:text-indigo-300">{subject}</span>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-slate-700 dark:text-slate-300 font-medium">{subspecialty}</span>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">Batch {batch}</span>
          {highYield && (
            <>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-700/80 px-1.5 py-0.2 rounded text-[10px] font-bold">High Yield</span>
            </>
          )}
        </div>

        <h4 className={`text-xs sm:text-sm font-semibold leading-snug ${
          status === StudyStatus.DONE ? "line-through text-slate-400 dark:text-slate-500" : "text-slate-900 dark:text-white"
        }`}>
          {topicName}
        </h4>
      </div>

      {/* Status Toggle Action */}
      <div className="shrink-0 self-end sm:self-center">
        <button
          onClick={handleStatusCycle}
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer border ${statusConfig[status].bg}`}
          title="Click to cycle study status"
        >
          {statusConfig[status].icon}
          <span>{statusConfig[status].label}</span>
        </button>
      </div>
    </div>
  );
}
