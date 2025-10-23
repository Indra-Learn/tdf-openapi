import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Sample data - replace with your actual data source
  const data = [
    { id: 1, name: 'Item 1', category: 'A', value: 100 },
    // ... more items
  ];

  return NextResponse.json(data);
}