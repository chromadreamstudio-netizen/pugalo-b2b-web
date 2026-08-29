import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // الخادم الداخلي هنا يرسل البيانات لـ n8n ولن يحظره المتصفح
    await fetch('http://178.105.30.59:5678/webhook/b0fcb367-0fea-4fdd-8f7e-689a95e07bd9', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}