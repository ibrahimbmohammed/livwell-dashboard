import { NextResponse } from 'next/server';

interface NutritionData {
  iconBgColor: string;
  title: string;
  value: string;
  badgeText: string;
}

export async function GET() {
  try {
    // Function to generate a random number within a range
    const getRandomNumber = (min: number, max: number, precision: number = 0) => {
      const random = Math.random() * (max - min) + min;
      return parseFloat(random.toFixed(precision));
    };

    // Hardcoded titles and icon colors
    const dietData: NutritionData[] = [
      {
        iconBgColor: '#E7DCF480',
        title: 'Protein',
        value: `${getRandomNumber(0, 800)} col`, // Random value between 0 and 800
        badgeText: `${getRandomNumber(0, 10, 1)} kcl`, // Random value between 0 and 10 (1 decimal place)
      },
      {
        iconBgColor: '#ADD1DD80',
        title: 'Carbs',
        value: `${getRandomNumber(0, 800)} col`,
        badgeText: `${getRandomNumber(0, 10, 1)} kcl`,
      },
      {
        iconBgColor: '#FBD7BA80',
        title: 'Fats',
        value: `${getRandomNumber(0, 800)} col`,
        badgeText: `${getRandomNumber(0, 10, 1)} kcl`,
      },
      {
        iconBgColor: '#FFD4D380',
        title: 'Water',
        value: `${getRandomNumber(0, 800)} col`,
        badgeText: `${getRandomNumber(0, 10, 1)} kcl`,
      },
    ];

    return NextResponse.json(dietData, {
      headers: {
        'Cache-Control': 'no-store', // Prevent caching for fresh data
      },
    });
  } catch (error) {
    console.error('Error generating diet data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
