'use client';

import TimeHourGlassIcon from '@/app/_lib/icons/dashboard/time';
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

interface VelocityTrackerProps {
  title: string; // Title of the card
  value: string; // Value to display (e.g., "10 Km")
  data: { value: number; index: number }[]; // Chart data
}

const VelocityTracker: React.FC<VelocityTrackerProps> = ({ title, value, data }) => {
  const COLORS = ['#484848', '#FBD7BA']; // Gradient colors: dark gray and light pink

  return (
    <div className="w-full 1xl:w-[12.5rem] 2xl:w-[calc(12.5rem*1.2)] 3xl:w-[calc(12.5rem*1.25)] 3xl:h-[calc(18.12rem*1.2)] h-[18.12rem] rounded-[10px] bg-[#252525] px-5 py-5 text-white">
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-3">
          <span>
            <TimeHourGlassIcon className="stroke-white" />
          </span>
          <p className="font-[200] text-[12px] 3xl:text-[calc(12px*1.2)] text-[#BEBEBE]">{title}</p>
        </div>
        <p className="text-[22px] 3xl:text-[calc(22px*1.2)] font-[700]">{value}</p>
      </div>
      {/* Bar Chart */}
      <div className="flex items-end justify-center xl:mt-4 h-[10rem] 3xl:h-[calc(10rem*1.2)] 3xl:mt-[calc(30px*1.2)] flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="25%">
            <Bar dataKey="value" radius={10}>
              {' '}
              {/* Same radius applied to all corners */}
              {data.map((entry, index) => (
                <Cell key={`bar-${index}`} fill={index < 2 ? COLORS[0] : COLORS[1]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default function VelocityTrackerCard() {
  const chartData = [
    { value: 3, index: 0 },
    { value: 4, index: 1 },
    { value: 5, index: 2 },
    { value: 6, index: 3 },
    { value: 7, index: 4 },
    { value: 8, index: 5 },
    { value: 9, index: 6 },
    { value: 10, index: 7 },
  ];

  return <VelocityTracker title="Average Speed" value="10 Km" data={chartData} />;
}
