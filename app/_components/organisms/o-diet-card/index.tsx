'use client';
import React from 'react';
import { NutritionCard } from '../../molecules/m-nutri-card';
import SupportIcon from '@/app/_lib/icons/dashboard/sidebar/PersonIcon';
import LeafeIcon from '@/app/_lib/icons/dashboard/man-running';
import CheeseIcon from '@/app/_lib/icons/dashboard/cheese';
import DropLetIcon from '@/app/_lib/icons/dashboard/droplet';
import useFetchQuery from '@/app/_lib/hooks/use-fetch-query';
import LoadingScreen from '@/app/_components/atoms/a-Spinner';

interface NutritionData {
  iconBgColor: string;
  title: string;
  value: string;
  badgeText: string;
}

function DietCards() {
  const { data, error, isLoading } = useFetchQuery<NutritionData[]>('/api/diet');
  if (isLoading) {
    return (
      <div className="w-full flex bg-[#1B1B1B] xl:w-[24.4rem] 3xl:w-[calc(24.4rem*1.2)] 3xl:h-[calc(18rem*1.2)] h-[18rem] items-center justify-center">
        <LoadingScreen />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-red-400 text-center">Sorry, an error occurred!</div>
      </div>
    );
  }

  if (!data) {
    return null;
  }
  const arrayData: NutritionData[] = Array.isArray(data) ? data : Object.values(data);

  // Map icons to titles
  const iconMap = {
    Protein: <SupportIcon />,
    Carbs: <LeafeIcon />,
    Fats: <CheeseIcon />,
    Water: <DropLetIcon />,
  };

  return (
    <div className="w-full grid grid-cols-2 gap-x-1 px-1 xl:gap-x-0 xl:gap-y-4 xl:px-2 xl:py-4 rounded-[10px] xl:mt-4 bg-[#1B1B1B] xl:w-[24.4rem] 3xl:w-[calc(24.4rem*1.2)] 3xl:h-[calc(18rem*1.2)] h-[18rem] items-center justify-items-center">
      {arrayData?.map((item: NutritionData, index) => (
        <NutritionCard
          key={index}
          iconBgColor={item.iconBgColor}
          Icon={iconMap[item.title as keyof typeof iconMap]}
          title={item.title}
          value={item.value}
          badgeText={item.badgeText}
        />
      ))}
    </div>
  );
}

export default DietCards;
