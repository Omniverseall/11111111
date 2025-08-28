import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, tariff } = body;

    if (!name || !phone) {
      return NextResponse.json({ message: 'Name and phone are required' }, { status: 400 });
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Telegram Bot Token or Chat ID is not configured in .env.local");
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    const message = `Новая заявка с сайта EdoLine:\nИмя: ${name}\nТелефон: ${phone}${tariff ? `\nТариф: ${tariff}` : ''}`;

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } else {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json({ message: 'Failed to send message via Telegram' }, { status: response.status });
    }
  } catch (error) {
    console.error('Failed to process contact request:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
