/*
  Warnings:

  - You are about to drop the `cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `image_ibfk_1`;

-- DropTable
DROP TABLE `cliente`;

-- DropTable
DROP TABLE `image`;

-- CreateTable
CREATE TABLE `Films` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Filme` VARCHAR(191) NOT NULL,
    `DataDeLancamento` VARCHAR(191) NOT NULL,
    `Classificacao` VARCHAR(191) NOT NULL,
    `TempoDeFilme` VARCHAR(191) NOT NULL,
    `Diretor` VARCHAR(191) NOT NULL,
    `Orcamento` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Films.Filme_unique`(`Filme`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Espectador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `EspectadorId` INTEGER NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Documento` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Espectador` ADD FOREIGN KEY (`EspectadorId`) REFERENCES `Films`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
