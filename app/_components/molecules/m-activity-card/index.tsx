import Image from 'next/image';
import React from 'react';
import sidePic from '@assets/png/wellside.png';
import CloudIcon from '@/app/_lib/icons/dashboard/cloud';
import InventoryIcon from '@/app/_lib/icons/dashboard/sidebar/People';
import ManRunningIcon from '@/app/_lib/icons/dashboard/leafe';

function ActivityCard() {
  return (
    <div className="flex w-full flex-col items-center justify-between relative  xl:h-[32.25rem]">
      <Image src={sidePic.src} alt="sideDesign" className="absolute right-0 top-0" width={150} height={150} />
      <div className="w-full">
        <div className="w-full xl:w-[24.4rem] 3xl:w-[calc(24.4rem*1.2)] 3xl:h-[calc(11.9rem*1.2)] flex flex-col space-y-8  3xl:space-y-[calc(2.5rem*1.2)] h-[11.9rem] px-5 py-8 bg-[#71DDB1] rounded-[10px]">
          <div className="flex space-x-2">
            <span className="">
              <CloudIcon />
            </span>
            <p className="font-[500] text-black text-[22px] 3xl:text-[calc(22px*1.2)]">Morning Walk</p>
          </div>
          <div className="flex items justify-between lg:w-[18rem] 3xl:w-[calc(18rem*1.2)]">
            <div className="flex items-center space-x-2">
              <div className="">
                {' '}
                <ManRunningIcon />
              </div>
              <div className="flex flex-col">
                <p className="text-[14px] 3xl:text-[calc(14px*1.3)] text-black font-[400]">Running</p>
                <p className="text-[16px] 3xl:text-[calc(16px*1.3)] text-black font-[550]">130 col</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="">
                {' '}
                <InventoryIcon className="stroke-black" />
              </div>
              <div className="flex flex-col">
                <p className="text-[14px] 3xl:text-[calc(14px*1.3)] text-black font-[400">Duration</p>
                <p className="text-[16px] 3xl:text-[calc(16px*1.3)] text-black font-[550]">31:12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
