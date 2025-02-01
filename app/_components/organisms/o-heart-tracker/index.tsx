'use client';

import React from 'react';
import HeartPic from '@assets/png/heartWell.png';
import { LineChart, ResponsiveContainer, Line } from 'recharts';
import Image from 'next/image';
import useFetchQuery from '@/app/_lib/hooks/use-fetch-query';
import LoadingScreen from '@/app/_components/atoms/a-Spinner';

interface HeartbeatData {
  currentBpm: number;
  unit: string;
  status: string;
  data: { value: number }[];
}

const HeartTracker: React.FC = () => {
  const { data, error, isLoading } = useFetchQuery<HeartbeatData>('/api/heartbeat');

  if (isLoading) {
    return (
      <div className="flex w-full flex-col items-start justify-between rounded-[10px] 1xl:w-[11.7rem] 3xl:w-[calc(11.7rem*1.2)] 3xl:h-[calc(14.8rem*1.2)] h-[14.8rem] px-4 py-4 bg-[#252525]">
        <LoadingScreen />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full flex-col items-start justify-between rounded-[10px] 1xl:w-[11.7rem] 3xl:w-[calc(11.7rem*1.2)] 3xl:h-[calc(14.8rem*1.2)] h-[14.8rem] px-4 py-4 bg-[#252525]">
        <div className="text-red-400">Sorry, an error occurred!</div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-[10px] 1xl:w-[11.7rem] 3xl:w-[calc(11.7rem*1.2)] 3xl:h-[calc(14.8rem*1.2)] h-[14.8rem] px-4 py-4 bg-[#252525]">
      <div>
        <p className="text-[9.9px] 3xl:text-[calc(9.9px*1.2)] text-[#FBD7BA]">Heartbeat</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="text-[25.11px] 3xl:text-[calc(25.11px*1.2)] font-[400] text-white">{data.currentBpm}</p>
          <p className="text-[9.9px] 3xl:text-[calc(9.9px*1.2)] text-[#FBD7BA]">{data.unit}</p>
        </div>
        <div>
          <Image src={HeartPic.src} alt="illustration" width={51} height={80} />
        </div>
      </div>
      <div className="h-20 w-full mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.data}>
            <Line type="monotone" dataKey="value" stroke="#D683AC" strokeWidth={3} dot={false} isAnimationActive />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <p className="text-[7.92px] 3xl:text-[calc(7.92px*1.2)] text-white font-light">{data.status}</p>
      </div>
    </div>
  );
};

export default HeartTracker;
