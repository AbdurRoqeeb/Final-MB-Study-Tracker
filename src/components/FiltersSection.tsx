import React, { useMemo } from 'react';
import { SubjectType, StudyPriority, StudyStatus } from '../types';
import { ListFilter, Search, SlidersHorizontal, Star, X } from 'lucide-react';

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
  sortBy: 'default' | 'alphabetical' | 'status';
  setSortBy: (s: 'default' | 'alphabetical' | 'status') => void;
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
  sortBy,
  setSortBy,
  availableSubspecialties
}: FiltersSectionProps) {

  // Subject configurations
  const subjects = ["All", ...Object.values(SubjectType)];

  // Statuses
  const statuses = ["All", ...Object.values(StudyStatus)];

  // Priorities
  const priorities = ["All", ...Object.values(StudyPriority)];

  // Batches list based on subject
  const batches = useMemo(() => {
    if (selectedSubject === SubjectType.MEDICINE) return ["All", "M1", "M2", "M3"];
    if (selectedSubject === SubjectType.SURGERY) return ["All", "S1", "S2", "S3"];
    if (selectedSubject === SubjectType.COMMUNITY_MEDICINE) return ["All", "CM1", "CM2"];
    return ["All", "M1", "M2", "M3", "S1", "S2", "S3", "CM1", "CM2"];
  }, [selectedSubject]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSubject("All");
    setSelectedSubspecialty("All");
    setSelectedStatus("All");
    setSelectedPriority("All");
    setSelectedBatch("All");
    setShowHighYieldOnly(false);
  };

  const hasActiveFilters = searchQuery !== "" ||
    selectedSubject !== "All" ||
    selectedSubspecialty !== "All" ||
    selectedStatus !== "All" ||
    selectedPriority !== "All" ||
    selectedBatch !== "All" ||
    showHighYieldOnly;

  return (
    <div id="filters-container" className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-amber-500" />
          <h3 className="text-[10px] uppercase font-black text-slate-300 tracking-widest">Search & Filter Syllabus</h3>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-[10px] uppercase font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1 bg-rose-500/10 hover:bg-rose-500/20 px-2.5 py-1 rounded border border-rose-500/20 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            Reset Filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Keyword Search */}
        <div className="relative">
          <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1.5">
            Search Topic / Lecturer
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="e.g. Stroke, Akintunde..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 text-xs rounded-lg pl-9 pr-4 py-2 text-slate-200 outline-none transition-all placeholder:text-slate-600"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Filter by Subject */}
        <div>
          <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1.5">
            Clinical Posting Group
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedBatch("All"); // Reset batch when subject changes to avoid invalid states
              setSelectedSubspecialty("All"); // Reset subspecialty
            }}
            className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 text-xs rounded-lg px-3 py-2 text-slate-200 outline-none cursor-pointer"
          >
            {subjects.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Filter by Subspecialty */}
        <div>
          <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1.5">
            Clinical Subspecialty
          </label>
          <select
            value={selectedSubspecialty}
            onChange={(e) => setSelectedSubspecialty(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 text-xs rounded-lg px-3 py-2 text-slate-200 outline-none cursor-pointer"
          >
            <option value="All">All Subspecialties</option>
            {availableSubspecialties.map(sub => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        {/* Filter by Batch */}
        <div>
          <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1.5">
            Syllabus Batch Code
          </label>
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 text-xs rounded-lg px-3 py-2 text-slate-200 outline-none cursor-pointer"
          >
            {batches.map(b => (
              <option key={b} value={b}>{b === "All" ? "All Batches" : b}</option>
            ))}
          </select>
        </div>

        {/* Filter by Study Status */}
        <div>
          <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1.5">
            Study Status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 text-xs rounded-lg px-3 py-2 text-slate-200 outline-none cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value={StudyStatus.NOT_STARTED}>Unread / Not Started</option>
            <option value={StudyStatus.IN_PROGRESS}>Studying / In Progress</option>
            <option value={StudyStatus.DONE}>Done / Completed</option>
          </select>
        </div>

        {/* Filter by Priority */}
        <div>
          <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1.5">
            Exam Priority Layer
          </label>
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 text-xs rounded-lg px-3 py-2 text-slate-200 outline-none cursor-pointer"
          >
            <option value="All">All Priorities</option>
            <option value={StudyPriority.HIGH}>🔴 HIGH (CommMed active)</option>
            <option value={StudyPriority.ADVANCE_PREP}>🟡 ADVANCE PREP (Medicine)</option>
            <option value={StudyPriority.UPCOMING}>🟢 UPCOMING (Surgery)</option>
          </select>
        </div>

        {/* Sort Configuration */}
        <div>
          <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1.5">
            Syllabus Sort Order
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'default' | 'alphabetical' | 'status')}
            className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 text-xs rounded-lg px-3 py-2 text-slate-200 outline-none cursor-pointer font-medium"
          >
            <option value="default">Default Priority Sorting</option>
            <option value="alphabetical">Alphabetical (A - Z)</option>
            <option value="status">Study Status Order</option>
          </select>
        </div>

        {/* Checkbox for High Yield */}
        <div className="flex items-center pt-5 sm:pt-6">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showHighYieldOnly}
              onChange={(e) => setShowHighYieldOnly(e.target.checked)}
              className="w-4 h-4 rounded text-amber-500 bg-slate-950 border-slate-800 focus:ring-amber-500/50 accent-amber-500 cursor-pointer"
            />
            <span className="text-[10px] uppercase font-black text-slate-400 flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-500/20 text-amber-500" />
              High Yield Only ⭐
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
