const { Client } = require('@notionhq/client');
import { NextResponse } from 'next/server';

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

export async function POST(request) {
    try {
        const { databaseId } = await request.json();

        const response = await notion.databases.query({
            database_id: databaseId,
        });

        return NextResponse.json(response, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error querying Notion API:', error);
        return NextResponse.json(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
