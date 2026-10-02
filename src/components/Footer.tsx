import React from 'react';
import { ExternalLink, GraduationCap, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: 'revision' | 'syllabus') => void;
  activeTab: 'revision' | 'syllabus';
}

export default function Footer({ onNavigateTab, activeTab }: FooterProps) {
  return (
    <footer className="mt-12 pt-6 pb-10 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                  Final MB Clinical Revision
                </h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  LAUTECH MB4 Candidate Study &amp; Exam Countdown Companion
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              A high-yield, structured 25-day timetable designed specifically for final-year medical students. Synchronized with the most frequently tested clinical topics and authentic past examination questions from the LAUTECH MB4 archives.
            </p>

            <div className="flex items-center gap-2 pt-0.5 text-xs text-indigo-700 dark:text-indigo-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Target Exam Date: Monday, October 26, 2026</span>
            </div>
          </div>

          {/* Col 2: Navigation & Quick Views */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Quick Views
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigateTab('revision')}
                  className={`hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer text-left ${
                    activeTab === 'revision'
                      ? 'text-indigo-700 dark:text-indigo-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  25-Day Revision Timetable (Oct 1–25)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('syllabus')}
                  className={`hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer text-left ${
                    activeTab === 'syllabus'
                      ? 'text-indigo-700 dark:text-indigo-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Filterable Syllabus Directory
                </button>
              </li>
              <li>
                <a
                  href="https://finalmbpq.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>finalmbpq.vercel.app</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>100% Client-Side &amp; Offline-Ready · All study progress persists in your browser</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Built with care for LAUTECH MB4 candidates.</span>
            <span className="text-slate-400 dark:text-slate-600">Best of luck on your exams!</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
