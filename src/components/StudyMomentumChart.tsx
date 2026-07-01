import React, { useState, useMemo } from 'react';
import { SubjectType, Topic, StudyStatus } from '../types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Flame, Calendar, Activity, Info } from 'lucide-react';

interface StudyMomentumChartProps {
  topics: Topic[];
  simulatedDate: Date;
}

const CustomTooltip = ({ active, payload, label, isDark }: any) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum: number, entry: any) => {
      // Don't sum the "Total" helper payload key if we have separate stacks
      if (entry.dataKey === 'Total') return sum;
      return sum + (entry.value || 0);
    }, 0);

    if (total === 0) return null;

    return (
      <div className={`border p-3 rounded-lg shadow-xl text-left text-xs font-sans ${
        isDark 
          ? 'bg-slate-950/95 border-slate-800 text-slate-200' 
          : 'bg-white/95 border-slate-200 text-slate-800'
      }`}>
        <p className={`text-[10px] uppercase font-black tracking-wider mb-2 ${
          isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {label}
        </p>
        <div className="space-y-1">
          {payload.map((entry: any, index: number) => {
            if (entry.dataKey === 'Total' || entry.value === 0) return null;
            return (
              <div key={index} className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: entry.color }} />
                <span>{entry.name}:</span>
                <span className="font-mono font-bold">{entry.value}</span>
              </div>
            );
          })}
        </div>
        <div className={`border-t pt-1.5 mt-1.5 flex justify-between items-center text-[10px] font-bold uppercase ${
          isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
        }`}>
          <span>Daily Velocity:</span>
          <span className="text-emerald-500 font-mono font-black">{total} Completed</span>
        </div>
      </div>
    );
  }
  return null;
};

export default function StudyMomentumChart({ topics, simulatedDate }: StudyMomentumChartProps) {
  const [timeframe, setTimeframe] = useState<7 | 14 | 30>(7);

  // Check dark mode
  const isDark = !document.documentElement.classList.contains('light');

  const chartData = useMemo(() => {
    const dates: string[] = [];
    const dateLabels: string[] = [];

    // Form timeframe date list ending on simulatedDate
    for (let i = timeframe - 1; i >= 0; i--) {
      const d = new Date(simulatedDate);
      d.setDate(d.getDate() - i);
      const yyyymmdd = d.toISOString().split('T')[0];
      dates.push(yyyymmdd);

      // Form elegant label e.g. "Jun 29" or "Jul 01"
      dateLabels.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }

    // Filter topics that are marked as DONE and have completedAt date
    const doneTopics = topics.filter(t => t.status === StudyStatus.DONE);

    return dates.map((dateStr, idx) => {
      const dayCompletions = doneTopics.filter(t => t.completedAt === dateStr);
      
      const medicine = dayCompletions.filter(t => t.subject === SubjectType.MEDICINE).length;
      const surgery = dayCompletions.filter(t => t.subject === SubjectType.SURGERY).length;
      const communityMedicine = dayCompletions.filter(t => t.subject === SubjectType.COMMUNITY_MEDICINE).length;
      const total = dayCompletions.length;

      return {
        dateStr,
        label: dateLabels[idx],
        "Medicine": medicine,
        "Surgery": surgery,
        "Community Medicine": communityMedicine,
        "Total": total
      };
    });
  }, [topics, simulatedDate, timeframe]);

  // Calculate Streak & Stats
  const metrics = useMemo(() => {
    const doneTopics = topics.filter(t => t.status === StudyStatus.DONE);
    
    // Total completed in this timeframe window
    const windowTotal = chartData.reduce((sum, day) => sum + day.Total, 0);
    
    // Average velocity (completions per day)
    const averageDaily = (windowTotal / timeframe).toFixed(1);

    // Calculate current continuous streak of active study days (any status update or completion)
    let currentStreak = 0;
    let checkDate = new Date(simulatedDate);
    
    while (true) {
      const dateStr = checkDate.toISOString().split('T')[0];
      const completedOnDay = doneTopics.some(t => t.completedAt === dateStr);
      
      if (completedOnDay) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        // Allow streak to continue if we are checking today (simulated date) and they haven't finished anything yet,
        // but yesterday had completions.
        if (currentStreak === 0) {
          const yesterday = new Date(simulatedDate);
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];
          const completedYesterday = doneTopics.some(t => t.completedAt === yesterdayStr);
          if (completedYesterday) {
            checkDate.setDate(checkDate.getDate() - 1);
            continue;
          }
        }
        break;
      }
    }

    return {
      windowTotal,
      averageDaily,
      currentStreak
    };
  }, [topics, chartData, simulatedDate, timeframe]);

  // Color constants to match layout theme
  const colors = {
    medicine: '#3b82f6', // blue-500
    surgery: '#10b981', // emerald-500
    communityMedicine: '#f59e0b', // amber-500
    grid: isDark ? '#1e293b' : '#e2e8f0',
    text: isDark ? '#94a3b8' : '#64748b'
  };

  const hasData = metrics.windowTotal > 0;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm text-white">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5 pb-4 border-b border-slate-850">
        <div>
          <h2 className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
            Study Momentum & Velocity
          </h2>
          <p className="text-[11px] text-slate-500 font-bold mt-1">
            Analyze daily completion trends and keep your continuous streak alive.
          </p>
        </div>

        {/* Timeframe Controls */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-[9px] uppercase font-black">
          {( [7, 14, 30] as const).map(days => (
            <button
              key={days}
              onClick={() => setTimeframe(days)}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                timeframe === days
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {days}d
            </button>
          ))}
        </div>
      </div>

      {/* Highlights / Momentum Metrics Bento Panel */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-slate-950/50 border border-slate-850 rounded-lg p-3 text-center">
          <p className="text-[8px] uppercase font-black text-slate-500 tracking-widest mb-1">Window Total</p>
          <p className="text-xl font-black text-emerald-400 font-mono tracking-tight">{metrics.windowTotal}</p>
          <p className="text-[9px] text-slate-500 font-bold uppercase mt-0.5">Topics</p>
        </div>
        <div className="bg-slate-950/50 border border-slate-850 rounded-lg p-3 text-center">
          <p className="text-[8px] uppercase font-black text-slate-500 tracking-widest mb-1">Daily Pace</p>
          <p className="text-xl font-black text-blue-400 font-mono tracking-tight">+{metrics.averageDaily}</p>
          <p className="text-[9px] text-slate-500 font-bold uppercase mt-0.5">Topics/Day</p>
        </div>
        <div className="bg-slate-950/50 border border-slate-850 rounded-lg p-3 text-center flex flex-col justify-center items-center">
          <p className="text-[8px] uppercase font-black text-slate-500 tracking-widest mb-1">Active Streak</p>
          <div className="flex items-center gap-1">
            <Flame className={`w-4 h-4 ${metrics.currentStreak > 0 ? 'text-amber-500 fill-amber-500/20' : 'text-slate-600'}`} />
            <p className={`text-xl font-black font-mono tracking-tight ${metrics.currentStreak > 0 ? 'text-amber-500' : 'text-slate-400'}`}>
              {metrics.currentStreak}
            </p>
          </div>
          <p className="text-[9px] text-slate-500 font-bold uppercase mt-0.5">Days</p>
        </div>
      </div>

      {/* Main Bar Chart Panel */}
      <div className="h-[220px] w-full relative">
        {!hasData && (
          <div className="absolute inset-0 z-10 bg-slate-900/40 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-4">
            <Info className="w-7 h-7 text-slate-600 mb-2" />
            <p className="text-[11px] font-black uppercase text-slate-400 tracking-wider">No completions in this timeframe</p>
            <p className="text-[9px] text-slate-500 font-semibold max-w-xs mt-0.5 uppercase">
              Mark some topics as "Done" on the list below or daily schedule to populate your study velocity curve.
            </p>
          </div>
        )}

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 5, left: -25, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
            <XAxis
              dataKey="label"
              stroke={colors.text}
              fontSize={10}
              fontWeight="bold"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke={colors.text}
              fontSize={10}
              fontWeight="bold"
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
            />
            <Tooltip
              content={<CustomTooltip isDark={isDark} />}
              cursor={{ fill: isDark ? '#1e293b' : '#f1f5f9', opacity: 0.3 }}
            />
            <Legend
              verticalAlign="bottom"
              height={30}
              iconSize={8}
              iconType="circle"
              wrapperStyle={{
                fontSize: '9px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                paddingTop: '10px'
              }}
            />
            <Bar
              dataKey="Medicine"
              name="Medicine"
              stackId="a"
              fill={colors.medicine}
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="Surgery"
              name="Surgery"
              stackId="a"
              fill={colors.surgery}
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="Community Medicine"
              name="Community Medicine"
              stackId="a"
              fill={colors.communityMedicine}
              // Rounded top corner only for the stack bar group
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
