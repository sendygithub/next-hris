import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword } from '@/utils/hash';
import { redirect } from 'next/dist/server/api-utils';

export async function POST(req: Request) {
let body;
try {
    body = await req.json();
} catch (error) {
    return NextResponse.json({ error: 'Invalid or empty JSON body' }, { status: 400 });  
}
  const { email, password } = body || {};
  // 1. Cari user di database
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // 2. Bandingkan password
  const isValid = await comparePassword(password, user.password);

  if (!isValid) {
    return NextResponse.json({ error: 'password salah' }, { status: 401 });
  }

  // 3. (Optional) Simpan session atau JWT
  // (Misalnya buat token dan kirim ke client)

  return NextResponse.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
}
