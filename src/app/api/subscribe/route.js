import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { firstName, email } = await request.json();

  if (!firstName || !email) {
    return NextResponse.json({ message: 'First name and email are required' }, { status: 400 });
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:B',
      valueInputOption: 'RAW',
      resource: {
        values: [[firstName, email]],
      },
    });
    if (response.status == '200') {
      return NextResponse.json({ message: 'Successfully subscribed!' });
    }
    return NextResponse.json({ message: 'Failed to add email to mailing list' }, { status: 500 });
  } catch (error) {
    console.error('Error adding email to Google Sheet:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
