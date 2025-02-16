import { NextResponse } from "next/server";
import { promises as fs } from 'fs';


// To handle a GET request to /api
export async function GET(request) {
    const file = await fs.readFile(process.cwd() + '/data/countries.json', 'utf8');
    const countriesArray = JSON.parse(file);

    return NextResponse.json(countriesArray, { status: 200 });
  }