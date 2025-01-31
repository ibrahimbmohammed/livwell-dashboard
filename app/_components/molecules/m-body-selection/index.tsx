'use client';

import { Tab } from '@headlessui/react';
import Image from 'next/image';
import HumanDummy from '@assets/png/HumanDummy.png';
import BodyPositionIndicatorChest from '../m-body-position-chect';
import BodyPositionIndicatorShoulder from '../m-body-position-shoulder';
import BodyPositionIndicatorAbs from '../m-body-position-abs';
import BodyPositionIndicatorLegs from '../m-body-position-legs';
import BodyPositionIndicatorButt from '../m-body-position-butt';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const categories = ['Chest', 'Shoulder', 'Abs', 'Legs', 'Butt'];
function BodySelection() {
  return (
    <div className="main w-full h-[23.25rem] md:h-[30rem] 1xl:h-[32.25rem] bg-[#1B1B1B] 1xl:w-[36.675rem] 3xl:w-[calc(38.675rem*1.14)] 3xl:h-[calc(32.25rem*1.2)] rounded-[10px] flex flex-col items-start justify-start z-10 my-3 1xl:my-0 ">
      <div className="w-full  px-2 py-0 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-transparent mt-6 ml-6">
            {categories?.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-[4.7rem]  rounded-lg py-1.5  text-sm leading-6',
                    'focus:outline-none ',
                    selected
                      ? 'bg-[#252525] rounded-full text-white font-[300] '
                      : 'text-white hover:bg-bg-[#252525] text-[14px] font-[300]'
                  )
                }>
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2  relative px-10 pt-2 pb-8">
            <div className="flex relative h-full">
              <div className="flex flex-col 1xl:space-y-8 h-[14rem] md:h-[22rem] 1xl:h-[25rem] 3xl:h-[calc(25rem*1.2)]  justify-end">
                <div className="flex flex-col space-y-0">
                  <p className="font-[200] text-[#ACACAC] text-[10px] 1xl:text-[12px]">Height</p>
                  <p className="font-[550] text-white text-[12px] 1xl:text-[14px]">5ft 4inch</p>
                </div>
                <div className="flex flex-col space-y-0">
                  <p className="font-[200] text-[#ACACAC] text-[10px] 1xl:text-[12px]">Weight</p>
                  <p className="font-[550] text-white text-[12px] 1xl:text-[14px]">120 lbs</p>
                </div>
              </div>
            </div>
            <div className=" absolute 2xl:hidden top-4 left-8 md:left-36 1xl:left-24 1xl:top-7 1xl:right-0">
              <Image src={HumanDummy?.src} alt="humandummy" width={463} height={352} />
            </div>
            <div className=" absolute hidden 2xl:flex top-9 2xl:left-[calc(6rem*1.2)] 3xl:left-[calc(6rem*1.2)] ">
              <Image src={HumanDummy?.src} alt="humandummy" width={563} height={382} />
            </div>
            <BodyPositionIndicatorChest />
            <BodyPositionIndicatorShoulder />
            <BodyPositionIndicatorAbs />
            <BodyPositionIndicatorLegs />
            <BodyPositionIndicatorButt />
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default BodySelection;
