import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  RefreshCw,
  Lightbulb,
  Bookmark,
  BookmarkCheck,
  X,
  BrainCircuit,
  Award,
  Trash2,
  Copy,
  Check,
  Search
} from 'lucide-react';
import { getRandomCuratedTip, StudyTip } from '../data/curatedStudyTips';

export interface BookmarkedTip extends StudyTip {
  id: string;
  savedAt: string;
}

interface StudyTipModalProps {
  isOpen: boolean;
  onClose: () => void;
  dayTheme?: string;
  dayNumber?: number;
  initialTab?: 'daily' | 'bookmarks';
  onBookmarksChange?: (count: number) => void;
}

const BOOKMARKS_STORAGE_KEY = 'MBBS_BOOKMARKED_STUDY_TIPS';

export default function StudyTipModal({
  isOpen,
  onClose,
  dayTheme,
  dayNumber,
  initialTab = 'daily',
  onBookmarksChange
}: StudyTipModalProps) {
  const [activeModalTab, setActiveModalTab] = useState<'daily' | 'bookmarks'>(initialTab);
  const [tip, setTip] = useState<StudyTip | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFocus, setSelectedFocus] = useState<string>('General High-Yield Exam Strategy');
  const [tipSource, setTipSource] = useState<string>('Gemini AI');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [bookmarkSearch, setBookmarkSearch] = useState<string>('');

  // Persistent bookmarks state
  const [bookmarks, setBookmarks] = useState<BookmarkedTip[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync bookmark count with parent
  useEffect(() => {
    onBookmarksChange?.(bookmarks.length);
  }, [bookmarks, onBookmarksChange]);

  // Sync initial tab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveModalTab(initialTab);
    }
  }, [isOpen, initialTab]);

  const focusOptions = [
    { label: 'General Strategy', value: 'General High-Yield Exam Strategy' },
    { label: 'OSCE and viva', value: 'OSCE and viva' },
    { label: 'Surgery & Emergencies', value: 'Surgery & Emergencies' },
    { label: 'Pharmacology & Dosing', value: 'Pharmacology & Dosing' },
    { label: 'Time & Exam Pacing', value: 'Time & Exam Pacing' },
  ];

  // Check if active daily tip is already bookmarked
  const isCurrentTipBookmarked = tip
    ? bookmarks.some(b => b.title.trim().toLowerCase() === tip.title.trim().toLowerCase())
    : false;

  const toggleBookmarkCurrentTip = () => {
    if (!tip) return;

    setBookmarks(prev => {
      const existsIndex = prev.findIndex(b => b.title.trim().toLowerCase() === tip.title.trim().toLowerCase());
      let updated: BookmarkedTip[];

      if (existsIndex >= 0) {
        // Remove from bookmarks
        updated = prev.filter((_, idx) => idx !== existsIndex);
      } else {
        // Add to bookmarks
        const newBookmark: BookmarkedTip = {
          ...tip,
          id: `tip_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
          savedAt: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })
        };
        updated = [newBookmark, ...prev];
      }

      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const removeBookmarkById = (id: string) => {
    setBookmarks(prev => {
      const updated = prev.filter(b => b.id !== id);
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const handleCopyTip = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
        if (data.tip.title === currentExclude) {
          const fresh = getRandomCuratedTip(targetFocus, currentExclude);
          setTip(fresh);
          setTipSource('High-Yield Bank');
        } else {
          setTip(data.tip);
          setTipSource(data.source?.includes('gemini') ? 'Gemini AI' : 'High-Yield Bank');
        }
        setLoading(false);
        return;
      }
    } catch (err) {
      console.warn('Server study tip fetch unavailable, using dynamic clinical bank:', err);
    }

    // Guaranteed fresh fallback
    const fallback = getRandomCuratedTip(targetFocus, currentExclude);
    setTip(fallback);
    setTipSource('High-Yield Bank');
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

  // Filter bookmarked tips based on search
  const filteredBookmarks = bookmarks.filter(b => {
    if (!bookmarkSearch.trim()) return true;
    const q = bookmarkSearch.toLowerCase().trim();
    return (
      b.title.toLowerCase().includes(q) ||
      b.content.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      (b.mnemonic && b.mnemonic.toLowerCase().includes(q))
    );
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl bg-white dark:bg-[#0d121f] border border-indigo-200/90 dark:border-indigo-500/30 rounded-2xl shadow-xl overflow-hidden transition-all flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-indigo-50/60 via-white to-sky-50/50 dark:from-[#111728] dark:via-[#0d121f] dark:to-[#0c1626]">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Clinical Study Pearls
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  High-yield strategy, mnemonics &amp; examiner scripts for Final MB
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              title="Close modal (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Segmented Tab Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-[#131929] p-1 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <button
              onClick={() => setActiveModalTab('daily')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeModalTab === 'daily'
                  ? 'bg-white dark:bg-indigo-600 text-indigo-950 dark:text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Daily Tip Generator</span>
            </button>

            <button
              onClick={() => setActiveModalTab('bookmarks')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeModalTab === 'bookmarks'
                  ? 'bg-white dark:bg-indigo-600 text-indigo-950 dark:text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Bookmarked Pearls</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                bookmarks.length > 0
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
              }`}>
                {bookmarks.length}
              </span>
            </button>
          </div>
        </div>

        {/* Tab 1: Daily Tip View */}
        {activeModalTab === 'daily' && (
          <div className="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
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

              <div className="self-end flex items-center gap-2">
                <button
                  onClick={toggleBookmarkCurrentTip}
                  className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
                    isCurrentTipBookmarked
                      ? 'bg-amber-50 dark:bg-amber-950/80 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#131929] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title={isCurrentTipBookmarked ? "Tip is saved in Bookmarks tab" : "Bookmark this tip"}
                >
                  {isCurrentTipBookmarked ? (
                    <>
                      <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="hidden sm:inline">Saved</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-4 h-4" />
                      <span className="hidden sm:inline">Bookmark</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleNextTip}
                  disabled={loading}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-indigo-50/80 dark:bg-[#131929] hover:bg-indigo-100 dark:hover:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-50 shadow-2xs"
                  title="Generate or rotate to a fresh clinical tip"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-indigo-600' : ''}`} />
                  <span>Next Tip</span>
                </button>
              </div>
            </div>

            {loading ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-2 text-center">
                <BrainCircuit className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Formulating high-yield clinical tip...
                </p>
              </div>
            ) : tip ? (
              <div className="space-y-3.5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded font-mono uppercase tracking-wider">
                    {tip.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    Source: {tipSource}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {tip.title}
                </h4>

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
        )}

        {/* Tab 2: Bookmarked Tips View */}
        {activeModalTab === 'bookmarks' && (
          <div className="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
            {/* Search within bookmarks */}
            {bookmarks.length > 0 && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search bookmarked tips or mnemonics..."
                  value={bookmarkSearch}
                  onChange={(e) => setBookmarkSearch(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#131929] border border-slate-200 dark:border-slate-700 text-xs rounded-xl pl-8 pr-3 py-2 text-slate-800 dark:text-white outline-none focus:border-indigo-500"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              </div>
            )}

            {bookmarks.length === 0 ? (
              <div className="py-12 px-4 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
                  <Bookmark className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    No Bookmarked Pearls Yet
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
                    While viewing tips in the Daily Tip Generator, click the <span className="font-semibold text-amber-600 dark:text-amber-400">Bookmark (🔖)</span> icon to save your favorite clinical pearls and mnemonics here for quick pre-exam review.
                  </p>
                </div>
                <button
                  onClick={() => setActiveModalTab('daily')}
                  className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Browse Daily Tips</span>
                </button>
              </div>
            ) : filteredBookmarks.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-500">
                No bookmarked tips match "{bookmarkSearch}".
              </div>
            ) : (
              <div className="space-y-3">
                {filteredBookmarks.map((b) => {
                  const isCopied = copiedId === b.id;
                  const fullTipText = `${b.title}\nCategory: ${b.category}\n\n${b.content}\n\nTakeaway: ${b.clinicalTakeaway}${b.mnemonic ? `\nMnemonic: ${b.mnemonic}` : ''}`;

                  return (
                    <div
                      key={b.id}
                      className="p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-[#090d18] hover:border-indigo-300 dark:hover:border-indigo-700 transition-all space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded font-mono uppercase tracking-wider">
                            {b.category}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            Saved {b.savedAt}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleCopyTip(fullTipText, b.id)}
                            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                            title="Copy tip text"
                          >
                            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => removeBookmarkById(b.id)}
                            className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                            title="Remove bookmark"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        {b.title}
                      </h5>

                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {b.content}
                      </p>

                      {b.clinicalTakeaway && (
                        <div className="bg-white dark:bg-[#0c121e] border-l-2 border-indigo-500 p-2 rounded-r-lg text-[11px] text-slate-600 dark:text-slate-300">
                          <span className="font-semibold text-indigo-700 dark:text-indigo-400">Takeaway: </span>
                          {b.clinicalTakeaway}
                        </div>
                      )}

                      {b.mnemonic && (
                        <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 p-2 rounded-lg text-[11px] text-amber-900 dark:text-amber-200 font-mono">
                          <span className="font-bold">Mnemonic: </span>
                          {b.mnemonic}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-[#101626] border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
            {activeModalTab === 'daily'
              ? 'Rotates automatically on every refresh'
              : `${bookmarks.length} saved pearls stored offline`}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-semibold rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
