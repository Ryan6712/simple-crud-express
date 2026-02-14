/*
  Warnings:

  - You are about to alter the column `status` on the `mahasiswa` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `mahasiswa` MODIFY `status` ENUM('hadir', 'izin', 'alpa') NOT NULL DEFAULT 'alpa';
