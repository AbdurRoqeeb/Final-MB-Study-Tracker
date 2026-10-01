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
      bg: "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300",
      icon: <Circle className="w-3.5 h-3.5 text-slate-400" />,
      label: "Unread"
    },
    [StudyStatus.IN_PROGRESS]: {
      bg: "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100",
      icon: <Clock className="w-3.5 h-3.5 text-indigo-600" />,
      label: "Studying"
    },
    [StudyStatus.DONE]: {
      bg: "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100",
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />,
      label: "Done"
    }
  };

  return (
    <div
      id={`topic-card-${id}`}
      className={`border rounded-xl p-4 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        status === StudyStatus.DONE
          ? "bg-slate-50/70 border-slate-200/80 opacity-75"
          : "bg-white border-slate-200 hover:border-indigo-300 shadow-2xs"
      }`}
    >
      {/* Metadata & Title */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1 flex-wrap">
          <span className="font-semibold text-indigo-900">{subject}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-700 font-medium">{subspecialty}</span>
          <span className="text-slate-300">·</span>
          <span className="font-mono text-[11px] text-slate-500">Batch {batch}</span>
          {highYield && (
            <>
              <span className="text-slate-300">·</span>
              <span className="text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.2 rounded text-[10px] font-bold">High Yield</span>
            </>
          )}
        </div>

        <h4 className={`text-xs sm:text-sm font-semibold leading-snug ${
          status === StudyStatus.DONE ? "line-through text-slate-400" : "text-slate-900"
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
