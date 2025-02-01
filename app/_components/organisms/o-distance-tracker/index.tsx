'use client';

import NodeIcon from '@/app/_lib/icons/dashboard/node';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import useFetchQuery from '@/app/_lib/hooks/use-fetch-query';
import LoadingScreen from '@/app/_components/atoms/a-Spinner';

interface ProgressData {
  total: number;
  completed: number;
}

const CircularProgressCard: React.FC = () => {
  const { data, error, isLoading } = useFetchQuery<ProgressData>('/api/progress');

  if (isLoading) {
    return (
      <div className="w-full 1xl:w-[12.5rem] 2xl:w-[calc(12.5rem*1.2)] 3xl:w-[calc(12.5rem*1.25)] 3xl:h-[calc(18.12rem*1.2)] h-[18.12rem] rounded-[10px] bg-[#252525] px-5 py-5 text-white flex flex-col justify-between">
        <LoadingScreen />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full 1xl:w-[12.5rem] 2xl:w-[calc(12.5rem*1.2)] 3xl:w-[calc(12.5rem*1.25)] 3xl:h-[calc(18.12rem*1.2)] h-[18.12rem] rounded-[10px] bg-[#252525] px-5 py-5 text-white flex flex-col justify-between">
        <div className="text-red-400">Sorry, an error occurred!</div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const { total, completed } = data;

  const pieData = [
    { name: 'Completed', value: completed },
    { name: 'Remaining', value: total - completed },
  ];

  const COLORS = ['#2D2D2D', '#FFC5C4'];

  return (
    <div className="w-full 1xl:w-[12.5rem] 2xl:w-[calc(12.5rem*1.2)] 3xl:w-[calc(12.5rem*1.25)] 3xl:h-[calc(18.12rem*1.2)] h-[18.12rem] rounded-[10px] bg-[#252525] px-5 py-5 text-white flex flex-col justify-between">
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-3">
          <span>
            <NodeIcon className="stroke-white" />
          </span>
          <p className="font-[200] text-[14px] 3xl:text-[calc(14px*1.2)] text-[#BEBEBE]">Total Distance</p>
        </div>
        <p className="text-[22px] 3xl:text-[calc(22px*1.2)] font-[700]">{total} Km</p>
      </div>
      {/* Circular Progress */}
      <div className="flex justify-center items-center 3xl:mt-[calc(40px*1.2)] flex-grow">
        <ResponsiveContainer width={150} height={150}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={65}
              outerRadius={75}
              startAngle={90}
              endAngle={500}
              paddingAngle={0}
              stroke="none">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Center Text */}
        <div className="absolute text-center">
          <p className="text-[22px] 3xl:text-[calc(22px*1.2)] font-[500]">{total.toFixed(1)} Km</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressCard;
