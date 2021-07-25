/*
  Warnings:

  - Added the required column `Genero` to the `Films` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `films` ADD COLUMN `Genero` VARCHAR(191) NOT NULL;
