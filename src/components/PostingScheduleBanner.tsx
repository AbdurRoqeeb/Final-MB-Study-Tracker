import React from 'react';
import { postingScheduleTimeline } from '../data/syllabus';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

interface PostingScheduleBannerProps {
  simulatedDate: Date;
}

export default function PostingScheduleBanner({ simulatedDate }: PostingScheduleBannerProps) {
  const currentMs = simulatedDate.getTime();

  // Find active posting based on dates
  // Posting 1: June 29 - August 2, 2026
  // Posting 2: August 3 - September 6, 2026
  // Posting 3: September 7 - October 11, 2026
  const getActivePostingId = () => {
    const d1 = new Date('2026-06-29T00:00:00').getTime();
    const d2 = new Date('2026-08-03T00:00:00').getTime();
    const d3 = new Date('2026-09-07T00:00:00').getTime();
    const d4 = new Date('2026-10-12T00:00:00').getTime();

    if (currentMs >= d1 && currentMs < d2) return 1;
    if (currentMs >= d2 && currentMs < d3) return 2;
    if (currentMs >= d3 && currentMs < d4) return 3;
    return 0; // Out of posting dates
  };

  const activePostingId = getActivePostingId();

  return (
    <div id="posting-schedule-banner" className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-850">
        <Calendar className="w-4 h-4 text-amber-500" />
        <h3 className="text-[10px] uppercase font-black text-slate-300 tracking-widest">MB4 Clinical Posting Timeline</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {postingScheduleTimeline.map((p) => {
          const isActive = p.id === activePostingId;
          const isCompleted = p.id < activePostingId || (activePostingId === 0 && currentMs >= new Date('2026-10-12T00:00:00').getTime());

          return (
            <div
              key={p.id}
              className={`p-4 rounded-lg border transition-all ${
                isActive
                  ? "bg-slate-950 border-amber-500/50 ring-2 ring-amber-500/10 shadow-sm"
                  : isCompleted
                  ? "bg-slate-950/20 border-slate-800/60 opacity-60"
                  : "bg-slate-950/40 border-slate-800/80"
              }`}
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className={`text-[9px] uppercase tracking-wider font-black px-2 py-0.5 rounded ${
                  isActive
                    ? "bg-amber-500 text-slate-950"
                    : isCompleted
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-slate-800 text-slate-500"
                }`}>
                  {isActive ? "ACTIVE POSTING" : isCompleted ? "COMPLETED" : "UPCOMING"}
                </span>

                {isCompleted ? (
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                ) : isActive ? (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                ) : null}
              </div>

              <h4 className="font-bold text-white text-xs">{p.title}</h4>
              <span className="text-[10px] text-slate-500 block font-mono mt-0.5">{p.dateRange}</span>
              <p className="text-[11px] text-slate-400 mt-2 border-t border-slate-800/80 pt-2 leading-relaxed">
                <strong className="text-slate-300 font-bold uppercase tracking-wide text-[9px] block mb-0.5">Recommended focus:</strong> {p.focus}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
