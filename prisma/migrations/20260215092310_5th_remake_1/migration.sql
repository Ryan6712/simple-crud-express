/*
  Warnings:

  - You are about to alter the column `status` on the `absen` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.
  - You are about to drop the column `updaetedAt` on the `kelas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `absen` MODIFY `date` DATE NOT NULL,
    MODIFY `status` ENUM('HADIR', 'IZIN', 'ALPA') NOT NULL DEFAULT 'ALPA';

-- AlterTable
ALTER TABLE `kelas` DROP COLUMN `updaetedAt`,
    ADD COLUMN `updatedAt` DATETIME(3) NULL;

-- CreateIndex
CREATE INDEX `Absen_deletedAt_date_idx` ON `Absen`(`deletedAt`, `date`);

-- CreateIndex
CREATE INDEX `Kelas_deletedAt_idx` ON `Kelas`(`deletedAt`);

-- CreateIndex
CREATE INDEX `Mahasiswa_deletedAt_idx` ON `Mahasiswa`(`deletedAt`);
