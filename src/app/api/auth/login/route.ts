
import prisma from 'src/lib/prisma';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { lucia } from 'src/auth';
import { cookies } from 'next/headers';

export default async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({
       error: 'Email and password are required'         
     }),{status:400};
  }

  try {
    const existingUser = await prisma.user.findFirst({
        where: {
          email: {
            equals: email,
            mode: "insensitive",
          },
        },
      });    
      if (!existingUser || !existingUser.passwordHash) {
        return NextResponse.json({
            error: 'Incorect email or password '         
          }),{status:404};
      }

    //   const session = await lucia.createSession(existingUser.id, {});
    //   const sessionCookie = lucia.createSessionCookie(session.id);
    //   cookies().set(
    //     sessionCookie.name,
    //     sessionCookie.value,
    //     sessionCookie.attributes,
    //   );
    return NextResponse.json({
        existingUser,
         message: 'Login successful',
     }),{status:201};
  } catch (error:any) {
    return NextResponse.json({message:error.message}),{status:500}
  }
}
