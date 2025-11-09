import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // pastikan file prisma client kamu sudah ada
import { differenceInCalendarDays } from "date-fns";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { employeeId, startDate, endDate, reason } = body;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDays = differenceInCalendarDays(end, start) + 1;

    if (totalDays <= 0) {
      return NextResponse.json({ error: "Tanggal tidak valid" }, { status: 400 });
    }

    // Hitung total cuti tahun ini
    const yearStart = new Date(new Date().getFullYear(), 0, 1);
    const yearEnd = new Date(new Date().getFullYear(), 11, 31);

    const leaves = await prisma.cuti.findMany  ({
      where: {
        employeeId,
        startDate: { gte: yearStart },
        endDate: { lte: yearEnd },
      },
    });

    const totalUsed = leaves.reduce((sum, cuti) => sum + cuti.totalDays, 0);
    const remaining = 12 - totalUsed;

    if (totalDays > remaining) {
      return NextResponse.json({
        error: `Cuti melebihi jatah. Sisa cuti Anda ${remaining} hari.`,
      }, { status: 400 });
    }

    // Simpan data cuti baru
    const newLeave = await prisma.cuti.create({
      data: {
        employeeId,
        startDate: start,
        endDate: end,
        totalDays,
        reason,
      },
    });

    return NextResponse.json(newLeave);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal menyimpan data cuti" }, { status: 500 });
  }
}
