import React from 'react';
import { Topic, StudyStatus, StudyPriority, SubjectType } from '../types';
import { CheckCircle2, Circle, Clock, Star } from 'lucide-react';

interface TopicCardProps {
  key?: string | number;
  topic: Topic;
  onStatusChange: (id: string, nextStatus: StudyStatus) => void;
}

export default function TopicCard({ topic, onStatusChange }: TopicCardProps) {
  const { id, subject, batch, topicName, lecturer, subspecialty, priority, highYield, status } = topic;

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

  // Badge styles based on Subject Type
  const subjectBadgeStyles = {
    [SubjectType.MEDICINE]: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    [SubjectType.SURGERY]: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    [SubjectType.COMMUNITY_MEDICINE]: "bg-amber-500/10 text-amber-500 border-amber-500/20"
  };

  // Badge styles based on Priority
  const priorityBadgeStyles = {
    [StudyPriority.HIGH]: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    [StudyPriority.ADVANCE_PREP]: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    [StudyPriority.UPCOMING]: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  };

  const priorityLabel = {
    [StudyPriority.HIGH]: "🔴 High Yield NOW",
    [StudyPriority.ADVANCE_PREP]: "🟡 Advance Prep",
    [StudyPriority.UPCOMING]: "🟢 Upcoming"
  };

  // Status visual styles
  const statusStyles = {
    [StudyStatus.NOT_STARTED]: {
      bg: "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white",
      icon: <Circle className="w-3.5 h-3.5 text-slate-500" />,
      label: "Not Started"
    },
    [StudyStatus.IN_PROGRESS]: {
      bg: "bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400",
      icon: <Clock className="w-3.5 h-3.5 text-slate-950 animate-pulse" />,
      label: "In Progress"
    },
    [StudyStatus.DONE]: {
      bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20",
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />,
      label: "Completed"
    }
  };

  return (
    <div
      id={`topic-card-${id}`}
      className={`border rounded-xl p-4 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
        status === StudyStatus.DONE
          ? "bg-slate-900/30 border-slate-800/80 opacity-75"
          : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:shadow-md"
      }`}
    >
      {/* Left side: Metadata & Info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {/* Subject Badge */}
          <span className={`text-[9px] uppercase font-black px-1.5 py-0.5 rounded border ${subjectBadgeStyles[subject]}`}>
            {subject}
          </span>

          {/* Source Batch Label Chip */}
          <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-950/60 border border-slate-800 text-slate-400 font-mono" title={`Batch: ${batch}`}>
            Batch: {batch}
          </span>

          {/* Subspecialty Tag */}
          <span className="text-[9px] text-slate-400 bg-slate-950/40 px-1.5 py-0.5 rounded border border-slate-800/60 font-medium">
            {subspecialty}
          </span>

          {/* High Yield Star Flag */}
          {highYield && (
            <span className="text-[9px] font-black bg-rose-500/10 text-rose-500 px-1.5 py-0.5 rounded border border-rose-500/20 flex items-center gap-0.5 shadow-sm">
              <Star className="w-2.5 h-2.5 fill-rose-500 text-rose-500" />
              High Yield ⭐
            </span>
          )}
        </div>

        {/* Topic Name */}
        <h4 className={`text-xs sm:text-sm font-bold tracking-tight leading-snug ${
          status === StudyStatus.DONE ? "line-through text-slate-500" : "text-white"
        }`}>
          {topicName}
        </h4>

        {/* Lecturer Info */}
        <p className="text-[10px] text-slate-500 mt-1 font-medium">
          Lecturer: <span className="text-slate-300 font-semibold">{lecturer}</span>
        </p>
      </div>

      {/* Right side: Priority Badge & Cycle Status Action */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-3 shrink-0 self-end md:self-auto w-full md:w-auto justify-between md:justify-end">
        {/* Priority Badge */}
        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded border flex items-center gap-1 ${priorityBadgeStyles[priority]}`}>
          {priorityLabel[priority]}
        </span>

        {/* Status Toggle Button */}
        <button
          onClick={handleStatusCycle}
          className={`flex items-center gap-1 text-[10px] uppercase tracking-tighter font-black px-3 py-1.5 rounded transition-all cursor-pointer border ${statusStyles[status].bg}`}
          title="Click to cycle study status"
        >
          {statusStyles[status].icon}
          <span>{statusStyles[status].label}</span>
        </button>
      </div>
    </div>
  );
}
