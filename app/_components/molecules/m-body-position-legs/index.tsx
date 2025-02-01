import { Tab } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import ArrowHead from '@assets/png/livewell4.png';
import LegImage from '@assets/png/LegImage.png';
import Line from '@assets/png/livewell5.png';
import Dot from '@assets/png/livewell1.png';
import useWindowSize from '@/app/_lib/hooks/screen-size';
import { Size } from '@/app/_lib/hooks/useWindowSize';

function BodyPositionIndicatorLegs() {
  const { width = 0 }: Size = useWindowSize();
  return (
    <Tab.Panel>
      <div className="absolute top-[170px] left-[83px] sm:top-[220px] sm:left-[225px] h-28 bg-transparent">
        <div className="">
          <div className="absolute hidden xl:flex top-8 left-9 1xl:top-[50px] 1xl:left-0 3xl:top-28 3xl:left-12 ">
            <div className="relative w-[7rem]  h-[4rem] ">
              <div className="absolute -top-3 -left-[14px]">
                <Image src={Dot?.src} alt="dot" width={30} height={30} />
              </div>
              <div className="absolute">
                <Image src={Line?.src} alt="line" width={70.7} height={14.5} />
              </div>
              <div className="absolute -bottom-[2px]  right-[35px]">
                <Image src={ArrowHead?.src} alt="arrow-head" width={20} height={10} />
              </div>
            </div>
          </div>
          <div className={`xl:hidden  absolute  ${width < 400 ? 'left-[24px]' : 'top-8 left-9'} `}>
            <div className="relative w-[7rem]  h-[4rem] ">
              <div className="absolute">
                <Image src={LegImage?.src} alt="arrow" width={90.7} height={14.5} />
              </div>
            </div>
          </div>
          <div className="absolute top-[58px] left-[88px] 1xl:top-[98px] 1xl:left-[88px] 3xl:top-[158px] 3xl:left-[128px]">
            <p className="text-white hidden xl:flex text-[14px] font-[300]">Legs</p>
          </div>
        </div>
      </div>
    </Tab.Panel>
  );
}

export default BodyPositionIndicatorLegs;
