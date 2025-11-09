import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/utils/hash';

export async function POST(req: Request) {

 try {
  const { email, password, name } = await req.json();

  
  // Cek apakah user sudah ada
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
  }







  // Hash password
  const hashedPassword = await hashPassword(password);

  // Simpan user baru
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
return NextResponse.json({ success: true, message: "Registrasi berhasil" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Terjadi kesalahan" },
      { status: 400 }
    );
  }
}
  

