import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export async function GET() {
  try {
    const version = execSync('git describe --tags --abbrev=0').toString().trim().replace('v', '');
    return NextResponse.json({ version });
  } catch (error) {
    return NextResponse.json({ version: 'unknown' }, { status: 500 });
  }
} 