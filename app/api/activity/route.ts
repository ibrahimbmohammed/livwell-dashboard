import { NextResponse } from 'next/server';

interface ActivityData {
  [key: string]: {
    done: string;
    left: string;
    activity: { value: number; index: number }[];
  };
}

function generateDummyData(startDate: Date): ActivityData {
  const data: ActivityData = {};

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
}

export async function GET(request: Request) {
  // Get the date from query params or use current date
  const { searchParams } = new URL(request.url);
  const dateParam = searchParams.get('date');

  const startDate = dateParam ? new Date(dateParam) : new Date();

  // Generate data
  const activityData = generateDummyData(startDate);

  return NextResponse.json(activityData);
}
