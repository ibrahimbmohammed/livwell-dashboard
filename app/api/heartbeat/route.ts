import { NextResponse } from 'next/server';

interface HeartbeatData {
  currentBpm: number;
  unit: string;
  status: string;
  data: { value: number }[];
}

function generateECGData(): HeartbeatData {
  // First hardcoded ECG-like dataset
  const data1 = [
    { value: 50 },
    { value: 50 },
    { value: 50 },
    { value: 50 },
    { value: 40 },
    { value: 100 },
    { value: 0 },
    { value: 50 },
    { value: 50 },
    { value: 50 },
    { value: 40 },
    { value: 80 },
    { value: 20 },
    { value: 50 },
    { value: 50 },
    { value: 50 },
  ];

  // Second hardcoded ECG-like dataset with slight modifications
  const data2 = [
    { value: 50 },
    { value: 50 },
    { value: 45 },
    { value: 85 },
    { value: 25 },
    { value: 50 },
    { value: 50 },
    { value: 50 },
    { value: 50 },
    { value: 50 },
    { value: 45 },
    { value: 95 },
    { value: 5 },
    { value: 50 },
    { value: 50 },
    { value: 50 },
  ];

  // Randomly select one of the datasets
  const randomIndex = Math.random() < 0.5 ? 0 : 1; // 50% chance for either dataset
  const data = randomIndex === 0 ? data1 : data2;

  // Hardcoded current BPM (for consistency)
  const currentBpm = 76;

  return {
    currentBpm,
    unit: 'bpm',
    status: 'Before workout',
    data,
  };
}

export async function GET() {
  try {
    const data = generateECGData();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store', // Prevent caching for fresh data
      },
    });
  } catch (error) {
    console.error('Error generating heartbeat data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
