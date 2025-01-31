import { Tab } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import ArrowHead from '@assets/png/livewell4.png';
import AbsImage from '@assets/png/AbsImage.png';
import Line from '@assets/png/livewell5.png';
import Dot from '@assets/png/livewell1.png';

function BodyPositionIndicatorAbs() {
  return (
    <Tab.Panel>
      <div className="absolute top-[55px] left-[70px]  sm:top-[75px] sm:left-[230px] h-28 bg-transparent">
        <div className="">
          <div className="hidden 1xl:flex absolute top-8 left-9 xl:top-8 xl:left-0 1xl:top-12 1xl:-left-3 3xl:top-[68px] 3xl:left-9">
            <div className="relative w-[7rem]  h-[4rem] ">
              <div className="absolute -top-3 -left-[14px]">
                <Image src={Dot?.src} alt="arrow-head" width={30} height={30} />
              </div>
              <div className="absolute">
                <Image src={Line?.src} alt="line" width={70.7} height={14.5} />
              </div>
              <div className="absolute -bottom-[0px] right-9">
                <Image src={ArrowHead?.src} alt="dot" width={20} height={10} />
              </div>
            </div>
          </div>
          <div className="1xl:hidden absolute top-8 left-9  xl:top-3 xl:left-3">
            <div className="relative w-[7rem]  h-[4rem] ">
              <div className="absolute">
                <Image src={AbsImage?.src} alt="arrow" width={70.7} height={14.5} />
              </div>
            </div>
          </div>
          <div className="absolute top-[65px] left-[90px] xl:top-[45px] xl:left-[67px] 1xl:top-[95px] 1xl:left-[60px] 3xl:top-[115px] 3xl:left-[120px]">
            <p className="text-white text-[14px] font-[300]">Abs</p>
          </div>
        </div>
      </div>
    </Tab.Panel>
  );
}

export default BodyPositionIndicatorAbs;
