import React, { useMemo } from 'react';
import { SubjectType, StudyPriority, StudyStatus } from '../types';
import { Search, SlidersHorizontal, Star, X, Filter, Layers } from 'lucide-react';

interface FiltersSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedSubject: string;
  setSelectedSubject: (s: string) => void;
  selectedSubspecialty: string;
  setSelectedSubspecialty: (s: string) => void;
  selectedStatus: string;
  setSelectedStatus: (s: string) => void;
  selectedPriority: string;
  setSelectedPriority: (s: string) => void;
  selectedBatch: string;
  setSelectedBatch: (b: string) => void;
  showHighYieldOnly: boolean;
  setShowHighYieldOnly: (b: boolean) => void;
  selectedRevisionPlan: 'ALL' | 'MCQ_ONLY' | 'CURRICULUM_CORE';
  setSelectedRevisionPlan: (r: 'ALL' | 'MCQ_ONLY' | 'CURRICULUM_CORE') => void;
  sortBy: string;
  setSortBy: (s: any) => void;
  availableSubspecialties: string[];
}

export default function FiltersSection({
  searchQuery,
  setSearchQuery,
  selectedSubject,
  setSelectedSubject,
  selectedSubspecialty,
  setSelectedSubspecialty,
  selectedStatus,
  setSelectedStatus,
  selectedPriority,
  setSelectedPriority,
  selectedBatch,
  setSelectedBatch,
  showHighYieldOnly,
  setShowHighYieldOnly,
  selectedRevisionPlan,
  setSelectedRevisionPlan,
  sortBy,
  setSortBy,
  availableSubspecialties
}: FiltersSectionProps) {

  const isAll = (v: string) => !v || v.toUpperCase() === 'ALL';

  // Batches list based on subject
  const batches = useMemo(() => {
    if (selectedSubject === SubjectType.MEDICINE) return ["M1", "M2", "M3"];
    if (selectedSubject === SubjectType.SURGERY) return ["S1", "S2", "S3"];
    if (selectedSubject === SubjectType.COMMUNITY_MEDICINE) return ["CM1", "CM2"];
    return ["M1", "M2", "M3", "S1", "S2", "S3", "CM1", "CM2"];
  }, [selectedSubject]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSubject("ALL");
    setSelectedSubspecialty("ALL");
    setSelectedStatus("ALL");
    setSelectedPriority("ALL");
    setSelectedBatch("ALL");
    setSelectedRevisionPlan("ALL");
    setShowHighYieldOnly(false);
  };

  const hasActiveFilters = searchQuery.trim() !== "" ||
    !isAll(selectedSubject) ||
    !isAll(selectedSubspecialty) ||
    !isAll(selectedStatus) ||
    !isAll(selectedPriority) ||
    !isAll(selectedBatch) ||
    selectedRevisionPlan !== "ALL" ||
    showHighYieldOnly;

  return (
    <div id="filters-container" className="bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs mb-6 transition-colors">
      {/* Header and Reset Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Filter &amp; Search Clinical Syllabus
          </h3>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 flex items-center gap-1.5 bg-rose-50 dark:bg-rose-950/60 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-800 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>

      {/* Grid of Select Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Keyword Search */}
        <div className="relative">
          <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
            Search Lectures
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="e.g. Stroke, Papulosquamous, Sepsis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 focus:border-indigo-500 text-xs rounded-xl pl-9 pr-8 py-2 text-slate-800 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-2xs"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter by Revision Track */}
        <div>
          <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
            Revision Track
          </label>
          <select
            value={selectedRevisionPlan}
            onChange={(e) => setSelectedRevisionPlan(e.target.value as any)}
            className="w-full bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 focus:border-indigo-500 text-xs rounded-xl px-3 py-2 text-slate-800 dark:text-white outline-none cursor-pointer shadow-2xs"
          >
            <option value="ALL">All Syllabus Topics</option>
            <option value="MCQ_ONLY">⚡ MCQ Satellite Drill Topics (Day 1-25)</option>
            <option value="CURRICULUM_CORE">Curriculum Core Lectures</option>
          </select>
        </div>

        {/* Filter by Subject */}
        <div>
          <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
            Posting Group
          </label>
          <select
            value={isAll(selectedSubject) ? 'ALL' : selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedBatch("ALL");
              setSelectedSubspecialty("ALL");
            }}
            className="w-full bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 focus:border-indigo-500 text-xs rounded-xl px-3 py-2 text-slate-800 dark:text-white outline-none cursor-pointer shadow-2xs"
          >
            <option value="ALL">All Posting Groups</option>
            <option value={SubjectType.MEDICINE}>{SubjectType.MEDICINE}</option>
            <option value={SubjectType.SURGERY}>{SubjectType.SURGERY}</option>
            <option value={SubjectType.COMMUNITY_MEDICINE}>{SubjectType.COMMUNITY_MEDICINE}</option>
          </select>
        </div>

        {/* Filter by Subspecialty */}
        <div>
          <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
            Subspecialty
          </label>
          <select
            value={isAll(selectedSubspecialty) ? 'ALL' : selectedSubspecialty}
            onChange={(e) => setSelectedSubspecialty(e.target.value)}
            className="w-full bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 focus:border-indigo-500 text-xs rounded-xl px-3 py-2 text-slate-800 dark:text-white outline-none cursor-pointer shadow-2xs"
          >
            <option value="ALL">All Subspecialties</option>
            {availableSubspecialties.map(sub => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        {/* Filter by Batch */}
        <div>
          <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
            Curriculum Batch
          </label>
          <select
            value={isAll(selectedBatch) ? 'ALL' : selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="w-full bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 focus:border-indigo-500 text-xs rounded-xl px-3 py-2 text-slate-800 dark:text-white outline-none cursor-pointer shadow-2xs"
          >
            <option value="ALL">All Batches</option>
            {batches.map(b => (
              <option key={b} value={b}>Batch {b}</option>
            ))}
          </select>
        </div>

        {/* Filter by Study Status */}
        <div>
          <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
            Study Status
          </label>
          <select
            value={isAll(selectedStatus) ? 'ALL' : selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 focus:border-indigo-500 text-xs rounded-xl px-3 py-2 text-slate-800 dark:text-white outline-none cursor-pointer shadow-2xs"
          >
            <option value="ALL">All Statuses</option>
            <option value={StudyStatus.NOT_STARTED}>Unread / Not Started</option>
            <option value={StudyStatus.IN_PROGRESS}>Studying / In Progress</option>
            <option value={StudyStatus.DONE}>Done / Completed</option>
          </select>
        </div>

        {/* Filter by Priority */}
        <div>
          <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
            Priority Tier
          </label>
          <select
            value={isAll(selectedPriority) ? 'ALL' : selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="w-full bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 focus:border-indigo-500 text-xs rounded-xl px-3 py-2 text-slate-800 dark:text-white outline-none cursor-pointer shadow-2xs"
          >
            <option value="ALL">All Priorities</option>
            <option value={StudyPriority.HIGH}>HIGH (Priority #1)</option>
            <option value={StudyPriority.ADVANCE_PREP}>ADVANCE PREP</option>
            <option value={StudyPriority.UPCOMING}>UPCOMING</option>
          </select>
        </div>

        {/* Sort Configuration */}
        <div>
          <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
            Sort Order
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-white dark:bg-[#131929] border border-slate-200 dark:border-slate-700 focus:border-indigo-500 text-xs rounded-xl px-3 py-2 text-slate-800 dark:text-white outline-none cursor-pointer font-medium shadow-2xs"
          >
            <option value="PRIORITY">Priority First</option>
            <option value="ALPHABETICAL">Alphabetical (A - Z)</option>
            <option value="BATCH">Batch Order</option>
          </select>
        </div>
      </div>

      {/* High Yield Toggle Row */}
      <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={showHighYieldOnly}
            onChange={(e) => setShowHighYieldOnly(e.target.checked)}
            className="w-4 h-4 rounded text-indigo-600 bg-white dark:bg-[#131929] border-slate-300 dark:border-slate-700 focus:ring-indigo-500 accent-indigo-600 cursor-pointer"
          />
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-500/20 text-amber-500" />
            <span>High Yield Starred Only</span>
          </span>
        </label>
      </div>

      {/* Active Filter Badges */}
      {hasActiveFilters && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 flex-wrap text-xs">
          <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            Active:
          </span>

          {selectedRevisionPlan !== 'ALL' && (
            <span className="inline-flex items-center gap-1 bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-2.5 py-0.5 rounded-lg text-xs font-medium">
              <span>Track: {selectedRevisionPlan === 'MCQ_ONLY' ? 'MCQ Satellite Drill' : 'Core Lectures'}</span>
              <button onClick={() => setSelectedRevisionPlan('ALL')} className="hover:text-indigo-900 cursor-pointer">×</button>
            </span>
          )}

          {!isAll(selectedSubject) && (
            <span className="inline-flex items-center gap-1 bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-2.5 py-0.5 rounded-lg text-xs font-medium">
              <span>Posting: {selectedSubject}</span>
              <button onClick={() => setSelectedSubject('ALL')} className="hover:text-indigo-900 cursor-pointer">×</button>
            </span>
          )}

          {!isAll(selectedSubspecialty) && (
            <span className="inline-flex items-center gap-1 bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-2.5 py-0.5 rounded-lg text-xs font-medium">
              <span>Subspecialty: {selectedSubspecialty}</span>
              <button onClick={() => setSelectedSubspecialty('ALL')} className="hover:text-indigo-900 cursor-pointer">×</button>
            </span>
          )}

          {!isAll(selectedBatch) && (
            <span className="inline-flex items-center gap-1 bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-2.5 py-0.5 rounded-lg text-xs font-medium">
              <span>Batch {selectedBatch}</span>
              <button onClick={() => setSelectedBatch('ALL')} className="hover:text-indigo-900 cursor-pointer">×</button>
            </span>
          )}

          {!isAll(selectedStatus) && (
            <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-[#1a2339] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded-lg text-xs font-medium">
              <span>Status: {selectedStatus}</span>
              <button onClick={() => setSelectedStatus('ALL')} className="hover:text-slate-900 cursor-pointer">×</button>
            </span>
          )}

          {!isAll(selectedPriority) && (
            <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-[#1a2339] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded-lg text-xs font-medium">
              <span>Priority: {selectedPriority}</span>
              <button onClick={() => setSelectedPriority('ALL')} className="hover:text-slate-900 cursor-pointer">×</button>
            </span>
          )}

          {showHighYieldOnly && (
            <span className="inline-flex items-center gap-1 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-2.5 py-0.5 rounded-lg text-xs font-medium">
              <span>High Yield Only ⭐</span>
              <button onClick={() => setShowHighYieldOnly(false)} className="hover:text-amber-900 cursor-pointer">×</button>
            </span>
          )}

          {searchQuery.trim() && (
            <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-[#1a2339] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded-lg text-xs font-medium">
              <span>Search: "{searchQuery}"</span>
              <button onClick={() => setSearchQuery('')} className="hover:text-slate-900 cursor-pointer">×</button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
