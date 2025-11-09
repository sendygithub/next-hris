import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req:any) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
      return Response.json({ error: "Masukkan kata pencarian" }, { status: 400 });
    }

    const karyawan = await prisma.dbkaryawan.findMany({
      where: {
        OR: [
          { id: isNaN(Number(query)) ? undefined : Number(query) },
          { nama: { contains: query, mode: "insensitive" } },
          { jabatan: { contains: query, mode: "insensitive" } },
          { grub: { contains: query, mode: "insensitive" } },
          { status: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: { id: "desc" },
    });

    if (karyawan.length === 0) {
      return Response.json({ message: "Data tidak ditemukan" }, { status: 404 });
    }

    return Response.json(karyawan, { status: 200 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
