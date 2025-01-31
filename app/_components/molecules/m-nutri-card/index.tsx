import { ReactElement } from 'react';

interface NutritionCardProps {
  iconBgColor: string;
  Icon: ReactElement;
  title: string;
  value: string;
  badgeText: string;
  className?: string;
  style?: React.CSSProperties;
}

export const NutritionCard = ({
  iconBgColor,
  Icon,
  title,
  value,
  badgeText,
  className = '',
  style,
}: NutritionCardProps) => {
  return (
    <div
      className={`bg-[#252525] rounded-[10px] w-full xl:w-[10.8rem] 3xl:w-[calc(10.8rem*1.2)] 3xl:h-[calc(7.7rem*1.2)] h-[7.7rem] px-[1rem] py-[1rem] flex flex-col justify-between ${className}`}
      style={style}>
      <div className="flex items-start justify-between">
        <span>
          <p className="text-[10px] 3xl:text-[calc(10px*1.2)] font-[350] text-white font-400">{title}</p>
          <p className="font-[550] text-white text-[14px] 3xl:text-[calc(14px*1.2)]">{value}</p>
        </span>
        <div
          className="rounded-full w-[2.43rem] h-[2.43rem] flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}>
          {Icon}
        </div>
      </div>
      <div className="w-[2.9rem] h-[1.18rem] rounded-[2px] flex items-center justify-center bg-white/20">
        <p className="text-[10px] 3xl:text-[calc(10px*1.2)] font-[350] text-white">{badgeText}</p>
      </div>
    </div>
  );
};
