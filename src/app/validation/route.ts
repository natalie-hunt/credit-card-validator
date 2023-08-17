import { NextResponse } from 'next/server';
import luhn from './luhn';

export async function POST(request: Request) {
	const body = await request.json();
	const cardNumber = body.ccNumber;

	const luhnResult = luhn(cardNumber);

	return NextResponse.json({ valid: luhnResult });
}