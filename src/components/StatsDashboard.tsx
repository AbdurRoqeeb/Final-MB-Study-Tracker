import React from 'react';
import { SubjectType, Topic, StudyStatus } from '../types';

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
    <div id="stats-dashboard" className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      {/* Overall Progress Panel */}
      <div className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Syllabus Completion
            </span>
            <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-700 px-2 py-0.5 rounded-md">
              {overallPercent}%
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {completed}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              / {total} lectures completed
            </span>
          </div>

          {/* Minimalist Progress Bar */}
          <div className="w-full bg-slate-100 dark:bg-[#151c2d] h-2 rounded-full overflow-hidden mb-4 flex border border-slate-200/80 dark:border-slate-700">
            <div
              className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-300"
              style={{ width: `${overallPercent}%` }}
            ></div>
            <div
              className="bg-indigo-300 dark:bg-indigo-800 h-full transition-all duration-300"
              style={{ width: `${inProgressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Quiet Breakdown */}
        <div className="grid grid-cols-3 gap-2 border-t border-slate-100 dark:border-slate-800 pt-3 text-xs">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Completed</span>
            <span className="font-bold text-slate-900 dark:text-white">{completed}</span>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Studying</span>
            <span className="font-bold text-indigo-700 dark:text-indigo-400">{inProgress}</span>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Unread</span>
            <span className="font-bold text-slate-500 dark:text-slate-400">{notStarted}</span>
          </div>
        </div>
      </div>

      {/* Subject Progress Breakdowns */}
      <div className="lg:col-span-2 bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3.5">
          Posting Curricula Breakdown
        </div>

        <div className="space-y-3.5">
          {/* Medicine Progress */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-900 dark:text-slate-100 font-semibold">Internal Medicine (M1 + M2 + M3)</span>
              <span className="text-indigo-700 dark:text-indigo-300 font-mono font-bold text-xs">
                {medMetrics.completed}/{medMetrics.total} · {medMetrics.percent}%
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-[#151c2d] h-2 rounded-full overflow-hidden border border-slate-200/80 dark:border-slate-700">
              <div
                className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-300"
                style={{ width: `${medMetrics.percent}%` }}
              ></div>
            </div>
          </div>

          {/* Surgery Progress */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-900 dark:text-slate-100 font-semibold">Surgery (S1 + S2 + S3)</span>
              <span className="text-slate-700 dark:text-slate-300 font-mono font-bold text-xs">
                {surgMetrics.completed}/{surgMetrics.total} · {surgMetrics.percent}%
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-[#151c2d] h-2 rounded-full overflow-hidden border border-slate-200/80 dark:border-slate-700">
              <div
                className="bg-slate-600 dark:bg-slate-400 h-full transition-all duration-300"
                style={{ width: `${surgMetrics.percent}%` }}
              ></div>
            </div>
          </div>

          {/* Community Medicine Progress */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-900 dark:text-slate-100 font-semibold">Community Medicine (CM1 + CM2)</span>
              <span className="text-sky-800 dark:text-sky-300 font-mono font-bold text-xs">
                {commMetrics.completed}/{commMetrics.total} · {commMetrics.percent}%
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-[#151c2d] h-2 rounded-full overflow-hidden border border-slate-200/80 dark:border-slate-700">
              <div
                className="bg-sky-600 dark:bg-sky-500 h-full transition-all duration-300"
                style={{ width: `${commMetrics.percent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
