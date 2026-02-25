/*
  Warnings:

  - You are about to alter the column `status` on the `absen` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to drop the column `status` on the `mahasiswa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `absen` ADD COLUMN `deletedAt` DATETIME(3) NULL,
    MODIFY `status` ENUM('hadir', 'izin', 'alpa') NOT NULL DEFAULT 'alpa';

-- AlterTable
ALTER TABLE `kelas` ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `mahasiswa` DROP COLUMN `status`,
    ADD COLUMN `deletedAt` DATETIME(3) NULL;
