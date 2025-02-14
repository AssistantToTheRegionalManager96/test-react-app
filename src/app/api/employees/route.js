import { NextResponse } from "next/server";
import { promises as fs } from 'fs';


// To handle a GET request to /api
export async function GET(request) {

    const file = await fs.readFile(process.cwd() + '/data/employees.json', 'utf8');
    const employeeArray = JSON.parse(file);

    return NextResponse.json(employeeArray, { status: 200 });
  }