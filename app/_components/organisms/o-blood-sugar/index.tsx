'use client';

import React from 'react';
import bloodPic from '@assets/png/AirBalloon.png';
import { AreaChart, Area, ResponsiveContainer, XAxis } from 'recharts';
import Image from 'next/image';

interface BloodTrackerProps {}

const data = [
  { time: '0', value: 130 },
  { time: '1', value: 125 },
  { time: '2', value: 80 },
  { time: '3', value: 90 },
  { time: '4', value: 90 },
  { time: '5', value: 40 },
  { time: '6', value: 50 },
  { time: '7', value: 30 },
];

const BloodTracker: React.FC<BloodTrackerProps> = () => {
  // Colors for the bars - background and foreground
  const COLORS = {
    background: '#374151', // Dark gray for background bars
    foreground: '#93C5FD', // Light blue for active bars
  };

  return (
    <div className="flex  w-full flex-col items-start justify-between rounded-[10px] 1xl:w-[11.7rem] 3xl:w-[calc(11.7rem*1.2)] 3xl:h-[calc(14.8rem*1.2)] h-[14.8rem] px-4 py-4 bg-[#252525]">
      <div className="">
        <p className="text-[9.9px] 3xl:text-[calc(9.9px*1.2)] text-[#FBD7BA]">Blood Glucose</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="">
          <p className="text-[25.11px] 3xl:text-[calc(25.11px*1.2)] font-[400] text-white">136</p>
          <p className="text-[9.9px] 3xl:text-[calc(9.9px*1.2)] text-[#FBD7BA]">mg/dl</p>
        </div>
        <div className="">
          <Image src={bloodPic.src} alt="illustration" className="" width={80} height={90} />
        </div>
      </div>
      <div className="h-[3rem] w-full  mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="glucoseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF9B9B" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#FF9B9B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" hide />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#FF9B9B"
              strokeWidth={2}
              fill="url(#glucoseGradient)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="">
        <p className="text-[7.92px] 3xl:text-[calc(7.92px*1.2)] text-white font-light">After fasting</p>
      </div>
    </div>
  );
};

export default BloodTracker;
