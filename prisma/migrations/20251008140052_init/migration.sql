-- CreateTable
CREATE TABLE "anjing" (
    "nama" TEXT NOT NULL,

    CONSTRAINT "anjing_pkey" PRIMARY KEY ("nama")
);

-- CreateTable
CREATE TABLE "Cuti" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cuti_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cuti" ADD CONSTRAINT "Cuti_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "dbkaryawan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
