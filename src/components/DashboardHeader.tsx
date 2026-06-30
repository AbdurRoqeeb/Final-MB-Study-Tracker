import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, Clock, Flame, Sparkles, Sun, Moon } from 'lucide-react';

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
  const examDate = new Date('2026-10-19T00:00:00');
  const targetDate = new Date('2026-10-12T00:00:00');

  // Live ticking clock state
  const [liveTime, setLiveTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate day differences
  const getDaysRemaining = (from: Date, to: Date) => {
    const diffTime = to.getTime() - from.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysToExam = getDaysRemaining(simulatedDate, examDate);
  const daysToTarget = getDaysRemaining(simulatedDate, targetDate);

  // Format date
  const formatDateString = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Predefined date selections for quick jump (evaluated dynamically)
  const quickDates = useMemo(() => [
    { label: "Real Today ⚡", date: new Date() },
    { label: "June 29 (CommMed)", date: new Date('2026-06-29T12:00:00') },
    { label: "Aug 15 (Med Posting)", date: new Date('2026-08-15T12:00:00') },
    { label: "Sept 29 (3 Wks Left)", date: new Date('2026-09-29T12:00:00') },
    { label: "Oct 13 (Final Sprint)", date: new Date('2026-10-13T12:00:00') }
  ], []);

  const minDate = new Date('2026-06-01T00:00:00').getTime();
  const maxDate = new Date('2026-10-25T00:00:00').getTime();

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSimulatedDate(new Date(parseInt(e.target.value, 10)));
  };

  return (
    <header id="app-header" className="bg-slate-900/80 backdrop-blur border border-slate-800 text-white rounded-xl p-5 shadow-xl mb-6 relative overflow-hidden">
      {/* Absolute Ambient Background Effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded font-black text-[10px] tracking-widest uppercase animate-pulse">
              LAUTECH MB4
            </span>
            <span className="bg-slate-800/80 text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700 uppercase tracking-tighter">
              Exam Date: October 19, 2026
            </span>
            <span className="bg-slate-800/80 text-slate-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-slate-700 uppercase tracking-tighter flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              Live: {liveTime.toLocaleTimeString()}
            </span>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer text-[9px] uppercase font-black tracking-wider"
              title="Toggle light or dark theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3 h-3 text-amber-400 animate-[spin_10s_linear_infinite]" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3 h-3 text-blue-400" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase">
            Final MB Study Tracker
          </h1>
          <p className="text-slate-400 mt-1 max-w-xl text-[11px] uppercase tracking-wider font-bold">
            Simulated Prep Mode • Priority Posting Optimizer
          </p>
        </div>

        {/* Countdown Board */}
        <div className="flex gap-4 self-stretch md:self-auto">
          {/* Main Exam Countdown */}
          <div className="flex-1 md:flex-initial bg-slate-950/60 border border-slate-800 rounded-lg p-3 text-center min-w-[110px] backdrop-blur-sm">
            <div className="text-2xl font-black text-amber-500 leading-none">
              {daysToExam > 0 ? daysToExam : daysToExam === 0 ? "TODAY" : "DONE"}
            </div>
            <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1.5">
              Days Left
            </div>
          </div>

          {/* Target finish countdown */}
          <div className="flex-1 md:flex-initial bg-slate-950/60 border border-slate-800 rounded-lg p-3 text-center min-w-[110px] backdrop-blur-sm">
            <div className="text-2xl font-black text-emerald-400 leading-none">
              {daysToTarget > 0 ? daysToTarget : daysToTarget === 0 ? "TODAY" : "PASSED"}
            </div>
            <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1.5">
              Target Days
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Date Timeline Controller */}
      <div className="mt-5 pt-4 border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Calendar className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Simulated Date Anchor:
            </span>
            <div className="relative inline-block">
              <span className="text-xs font-black text-amber-500 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded border border-amber-500/30 flex items-center gap-1.5 cursor-pointer transition-all">
                {formatDateString(simulatedDate)}
                <span className="text-[9px] opacity-75 font-bold uppercase tracking-tight text-amber-400/80">
                  (Change 📅)
                </span>
              </span>
              <input
                type="date"
                min="2026-06-01"
                max="2026-10-25"
                value={simulatedDate.toISOString().split('T')[0]}
                onChange={(e) => {
                  if (e.target.value) {
                    setSimulatedDate(new Date(e.target.value + 'T12:00:00'));
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                title="Select any custom simulated date from calendar"
              />
            </div>
          </div>

          {/* Quick Jumps */}
          <div className="flex flex-wrap gap-1.5">
            {quickDates.map((q, idx) => {
              const isActive = Math.abs(simulatedDate.getTime() - q.date.getTime()) < 1000 * 60 * 60 * 24;
              return (
                <button
                  key={idx}
                  onClick={() => setSimulatedDate(q.date)}
                  className={`text-[9px] uppercase tracking-tighter font-black px-2.5 py-1 rounded transition-colors cursor-pointer border ${
                    isActive
                      ? "bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
                      : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {q.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[9px] font-bold text-slate-600 uppercase">June 1</span>
          <input
            type="range"
            min={minDate}
            max={maxDate}
            value={simulatedDate.getTime()}
            onChange={handleSliderChange}
            className="w-full h-1 bg-slate-800 roundedappearance-none cursor-pointer accent-amber-500"
          />
          <span className="text-[9px] font-bold text-slate-600 uppercase">Oct 25</span>
        </div>
        <p className="text-[9px] uppercase tracking-tighter text-slate-500 font-bold mt-2">
          *Drag timeline or click the date button to dynamically select any calendar date!
        </p>
      </div>
    </header>
  );
}
