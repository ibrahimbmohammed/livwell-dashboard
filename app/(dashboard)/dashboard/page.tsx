import SupportIcon from '@/app/_lib/icons/dashboard/sidebar/PersonIcon';
import { NutritionCard } from '@/app/_components/molecules/m-nutri-card';
import BodySelection from '@/app/_components/molecules/m-body-selection';
import ActivityCard from '@/app/_components/molecules/m-activity-card';
import LeafeIcon from '@/app/_lib/icons/dashboard/man-running';
import CheeseIcon from '@/app/_lib/icons/dashboard/cheese';
import DropLetIcon from '@/app/_lib/icons/dashboard/droplet';
import ActivityTracker from '@/app/_components/organisms/o-activity-tracker';
import CircularProgressCard from '@/app/_components/organisms/o-distance-tracker';
import VelocityTrackerCard from '@/app/_components/organisms/o-velocity-tracker';
import TotalTimeTrackerCard from '@/app/_components/organisms/o-time-tracker';
import BloodTracker from '@/app/_components/organisms/o-blood-sugar';
import HeartTracker from '@/app/_components/organisms/o-heart-tracker';

export default function Home() {
  return (
    <section className="xl:mt-14">
      <div className="w-full grid grid-cols-1 md:grid-cols-1  xl:grid-cols-2  1xl:grid-cols-3  flex-col md:flex-row items-center justify-between justify-items-start 1xl:w-[calc(78rem*var(--scale-factor))]">
        <div className="flex w-full flex-col  sm:flex-row sm:items-end sm:space-x-2 xl:items-center xl:space-x-0 xl:flex-col items-center justify-between relative xl:h-[32.25rem] 3xl:h-[calc(32.25rem*1.2)] space-y-3 xl:space-y-0">
          <ActivityCard />
          <div className="w-full ">
            <div className="w-full grid grid-cols-2 gap-x-1 px-1 xl:gap-x-0  xl:gap-y-4 xl:px-2 xl:py-4 rounded-[10px] xl:mt-4 bg-[#1B1B1B] xl:w-[24.4rem] 3xl:w-[calc(24.4rem*1.2)] 3xl:h-[calc(18rem*1.2)] h-[18rem] items-center justify-items-center">
              <NutritionCard
                iconBgColor="#E7DCF480"
                Icon={<SupportIcon />}
                title="Protein"
                value="130 col"
                badgeText="9.0 kcl"
              />
              <NutritionCard
                iconBgColor="#ADD1DD80"
                Icon={<LeafeIcon />}
                title="Cerbs"
                value="130 col"
                badgeText="9.0 kcl"
              />
              <NutritionCard
                iconBgColor="#FBD7BA80"
                Icon={<CheeseIcon />}
                title="Fats"
                value="130 col"
                badgeText="9.0 kcl"
              />
              <NutritionCard
                iconBgColor="#FFD4D380"
                Icon={<DropLetIcon />}
                title="water"
                value="130 col"
                badgeText="9.0 kcl"
              />
            </div>
          </div>
        </div>
        <BodySelection />
        <div className="w-full flex items-center justify-end mb-3 xl:mb-0 xl:mt-3 1xl:mt-0 ">
          <div className="w-full bg-[#1B1B1B] 1xl:w-[13.875rem] 3xl:w-[calc(13.87rem*1.25)] 1xl:h-[32.25rem] 3xl:h-[calc(32.25rem*1.2)] rounded-[10px] flex flex-col sm:flex-row sm:items-end sm:space-x-2 1xl:flex-col 1xl:space-x-0 items-center 1xl:items-center space-y-2 justify-center 1xl:justify-end px-2 pt-8 ">
            <BloodTracker />
            <HeartTracker />
          </div>
        </div>
      </div>
      <div className="xl:mt-6">
        <div className=" bg-[#1B1B1B]  w-full flex-col sm:grid sm:grid-cols-2 sm:gap-2 1xl:gap-0 1xl:flex 1xl:flex-row  1xl:h-[21.5rem]  3xl:h-[calc(21.5rem*1.2)]  rounded-[10px] flex items-center justify-between px-4 xl:px-8 py-4 space-y-3 1xl:space-y-0 1xl:space-x-4 1xl:w-[calc(78rem*var(--scale-factor))] xl:w-[calc(68rem*var(--scale-factor))]">
          <ActivityTracker />
          <TotalTimeTrackerCard />
          <CircularProgressCard />
          <VelocityTrackerCard />
        </div>
      </div>
    </section>
  );
}
