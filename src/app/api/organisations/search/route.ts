import { NextRequest, NextResponse } from 'next/server';
import prisma from 'src/lib/prisma';

export async function POST(req: NextRequest) {
  const { type, term } = await req.json();
  console.log("here api")
  try {
    const results = await prisma.organisation.findMany({
      where: {
        type: type,
        address: {
          contains: term, // Adjust based on your search requirements
        }
      }
    });

    return NextResponse.json({
      results,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

