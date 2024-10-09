import { NextRequest, NextResponse } from 'next/server';
import prisma from 'src/lib/prisma';


export async function GET() {
  try {
    const drugs = await prisma.drug.findMany();
    NextResponse.json({
          data:drugs,
        }),{status:200};
  } catch (error:any) {
    console.log(error)
    return NextResponse.json({message:error.message}),{status:500}
  }
   
}


export  async function POST(req: NextRequest) {
    const { name, description, quantity, price, organisationId, userId } = await req.json();

    try {
      const drug = await prisma.drug.create({
        data: {
          name,
          description,
          quantity,
          price,
          organisation: { connect: { id: organisationId } }, 
          User: { connect: { id: userId } },
        },
      });
      NextResponse.json({
        data:drug,
      }),{status:201};
    } catch (error:any) {
      return NextResponse.json({message:error.message}),{status:500}
    }
}



