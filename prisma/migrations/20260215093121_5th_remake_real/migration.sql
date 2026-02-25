/*
  Warnings:

  - Made the column `updatedAt` on table `kelas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `kelas` MODIFY `updatedAt` DATETIME(3) NOT NULL;
