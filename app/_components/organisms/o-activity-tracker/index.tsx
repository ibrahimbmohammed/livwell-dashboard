
'use client';

import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ActivityTracker = () => {
  const [selectedPoint, setSelectedPoint] = useState(8);
  const [selectedDates, setSelectedDates] = useState<string[]>([]); 

  // Generate dummy data for a month
  const generateDummyData = (startDate: Date) => {
    const data: {
      [key: string]: {
        done: string;
        left: string;
        activity: { value: number; index: number }[];
      };
    } = {};
    for (let i = -15; i <= 15; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dateKey = date.toISOString().split('T')[0];
      const activityPoints = Array.from({ length: 15 }, (_, index) => ({
        value: Math.random() * 50 + 10,
        index,
      }));
      data[dateKey] = {
        done: (-Math.random() * 8 - 2).toFixed(1),
        left: (Math.random() * 6 + 2).toFixed(1),
        activity: activityPoints,
      };
    }
    return data;
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activityData] = useState(() => generateDummyData(new Date()));

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getWeekDates = (date: Date) => {
    const dayOfWeek = date.getDay();
    const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const monday = new Date(date);
    monday.setDate(date.getDate() - diff);

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      return date;
    });
  };

  const weekDates = getWeekDates(selectedDate);

  const navigateWeek = (direction: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + direction * 7);
    setSelectedDate(newDate);
  };

  const selectedDateKey = selectedDate.toISOString().split('T')[0];
  const currentDayData = activityData[selectedDateKey] || {
    done: '-5.6',
    left: '4.4',
    activity: Array(15).fill({ value: 30, index: -1 }),
  };

  const CustomDot = (props: { cx?: number; cy?: number; payload?: { index: number } }) => {
    const { cx, cy, payload } = props;
    if (payload && payload.index === selectedPoint) {
      return <circle cx={cx} cy={cy} r={4} fill="#fff" />;
    }
    return null;
  };

  const handleAreaClick = (data: any) => {
    if (data?.activePayload?.[0]?.payload?.index !== undefined) {
      setSelectedPoint(data.activePayload[0].payload.index);
    }
  };

  // Add this function to handle date selection
  const handleDateClick = (date: Date) => {
    const dateKey = date.toISOString().split('T')[0];
    if (hasData(date)) {
      setSelectedDates((prev) => {
        if (prev.includes(dateKey)) {
          return prev.filter((d) => d !== dateKey);
        } else {
          return [...prev, dateKey];
        }
      });
      setSelectedDate(date);
    }
  };

  // Helper function to check if date has data
  const hasData = (date: Date) => {
    const dateKey = date.toISOString().split('T')[0];
    return !!activityData[dateKey];
  };

  return (
    <div className="w-full 1xl:w-[20rem] 2xl:w-[calc(20rem*1.2)] 3xl:w-[calc(20rem*1.25)] 3xl:h-[calc(18.12rem*1.2)] h-[19rem] flex flex-col z-30 justify-between">
      <div className="pb-2">
        <div className="flex flex-col text-white">
          <p className="text-[22px] 3xl:text-[calc(22px*1.2)] font-[700] 3xl:font-[800]">Activity Tracking</p>
          <p className="text-[14px] 3xl:text-[calc(14px*1.2)] font-[300] text-white">
            {selectedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              day: '2-digit',
              month: 'short',
            })}
          </p>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => navigateWeek(-1)}
            className="p-[1px] 3xl:p-[4px] hover:bg-gray-700 border rounded-full transition-colors">
            <ChevronLeft className="w-3 h-3 text-white" />
          </button>
          <button
            onClick={() => navigateWeek(1)}
            className="p-[1px] 3xl:p-[4px] hover:bg-gray-700 border rounded-full transition-colors">
            <ChevronRight className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
      <div className="flex space-y-4 flex-col justify-between">
        <div className="grid grid-cols-7 gap-2 mb-0 mt-4">
          {weekDays.map((day, index) => {
            const currentDate = weekDates[index];
            const dateKey = currentDate.toISOString().split('T')[0];
            const isSelected = selectedDates.includes(dateKey);
            const isCurrentDay = currentDate.toDateString() === selectedDate.toDateString();
            const hasDataForDate = hasData(currentDate);

            return (
              <div
                key={day}
                onClick={() => handleDateClick(currentDate)}
                className={`text-center cursor-pointer ${hasDataForDate ? 'hover:opacity-80' : 'opacity-50'}`}>
                <div className="text-[11px] 3xl:text-[calc(11px*1.2)] text-[#8EA1B3] font-[300] mb-1">{day}</div>
                <div
                  className={`text-[14px] 3xl:text-[calc(14px*1.2)] transition-all flex items-center justify-center mx-auto w-6 h-6 ${
                    isCurrentDay
                      ? 'bg-white text-black rounded-full'
                      : isSelected
                      ? 'bg-cyan-500 text-white rounded-full'
                      : 'text-white'
                  }`}>
                  {currentDate.getDate()}
                </div>
              </div>
            );
          })}
        </div>

        <div className="h-[5rem] mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={currentDayData.activity} onClick={handleAreaClick}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(231, 220, 244, 0.2)" />
                  <stop offset="100%" stopColor="rgba(231, 220, 244, 0.05)" />
                </linearGradient>
              </defs>
              <Area
                type="linear"
                dataKey="value"
                stroke="rgb(231, 220, 244)"
                strokeWidth={2}
                fill="url(#colorGradient)"
                dot={<CustomDot />}
                activeDot={false}
                isAnimationActive={true}
                animationDuration={500}
                connectNulls
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="text-[20px] 3xl:text-[calc(20px*1.2)] text-white font-[500]">{currentDayData.done}</div>
            <div className="text-[12px] 3xl:text-[calc(12px*1.2)] text-white font-[400]">Done</div>
          </div>
          <div className="text-right">
            <div className="text-[20px] 3xl:text-[calc(20px*1.2)] text-white font-[500]">{currentDayData.left}</div>
            <div className="text-[12px] 3xl:text-[calc(12px*1.2)] text-white font-[400]">Left</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTracker;