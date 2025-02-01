'use client';

import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import InventoryIcon from '@/app/_lib/icons/dashboard/sidebar/People';
import useFetchQuery from '@/app/_lib/hooks/use-fetch-query';
import LoadingScreen from '@/app/_components/atoms/a-Spinner';

interface TimeTrackingData {
  totalTime: string;
  weeklyData: {
    day: string;
    value: number;
  }[];
}

const TotalTimeTracker: React.FC<{
  title: string;
  time: string;
  data: { day: string; value: number }[];
}> = ({ title, time, data }) => {
  const COLORS = {
    background: '#374151', // Dark gray for background bars
    foreground: '#93C5FD', // Light blue for active bars
  };

  return (
    <div className="w-full 1xl:w-[22.7rem] 2xl:w-[calc(22.7rem*1.2)] 3xl:w-[calc(22.7rem*1.25)] 3xl:h-[calc(18.12rem*1.2)] h-[18.12rem] rounded-[10px] bg-[#252525] px-5 py-5 text-white">
      {/* Header */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-3">
          <span>
            <InventoryIcon className="stroke-white" />
          </span>
          <p className="font-[200] text-[14px] 3xl:text-[calc(14px*1.2)]  text-[#BEBEBE]">{title}</p>
        </div>
        <p className="text-[22px] 3xl:text-[calc(22px*1.2)] font-[700]">{time}</p>
      </div>

      {/* Bar Chart */}
      <div className="h-40 3xl:h-[calc(10rem*1.2)] mt-5 3xl:mt-[calc(35px*1.2)] ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
            <YAxis hide />
            <Bar
              dataKey="value"
              fill="#ADD1DD"
              radius={10}
              barSize={9}
              background={{
                fill: '#484848',
                radius: 10,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const TotalTimeTrackerCard = () => {
  const { data, error, isLoading } = useFetchQuery<TimeTrackingData>('/api/time-tracking');

  if (isLoading) {
    return (
      <div className="w-full 1xl:w-[22.7rem] 2xl:w-[calc(22.7rem*1.2)] 3xl:w-[calc(22.7rem*1.25)] 3xl:h-[calc(18.12rem*1.2)] h-[18.12rem] rounded-[10px] bg-[#252525] px-5 py-5 text-white flex items-center justify-center">
        <LoadingScreen />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full 1xl:w-[22.7rem] 2xl:w-[calc(22.7rem*1.2)] 3xl:w-[calc(22.7rem*1.25)] 3xl:h-[calc(18.12rem*1.2)] h-[18.12rem] rounded-[10px] bg-[#252525] px-5 py-5 text-white flex items-center justify-center">
        <div className="text-red-400">Sorry, an error occurred!</div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return <TotalTimeTracker title="Total Time" time={data.totalTime} data={data.weeklyData} />;
};

export default TotalTimeTrackerCard;
