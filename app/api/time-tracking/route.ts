import { NextResponse } from 'next/server';

interface TimeTrackingData {
  totalTime: string;
  weeklyData: {
    day: string;
    value: number;
  }[];
}

function generateTimeTrackingData(): TimeTrackingData {
  // Generate random values between 30 and 80
  const weeklyData = [
    { day: 'Mon', value: Math.floor(Math.random() * 50) + 30 },
    { day: 'Tue', value: Math.floor(Math.random() * 50) + 30 },
    { day: 'Wed', value: Math.floor(Math.random() * 50) + 30 },
    { day: 'Thu', value: Math.floor(Math.random() * 50) + 30 },
    { day: 'Fri', value: Math.floor(Math.random() * 50) + 30 },
    { day: 'Sat', value: Math.floor(Math.random() * 50) + 30 },
    { day: 'Sun', value: Math.floor(Math.random() * 50) + 30 },
  ];

  // Calculate total time based on values
  const totalMinutes = weeklyData.reduce((acc, curr) => acc + curr.value, 0);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const totalTime = `${hours}h ${minutes}m`;

  return {
    totalTime,
    weeklyData,
  };
}

export async function GET() {
  try {
    const data = generateTimeTrackingData();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Error generating time tracking data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
