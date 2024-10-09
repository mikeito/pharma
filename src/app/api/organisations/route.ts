import { NextRequest, NextResponse } from 'next/server';
import prisma from 'src/lib/prisma';


export async function GET() {
  try {
    const organisations = await prisma.organisation.findMany();
    NextResponse.json({
          data:organisations,
        }),{status:200};
  } catch (error:any) {
    console.log(error)
    return NextResponse.json({message:error.message}),{status:500}
  }
   
}

export async function POST(req:NextRequest){
  try {
    const { type,name, email, telephone, longitude, latitude, address, openHours, closingHours, userId } = await req.json();

    const newOrganisation = await prisma.organisation.create({
      data: {
        type,
        name,
        email,
        telephone,
        longitude,
        latitude,
        address,
        openHours,
        closingHours,
        userId,
      },
    });
    return NextResponse.json({
          newOrganisation,
        }),{status:200};
  } catch (error:any) {
    return NextResponse.json({message:error.message}),{status:500}
   
  }
}

