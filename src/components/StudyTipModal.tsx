import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  RefreshCw,
  Lightbulb,
  Bookmark,
  BookmarkCheck,
  X,
  BrainCircuit,
  Award
} from 'lucide-react';
import { getRandomCuratedTip, StudyTip } from '../data/curatedStudyTips';

interface StudyTipModalProps {
  isOpen: boolean;
  onClose: () => void;
  dayTheme?: string;
  dayNumber?: number;
}

export default function StudyTipModal({
  isOpen,
  onClose,
  dayTheme,
  dayNumber
}: StudyTipModalProps) {
  const [tip, setTip] = useState<StudyTip | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [selectedFocus, setSelectedFocus] = useState<string>('General High-Yield Exam Strategy');
  const [tipSource, setTipSource] = useState<string>('Gemini AI');

  const focusOptions = [
    { label: 'General Strategy', value: 'General High-Yield Exam Strategy' },
    { label: 'OSCE and viva', value: 'OSCE and viva' },
    { label: 'Surgery & Emergencies', value: 'Surgery & Emergencies' },
    { label: 'Pharmacology & Dosing', value: 'Pharmacology & Dosing' },
    { label: 'Time & Exam Pacing', value: 'Time & Exam Pacing' },
  ];

  const fetchTip = async (focusCategory?: string, excludeTitle?: string) => {
    const targetFocus = focusCategory || selectedFocus;
    const currentExclude = excludeTitle || tip?.title;
    setLoading(true);

    try {
      const res = await fetch('/api/study-tip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          focusArea: targetFocus,
          dayTheme: dayTheme || 'Clinical Examination Revision',
          simulatedDay: dayNumber || 1,
          excludeTitle: currentExclude,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      if (data && data.tip) {
        // If the tip is identical to what was just shown, rotate to a fresh one
        if (data.tip.title === currentExclude) {
          const fresh = getRandomCuratedTip(targetFocus, currentExclude);
          setTip(fresh);
          setTipSource('High-Yield Bank');
        } else {
          setTip(data.tip);
          setTipSource(data.source?.includes('gemini') ? 'Gemini AI' : 'High-Yield Bank');
        }
        setIsSaved(false);
        setLoading(false);
        return;
      }
    } catch (err) {
      console.warn('Server study tip fetch unavailable, using dynamic clinical bank:', err);
    }

    // Fallback: guaranteed fresh tip from the comprehensive curated clinical repository
    const fallback = getRandomCuratedTip(targetFocus, currentExclude);
    setTip(fallback);
    setTipSource('High-Yield Bank');
    setIsSaved(false);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      fetchTip();
    }
  }, [isOpen, dayNumber]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleFocusChange = (newFocus: string) => {
    setSelectedFocus(newFocus);
    fetchTip(newFocus, tip?.title);
  };

  const handleNextTip = () => {
    fetchTip(selectedFocus, tip?.title);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl bg-white dark:bg-[#0d121f] border border-indigo-200/90 dark:border-indigo-500/30 rounded-2xl shadow-xl overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-indigo-50/60 via-white to-sky-50/50 dark:from-[#111728] dark:via-[#0d121f] dark:to-[#0c1626]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Study Tip of the Day
                </h3>
                <span className="text-[10px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-100/70 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 px-1.5 py-0.2 rounded font-mono">
                  {tipSource}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                High-yield revision strategy for final MB candidates
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              title={isSaved ? "Saved" : "Save tip"}
            >
              {isSaved ? (
                <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Controls row */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Clinical Focus Area
              </label>
              <select
                value={selectedFocus}
                onChange={(e) => handleFocusChange(e.target.value)}
                disabled={loading}
                className="w-full bg-slate-50 dark:bg-[#131929] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs rounded-xl px-3 py-1.5 outline-none focus:border-indigo-500 cursor-pointer"
              >
                {focusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="self-end">
              <button
                onClick={handleNextTip}
                disabled={loading}
                className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-indigo-50/80 dark:bg-[#131929] hover:bg-indigo-100 dark:hover:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-50 shadow-2xs"
                title="Generate or rotate to a fresh clinical tip"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-indigo-600' : ''}`} />
                <span>Next Tip</span>
              </button>
            </div>
          </div>

          {loading ? (
            <div className="py-8 flex flex-col items-center justify-center space-y-2 text-center">
              <BrainCircuit className="w-7 h-7 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Formulating high-yield clinical tip...
              </p>
            </div>
          ) : tip ? (
            <div className="space-y-3.5 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded font-mono uppercase tracking-wider">
                  {tip.category}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                  {tip.title}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                {tip.content}
              </p>

              {tip.clinicalTakeaway && (
                <div className="bg-slate-50/80 dark:bg-[#070b14] border-l-4 border-indigo-600 dark:border-indigo-400 rounded-r-xl p-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-900 dark:text-indigo-300 mb-0.5">
                    <Lightbulb className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>Clinical Script &amp; Examiner Takeaway</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {tip.clinicalTakeaway}
                  </p>
                </div>
              )}

              {tip.mnemonic && (
                <div className="flex items-start gap-2 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 rounded-xl p-2.5 text-xs text-amber-900 dark:text-amber-200">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[11px] uppercase tracking-wider block">
                      Rapid Recall Mnemonic:
                    </span>
                    <span className="font-mono text-[11px] leading-relaxed">
                      {tip.mnemonic}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-[#101626] border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
            Rotates automatically on every refresh
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
