// src/app/api/karyawan/delete/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(req: Request) {
  try {
    const { no_id } = await req.json();

    // validasi jika no_id tidak dikirim
    if (!no_id) {
      return NextResponse.json(
        { message: "no_id wajib dikirim!" },
        { status: 400 }
      );
    }

    // cek apakah data ada
    const existing = await prisma.dbkaryawan.findUnique({
      where: { no_id },
    });

    if (!existing) {
      return NextResponse.json(
        { message: "Data tidak ditemukan!" },
        { status: 404 }
      );
    }

    // hapus data berdasarkan no_id
    await prisma.dbkaryawan.delete({
      where: { no_id },
    });

    return NextResponse.json(
      { message: `Data dengan no_id ${no_id} berhasil dihapus!` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error hapus data:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat menghapus data." },
      { status: 500 }
    );
  }
}
