import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {

 try {
  const { no_id, nama, jabatan, no_mesin, grub, status } = await req.json();

 
  // Cek apakah user sudah ada
  const existingUser = await prisma.dbkaryawan.findUnique({
    where: { no_id },
  });

  if (existingUser) {
    return NextResponse.json({ error: 'no id already in use' }, { status: 400 });
  }

  // Simpan user baru
  const user = await prisma.dbkaryawan.create({
    data: {
        no_id, nama, jabatan, no_mesin, grub, status
      
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



export async function GET() {
  try {
    const karyawan = await prisma.dbkaryawan.findMany();
    return Response.json(karyawan);
  } catch (error) {
    return Response.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}


