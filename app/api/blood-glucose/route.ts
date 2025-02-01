import { NextResponse } from 'next/server';

interface BloodGlucoseData {
  currentLevel: number;
  unit: string;
  status: string;
  data: { time: string; value: number }[];
}

function generateBloodGlucoseData(): BloodGlucoseData {
  // Generate random blood glucose data
  const data = Array.from({ length: 8 }, (_, index) => ({
    time: index.toString(),
    value: Math.floor(Math.random() * 100) + 30, // Random values between 30 and 130
  }));

  return {
    currentLevel: data[data.length - 1].value, // Use the last value as the current level
    unit: 'mg/dl',
    status: 'After fasting',
    data,
  };
}

export async function GET() {
  try {
    const data = generateBloodGlucoseData();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store', // Prevent caching for fresh data
      },
    });
  } catch (error) {
    console.error('Error generating blood glucose data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
