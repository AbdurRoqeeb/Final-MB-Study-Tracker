import React from 'react';
import { DailyPlanSplit } from '../types';
import { AlertTriangle, BookOpen, Clock, Sparkles } from 'lucide-react';

interface StudyPlanWidgetProps {
  simulatedDate: Date;
}

export default function StudyPlanWidget({ simulatedDate }: StudyPlanWidgetProps) {
  // Let's determine the active plan and stage based on simulatedDate
  const currentMs = simulatedDate.getTime();

  // Dates
  const commMedEnd = new Date('2026-08-02T23:59:59').getTime();
  const intMedEnd = new Date('2026-09-06T23:59:59').getTime();
  const surgEnd = new Date('2026-10-11T23:59:59').getTime();
  const examDate = new Date('2026-10-19T00:00:00').getTime();

  let activeSplit: DailyPlanSplit;
  let bannerType: 'info' | 'warning' | 'critical' | 'completed' = 'info';

  if (currentMs < commMedEnd) {
    activeSplit = {
      communityPercent: 60,
      medicinePercent: 30,
      surgeryPercent: 10,
      title: "Active CommMed Posting Mode",
      description: "Focus heavily on Community Medicine (epidemiology, biostatistics, nutrition) lecture topics during your current 5-week posting. Maintain daily quick-reviews of Medicine & Surgery."
    };
    bannerType = 'info';
  } else if (currentMs < intMedEnd) {
    activeSplit = {
      communityPercent: 15,
      medicinePercent: 70,
      surgeryPercent: 15,
      title: "Internal Medicine Posting Mode",
      description: "Shift major focus to Internal Medicine (prioritize endocrinology, nephrology, neurology, cardiology). Keep Surgery and CommMed on active recall rotations."
    };
    bannerType = 'info';
  } else if (currentMs < surgEnd) {
    activeSplit = {
      communityPercent: 15,
      medicinePercent: 15,
      surgeryPercent: 70,
      title: "Surgery Posting Mode",
      description: "Shift major focus to Surgery subspecialties (general surgery, urology, orthopedics, trauma/emergency surgery). Maintain baseline reviews for Medicine & CommMed."
    };
    bannerType = 'warning';
  } else if (currentMs <= examDate) {
    activeSplit = {
      communityPercent: 33,
      medicinePercent: 33,
      surgeryPercent: 34,
      title: "Final Week Revision Sprint Mode",
      description: "Revision Sprint! Equal weight across all subjects. Focus strictly on star-tagged ⭐ HIGH YIELD subjects, past questions, and weak areas."
    };
    bannerType = 'critical';
  } else {
    activeSplit = {
      communityPercent: 0,
      medicinePercent: 0,
      surgeryPercent: 0,
      title: "Exam Period Over",
      description: "The MBBS final board exams are over! Well done clinical scholar. Refresh yourself."
    };
    bannerType = 'completed';
  }  return (
    <div id="study-plan-widget" className="bg-slate-900 border border-slate-800 text-white rounded-xl p-5 shadow-sm mb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Sparkles className="w-24 h-24" />
      </div>

      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-850">
        <BookOpen className="w-4 h-4 text-amber-500" />
        <h3 className="text-[10px] uppercase font-black text-slate-300 tracking-widest">Recommended Daily Study Plan</h3>
      </div>

      {bannerType === 'critical' ? (
        <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-3.5 mb-5 flex gap-3 items-start">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 animate-pulse" />
          <div>
            <h4 className="font-extrabold text-rose-400 uppercase tracking-wide text-[10px]">
              ⚡ Final Week Sprint Revision
            </h4>
            <p className="text-[11px] text-slate-300 mt-1 font-medium">
              You are in the final week! Drop general reading. Switch to rapid-fire active recall, high-yield topics, and clinical flashcards. No new material.
            </p>
          </div>
        </div>
      ) : bannerType === 'warning' ? (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3.5 mb-5 flex gap-3 items-start">
          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-500 uppercase tracking-wide text-[10px]">
              ⚠️ Near-Exam Warning Period
            </h4>
            <p className="text-[11px] text-slate-300 mt-1">
              Exam is less than 3 weeks away. Broaden your study coverage to balance active recall. Keep track of priority badge recommendations!
            </p>
          </div>
        </div>
      ) : bannerType === 'completed' ? (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3.5 mb-5 flex gap-3 items-start">
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-emerald-400 uppercase tracking-wide text-[10px]">
              🎉 Post-Exam Phase
            </h4>
            <p className="text-[11px] text-slate-300 mt-1">
              You have survived the final MB clinical board exams. Good luck on your induction!
            </p>
          </div>
        </div>
      ) : null}

      {/* Main Focus Split */}
      {activeSplit.communityPercent > 0 && (
        <div>
          <div className="mb-4">
            <h4 className="font-bold text-white text-xs flex justify-between items-center">
              <span>{activeSplit.title}</span>
              <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">
                Dynamic Study Weight
              </span>
            </h4>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{activeSplit.description}</p>
          </div>

          {/* Visual Percentage Split Slider Bar */}
          <div className="flex h-5 w-full rounded overflow-hidden border border-slate-800 bg-slate-950 text-[10px] font-black text-center leading-5 mb-5 select-none">
            {activeSplit.communityPercent > 0 && (
              <div
                className="bg-amber-500 text-slate-950 transition-all duration-300"
                style={{ width: `${activeSplit.communityPercent}%` }}
              >
                {activeSplit.communityPercent}% CM
              </div>
            )}
            {activeSplit.medicinePercent > 0 && (
              <div
                className="bg-blue-500 text-white transition-all duration-300"
                style={{ width: `${activeSplit.medicinePercent}%` }}
              >
                {activeSplit.medicinePercent}% Med
              </div>
            )}
            {activeSplit.surgeryPercent > 0 && (
              <div
                className="bg-emerald-500 text-white transition-all duration-300"
                style={{ width: `${activeSplit.surgeryPercent}%` }}
              >
                {activeSplit.surgeryPercent}% Surg
              </div>
            )}
          </div>

          {/* Specific split tips */}
          <div className="grid grid-cols-1 gap-2.5 text-[10px] pt-1">
            <div className="border border-slate-800 rounded-lg p-2.5 bg-slate-950/40">
              <span className="text-amber-500 font-bold uppercase tracking-wider block mb-0.5">Community Med ({activeSplit.communityPercent}%)</span>
              <span className="text-slate-400">
                Focus on: {currentMs < commMedEnd ? "Definitions, Biostatistics basics, MNCH" : "Past clinical MCQ reviews"}
              </span>
            </div>
            <div className="border border-slate-800 rounded-lg p-2.5 bg-slate-950/40">
              <span className="text-blue-400 font-bold uppercase tracking-wider block mb-0.5">Internal Medicine ({activeSplit.medicinePercent}%)</span>
              <span className="text-slate-400">
                Focus on: {currentMs >= commMedEnd && currentMs < intMedEnd ? "Cardiology, Nephrology, Neurology, Endocrinology" : "General Medicine, Dermatology"}
              </span>
            </div>
            <div className="border border-slate-800 rounded-lg p-2.5 bg-slate-950/40">
              <span className="text-emerald-400 font-bold uppercase tracking-wider block mb-0.5">Surgery ({activeSplit.surgeryPercent}%)</span>
              <span className="text-slate-400">
                Focus on: {currentMs >= intMedEnd && currentMs < surgEnd ? "General surgery, Urology, Orthopedics, Trauma" : "Radiology, Anaesthesiology, Ophthalmology"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
