import { NextResponse } from 'next/server';

interface VelocityData {
  title: string;
  value: string;
  data: { value: number; index: number }[];
}

export async function GET() {
  try {
    // Generate an array of 8 random data points.
    // Each point has a random `value` (between 1 and 100, for example) and an `index`
    const data = Array.from({ length: 8 }, (_, index) => ({
      value: Math.floor(Math.random() * 100) + 1, // Random number from 1 to 100
      index,
    }));

    const velocityData: VelocityData = {
      title: 'Average Speed',
      value: '10 Km', // You can also randomize or compute this value if desired.
      data,
    };

    return NextResponse.json(velocityData, {
      headers: {
        'Cache-Control': 'no-store', // Prevent caching for fresh data
      },
    });
  } catch (error) {
    console.error('Error generating velocity data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
