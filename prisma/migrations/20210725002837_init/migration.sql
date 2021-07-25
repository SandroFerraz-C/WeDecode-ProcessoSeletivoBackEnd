-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `EnderecoEntrega` VARCHAR(191) NOT NULL,
    `Numero` INTEGER NOT NULL,
    `Municipio` VARCHAR(191) NOT NULL,
    `Referencia` VARCHAR(191) NOT NULL,
    `Telefone` INTEGER NOT NULL,
    `DataEntrega` VARCHAR(191) NOT NULL,
    `ValorCompra` INTEGER NOT NULL,

    UNIQUE INDEX `Cliente.Nome_unique`(`Nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ClienteId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD FOREIGN KEY (`ClienteId`) REFERENCES `Cliente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
