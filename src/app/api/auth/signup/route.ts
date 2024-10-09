import prisma from 'src/lib/prisma';
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server';
import { generateIdFromEntropySize } from 'lucia';


export default async function POST(req: NextRequest) {

  const { username, email, password, phoneNumber } = await req.json();

  const userId = generateIdFromEntropySize(10);
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const existingUsername = await prisma.user.findFirst({
        where: {
          username: {
            equals: username,
            mode: "insensitive",
          },
        },
      });
      if (existingUsername) {
        return NextResponse.json({
            error: 'User already exists'
         }),{status:409};
      }

      
    const existingEmail = await prisma.user.findFirst({
        where: {
          email: {
            equals: email,
            mode: "insensitive",
          },
        },
      });
  
      if (existingEmail) {
        return NextResponse.json({
            error: 'User already exists'
         }),{status:409};
      }
   
    const user = await prisma.user.create({
      data: {
        id: userId,
        username,
        displayName: username,
        phoneNumber,
        email,
        passwordHash,
        role: "USER"
      },
    });
  
    return NextResponse.json({
        user,
         message: 'User created',
     }),{status:201};
  } catch (error:any) {
    return NextResponse.json({message:error.message}),{status:500}
  }
}
