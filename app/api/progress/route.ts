import { NextResponse } from 'next/server';

interface ProgressData {
  total: number;
  completed: number;
}

export async function GET() {
  try {
    // Randomly generate values for demonstration
    const total = Math.floor(Math.random() * 20) + 1; // Random total between 1 and 20 km
    const completed = parseFloat((Math.random() * total).toFixed(1)); // Random completed distance (up to total)

    const progressData: ProgressData = {
      total,
      completed,
    };

    return NextResponse.json(progressData, {
      headers: {
        'Cache-Control': 'no-store', // Prevent caching for fresh data
      },
    });
  } catch (error) {
    console.error('Error generating progress data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
