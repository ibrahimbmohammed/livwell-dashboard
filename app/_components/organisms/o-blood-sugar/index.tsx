'use client';

import React from 'react';
import bloodPic from '@assets/png/AirBalloon.png';
import { AreaChart, Area, ResponsiveContainer, XAxis } from 'recharts';
import Image from 'next/image';
import useFetchQuery from '@/app/_lib/hooks/use-fetch-query';
import LoadingScreen from '@/app/_components/atoms/a-Spinner';

interface BloodGlucoseData {
  currentLevel: number;
  unit: string;
  status: string;
  data: { time: string; value: number }[];
}

const BloodTracker: React.FC = () => {
  const { data, error, isLoading } = useFetchQuery<BloodGlucoseData>('/api/blood-glucose');

  if (isLoading) {
    return (
      <div className="flex w-full flex-col items-center justify-center  rounded-[10px] 1xl:w-[11.7rem] 3xl:w-[calc(11.7rem*1.2)] 3xl:h-[calc(14.8rem*1.2)] h-[14.8rem] px-4 py-4 bg-[#252525]">
        <LoadingScreen />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full  items-center justify-center rounded-[10px] 1xl:w-[11.7rem] 3xl:w-[calc(11.7rem*1.2)] 3xl:h-[calc(14.8rem*1.2)] h-[14.8rem] px-4 py-4 bg-[#252525]">
        <div className="text-red-400 text-center">Sorry, an error occurred!</div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-[10px] 1xl:w-[11.7rem] 3xl:w-[calc(11.7rem*1.2)] 3xl:h-[calc(14.8rem*1.2)] h-[14.8rem] px-4 py-4 bg-[#252525]">
      <div>
        <p className="text-[9.9px] 3xl:text-[calc(9.9px*1.2)] text-[#FBD7BA]">Blood Glucose</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="text-[25.11px] 3xl:text-[calc(25.11px*1.2)] font-[400] text-white">{data.currentLevel}</p>
          <p className="text-[9.9px] 3xl:text-[calc(9.9px*1.2)] text-[#FBD7BA]">{data.unit}</p>
        </div>
        <div>
          <Image src={bloodPic.src} alt="illustration" width={80} height={90} />
        </div>
      </div>
      <div className="h-[3rem] w-full mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data.data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
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
      <div>
        <p className="text-[7.92px] 3xl:text-[calc(7.92px*1.2)] text-white font-light">{data.status}</p>
      </div>
    </div>
  );
};

export default BloodTracker;
