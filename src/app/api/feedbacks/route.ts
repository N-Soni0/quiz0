import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';


export const POST = async (req: Request) => {
	type Body = { sender?: string, content: string }
    const body = await req.json() as Body;

	const feedback = await prisma.feedback.create({
		data: {
			userId: body.sender,
			content: body.content,
		},
	});

    return NextResponse.json(feedback);
};
