
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import prisma  from 'src/lib/prisma';
export default async function GET(req: NextApiRequest) {
  const { id } = req.query;

    try {
      const user = await prisma.user.findUnique({
        where: { id: String(id) },
      });

      if (!user) {
        return NextResponse.json({
             message: 'User not found',
         }),{status:404};
      } else {
        return NextResponse.json({
            user,
             message: 'User returned successfully',
         }),{status:200};
      }
    } catch (error: any) {
        return NextResponse.json({message:error.message}),{status:500}
    }
  
}
