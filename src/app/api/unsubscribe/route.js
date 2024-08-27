import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { email } = await request.json();

    if (!email) {
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
        const checkEmail = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: 'Sheet1!B:B',
        });

        var counter = 1;
        for (const row of checkEmail.data.values) {
          if (row[0] === email) {
            const response = await sheets.spreadsheets.values.clear({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: `Sheet1!A${counter}:B${counter}`,
            });
            if (response.status == '200') {
                return NextResponse.json({ message: 'Successfully unsubscribed!' });
            }
          }
          counter += 1;
        }
        return NextResponse.json({ message: 'Failed to unsubscribed from the mailing list. Is the email correct?' }, { status: 500 });
    }

        catch (error) {
            console.error('Error adding email to Google Sheet:', error);
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
        }
}
