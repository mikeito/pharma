import { NextRequest, NextResponse } from 'next/server';
import prisma from 'src/lib/prisma';

export  async function GET(req: NextRequest) { 
    try {
      const reservations = await prisma.reservation.findMany({
        include: {
          drugs: {
            include: {
              drug: true, 
            },
          },
        },
      });
      NextResponse.json({
        data:reservations,
      }),{status:200};
    } catch (error:any) {
        return NextResponse.json({message:error.message}),{status:500}

    }
}

export async function POST(req: NextRequest) {
    const { quantity, date, code, drugIds } = await req.json();

    try {
      const reservation = await prisma.reservation.create({
        data: {
          quantity,
          date: new Date(date),
          code,
          drugs: {
            create: drugIds.map((drugId: number) => ({
              drug: { connect: { id: drugId } },
              assignedBy: 'admin',
            })),
          },
        },
      });
      NextResponse.json({
        data:reservation,
      }),{status:201};
    } catch (error:any) {
        return NextResponse.json({message:error.message}),{status:500}
    }
  
}

