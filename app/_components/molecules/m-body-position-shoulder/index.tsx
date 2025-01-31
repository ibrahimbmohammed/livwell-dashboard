import { Tab } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import ArrowHead from '@assets/png/livewell3.png';
import Line from '@assets/png/livewell2.png';
import Dot from '@assets/png/livewell1.png';

function BodyPositionIndicatorShoulder() {
  return (
    <Tab.Panel>
      <div className="absolute top-0 left-[54px] h-28 bg-transparent">
        <div className="">
          <div className="absolute -top-1 -left-12 sm:left-24 sm:top-3 xl:left-16 xl:top-1 1xl:left-0 1xl:-top-1 3xl:left-4 3xl:top-5">
            <p className="text-white text-[12px] xl:text-[14px] font-[300]">Shoulder</p>
          </div>
          <div className="hidden 1xl:flex absolute  top-8  left-9  1xl:top-6 1xl:left-4 3xl:top-12 3xl:left-10">
            <div className="relative w-[7rem]  h-[4rem] ">
              <div className="absolute -top-2 -left-2">
                <Image src={ArrowHead?.src} alt="arrow-head" width={20} height={10} />
              </div>
              <div className="absolute">
                <Image src={Line?.src} alt="line" width={93.7} height={29.5} />
              </div>
              <div className="absolute -bottom-[9px] right-0">
                <Image src={Dot?.src} alt="dot" width={30} height={30} />
              </div>
            </div>
          </div>
          <div className=" 1xl:hidden absolute top-2 -left-12  sm:left-24 sm:top-5 xl:top-4 xl:left-20">
            <div className="relative  w-[5rem] h-[5rem]">
              <div className="absolute  top-1 left-3">
                <Image src={ArrowHead?.src} alt="arrow-head" width={20} height={10} />
              </div>
              <div className="absolute top-4 left-6">
                <Image src={Line?.src} alt="line" width={50.7} height={29.5} />
              </div>
              <div className="absolute  bottom-4 -right-2">
                <Image src={Dot?.src} alt="dot" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tab.Panel>
  );
}

export default BodyPositionIndicatorShoulder;
