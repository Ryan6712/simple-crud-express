/*
  Warnings:

  - Added the required column `updatedAt` to the `Absen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updaetedAt` to the `Kelas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `absen` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `kelas` ADD COLUMN `updaetedAt` DATETIME(3) NOT NULL;
