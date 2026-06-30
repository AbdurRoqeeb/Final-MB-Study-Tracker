import React from 'react';
import { SubjectType, Topic, StudyStatus } from '../types';
import { Award, CheckCircle2, Circle, Clock, TrendingUp } from 'lucide-react';

interface StatsDashboardProps {
  topics: Topic[];
}

export default function StatsDashboard({ topics }: StatsDashboardProps) {
  // Compute overall stats
  const total = topics.length;
  const completed = topics.filter(t => t.status === StudyStatus.DONE).length;
  const inProgress = topics.filter(t => t.status === StudyStatus.IN_PROGRESS).length;
  const notStarted = topics.filter(t => t.status === StudyStatus.NOT_STARTED).length;
  const overallPercent = total > 0 ? Math.round((completed / total) * 100) : 0;
  const inProgressPercent = total > 0 ? Math.round((inProgress / total) * 100) : 0;

  // Compute subject metrics
  const getSubjectMetrics = (subType: SubjectType) => {
    const list = topics.filter(t => t.subject === subType);
    const subTotal = list.length;
    const subCompleted = list.filter(t => t.status === StudyStatus.DONE).length;
    const subInProgress = list.filter(t => t.status === StudyStatus.IN_PROGRESS).length;
    const percent = subTotal > 0 ? Math.round((subCompleted / subTotal) * 100) : 0;

    return { total: subTotal, completed: subCompleted, inProgress: subInProgress, percent };
  };

  const medMetrics = getSubjectMetrics(SubjectType.MEDICINE);
  const surgMetrics = getSubjectMetrics(SubjectType.SURGERY);
  const commMetrics = getSubjectMetrics(SubjectType.COMMUNITY_MEDICINE);

  return (
    <div id="stats-dashboard" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      {/* Overall Progress Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-500" />
              Syllabus Completion
            </h2>
            <span className="text-[9px] uppercase font-bold bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">
              Overall
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl font-black text-white tracking-tight">
              {overallPercent}%
            </span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">
              ({completed} / {total} topics)
            </span>
          </div>

          {/* Combined Progress Bar */}
          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mb-5 flex border border-slate-800">
            <div
              className="bg-emerald-500 h-full transition-all duration-500"
              style={{ width: `${overallPercent}%` }}
              title={`Completed: ${overallPercent}%`}
            ></div>
            <div
              className="bg-amber-400 h-full transition-all duration-500"
              style={{ width: `${inProgressPercent}%` }}
              title={`In Progress: ${inProgressPercent}%`}
            ></div>
          </div>
        </div>

        {/* Legend / Stats breakdown */}
        <div className="grid grid-cols-3 gap-2 text-center border-t border-slate-800 pt-4">
          <div>
            <div className="flex items-center justify-center gap-1.5 text-[9px] text-slate-500 font-bold uppercase tracking-tight mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              Done
            </div>
            <div className="text-sm font-black text-white">{completed}</div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1.5 text-[9px] text-slate-500 font-bold uppercase tracking-tight mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
              Studying
            </div>
            <div className="text-sm font-black text-white">{inProgress}</div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1.5 text-[9px] text-slate-500 font-bold uppercase tracking-tight mb-1">
              <span className="w-2 h-2 rounded-full bg-slate-700 inline-block"></span>
              Unread
            </div>
            <div className="text-sm font-black text-white">{notStarted}</div>
          </div>
        </div>
      </div>

      {/* Subject Progress Breakdowns */}
      <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
        <h2 className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-5 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-500" />
          Posting Progress Breakdowns
        </h2>

        <div className="space-y-4">
          {/* Medicine Progress */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-blue-500 inline-block"></span>
                <span className="text-blue-400 uppercase tracking-tight text-[11px]">Medicine (M1 + M2 + M3)</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">
                {medMetrics.completed}/{medMetrics.total} Done • {medMetrics.percent}%
              </span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-blue-500 h-full transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                style={{ width: `${medMetrics.percent}%` }}
              ></div>
            </div>
          </div>

          {/* Surgery Progress */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-emerald-500 inline-block"></span>
                <span className="text-emerald-400 uppercase tracking-tight text-[11px]">Surgery (S1 + S2 + S3)</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">
                {surgMetrics.completed}/{surgMetrics.total} Done • {surgMetrics.percent}%
              </span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-emerald-500 h-full transition-all duration-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                style={{ width: `${surgMetrics.percent}%` }}
              ></div>
            </div>
          </div>

          {/* Community Medicine Progress */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-amber-500 inline-block"></span>
                <span className="text-amber-500 uppercase tracking-tight text-[11px]">Community Medicine (CM1 + CM2)</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">
                {commMetrics.completed}/{commMetrics.total} Done • {commMetrics.percent}%
              </span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-amber-500 h-full transition-all duration-500 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
                style={{ width: `${commMetrics.percent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
