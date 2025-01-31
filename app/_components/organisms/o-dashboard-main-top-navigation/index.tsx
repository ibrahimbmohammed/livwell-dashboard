/* eslint-disable import/no-extraneous-dependencies */

import ProfileDropDown from '@/app/_components/organisms/o-dashboard-top-navigation/m-profile-dropdown';
import DownTopIcon from '@/app/_lib/icons/dashboard/down-top';
import GirlAvartar from '@assets/png/AvatarLiveWell.png';

function MainTopNavigation() {
  return (
    <div className="fixed flex flex-col justify-center space-y-1 bg-transparent min-h-[6rem]   w-[calc(100vw_-_7.25rem)]  z-20">
      <div className="h-[6rem]  relative w-full bg-transparent flex items-center justify-end  ">
        <div className="flex items-center justify-between px-6 pt-4  w-full">
          <div className="w-full ml-4">
            <div className="flex flex-col items-start">
              <h2 className="font-700 text-[22px] 3xl:text-[calc(22px*1.2)] text-white">Track Your Daily Activity</h2>
              <p className="font-thin text-xs 3xl:text-[calc(12px*1.2)] text-white">
                Check your daily fitness activities and maintain your Health.{' '}
              </p>
            </div>
          </div>

          <div className="flex w-[60%] mr-1  3xl:mr-5  flex-row items-center justify-end space-x-6">
            <div className="ml-4 inline-flex items-center  space-x-4 px-[1rem] py-[0.35rem]">
              <div className="flex mt-1 items-center justify-center space-x-3">
                <img src={GirlAvartar?.src} className="rounded-full" alt="profile avatar" width="51px" height="51px" />
                <div className="flex flex-col items-start">
                  <h2 className="font-700 text-[16px] 3xl:text-[calc(16px*1.2)] text-white">Henry Makanakii</h2>
                  <p className="font-thin text-[14px] 3xl:text-[calc(14px*1.2)] text-white">Product designer</p>
                </div>
                <div className="flex flex-col items-start h-[3rem] space-y-0">
                  <ProfileDropDown position="-right-10">
                    <p className="text-sm font-light text-secondaryColor">
                      <DownTopIcon />
                    </p>
                  </ProfileDropDown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTopNavigation;
