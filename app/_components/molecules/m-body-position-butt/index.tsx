import { Tab } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import ArrowHead from '@assets/png/livewell4.png';
import ButtImage from '@assets/png/ButtImage.png';
import Line from '@assets/png/livewell5.png';
import Dot from '@assets/png/livewell1.png';

function BodyPositionIndicatorButt() {
  return (
    <Tab.Panel>
      <div className="absolute  top-[140px] left-[265px] sm:top-[180px] sm:left-[500px]   h-28 bg-transparent">
        <div className="">
          <div className="absolute hidden 1xl:flex top-8 left-9 xl:top-8 xl:-left-12  3xl:top-20 3xl:left-12  ">
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
          <div className="1xl:hidden  absolute top-0 left-0  xl:top-0 xl:-left-12">
            <div className="relative w-[4rem]  h-[4rem] ">
              <div className="absolute">
                <Image src={ButtImage?.src} alt="arrow" width={60.7} height={14.5} />
              </div>
            </div>
          </div>
          <div className="absolute top-[78px] left-[125px] 1xl:top-[78px] 1xl:left-[35px] 3xl:top-[128px] 3xl:left-[125px]">
            <p className="text-white hidden 1xl:flex text-[14px] font-[300]">Butt</p>
          </div>
        </div>
      </div>
    </Tab.Panel>
  );
}

export default BodyPositionIndicatorButt;
