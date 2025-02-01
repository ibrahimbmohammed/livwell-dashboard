'use client';

import TimeHourGlassIcon from '@/app/_lib/icons/dashboard/time';
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import useFetchQuery from '@/app/_lib/hooks/use-fetch-query';
import LoadingScreen from '@/app/_components/atoms/a-Spinner';

interface VelocityData {
  title: string;
  value: string;
  data: { value: number; index: number }[];
}

const VelocityTracker: React.FC<VelocityData> = ({ title, value, data }) => {
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

const VelocityTrackerCard = () => {
  const { data, error, isLoading } = useFetchQuery<VelocityData>('/api/velocity');

  if (isLoading) {
    return (
      <div className="w-full 1xl:w-[12.5rem] 2xl:w-[calc(12.5rem*1.2)] 3xl:w-[calc(12.5rem*1.25)] 3xl:h-[calc(18.12rem*1.2)] h-[18.12rem] rounded-[10px] bg-[#252525] px-5 py-5 text-white flex items-center justify-center">
        <LoadingScreen />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full 1xl:w-[12.5rem] 2xl:w-[calc(12.5rem*1.2)] 3xl:w-[calc(12.5rem*1.25)] 3xl:h-[calc(18.12rem*1.2)] h-[18.12rem] rounded-[10px] bg-[#252525] px-5 py-5 text-white flex items-center justify-center">
        <div className="text-red-400 text-center">Sorry, an error occurred!</div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return <VelocityTracker title={data.title} value={data.value} data={data.data} />;
};

export default VelocityTrackerCard;
