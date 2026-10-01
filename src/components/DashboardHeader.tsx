import React, { useMemo } from 'react';
import { Sun, Moon, GraduationCap } from 'lucide-react';

interface DashboardHeaderProps {
  simulatedDate: Date;
  setSimulatedDate: (d: Date) => void;
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
}

export default function DashboardHeader({
  simulatedDate,
  setSimulatedDate,
  theme,
  setTheme
}: DashboardHeaderProps) {
  const examDate = new Date('2026-10-26T00:00:00');

  // Calculate day difference
  const daysToExam = useMemo(() => {
    const diffTime = examDate.getTime() - simulatedDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }, [simulatedDate]);

  const quickDates = useMemo(() => [
    { label: "Today (Oct 1)", date: new Date('2026-10-01T12:00:00') },
    { label: "Oct 8 (Phase 2)", date: new Date('2026-10-08T12:00:00') },
    { label: "Oct 15 (Phase 3)", date: new Date('2026-10-15T12:00:00') },
    { label: "Oct 22 (Phase 4)", date: new Date('2026-10-22T12:00:00') },
    { label: "Oct 26 (Exam)", date: new Date('2026-10-26T09:00:00') },
  ], []);

  return (
    <header className="bg-white dark:bg-[#0d121f] border border-slate-200/80 dark:border-slate-800 rounded-2xl px-6 py-5 mb-6 shadow-xs transition-colors">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        {/* Brand & Context */}
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  Final MB Clinical Revision
                </h1>
                <span className="text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/80 dark:border-indigo-700/60 px-2 py-0.5 rounded-md">
                  LAUTECH MB4
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 mt-2 flex-wrap">
            <span className="font-medium text-slate-700 dark:text-slate-200">25-Day Revision: Oct 1 – 25, 2026</span>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <span>Exam Date: Monday, Oct 26, 2026</span>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-indigo-700 dark:text-indigo-300 font-semibold bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 px-2 py-0.5 rounded">
              {daysToExam > 0 ? `${daysToExam} days remaining` : daysToExam === 0 ? "Exam Day Today" : "Exam Complete"}
            </span>
          </div>
        </div>

        {/* Date Selector & Controls */}
        <div className="flex items-center gap-3 flex-wrap lg:flex-nowrap self-start lg:self-auto">
          {/* Quick Date Segmented Bar */}
          <div className="flex items-center gap-1 bg-slate-100/80 dark:bg-[#131929] p-1 rounded-xl border border-slate-200/80 dark:border-slate-800">
            {quickDates.map((item, idx) => {
              const isSelected = simulatedDate.toDateString() === item.date.toDateString();
              return (
                <button
                  key={idx}
                  onClick={() => setSimulatedDate(item.date)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-indigo-600 text-indigo-900 dark:text-white font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Date Picker Input */}
          <div>
            <input
              type="date"
              min="2026-06-01"
              max="2026-10-31"
              value={simulatedDate.toISOString().split('T')[0]}
              onChange={(e) => {
                if (e.target.value) {
                  setSimulatedDate(new Date(`${e.target.value}T12:00:00`));
                }
              }}
              className="bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-100 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-indigo-500 cursor-pointer shadow-xs"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#131929] text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-[#1a2237] transition-colors cursor-pointer shadow-xs"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
        </div>
      </div>
    </header>
  );
}
