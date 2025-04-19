-- CreateEnum
CREATE TYPE "ResultadoFinal" AS ENUM ('LOCAL', 'VISITA', 'EMPATE');

-- AlterTable
ALTER TABLE "Resultado" ADD COLUMN     "resultadoFinal" "ResultadoFinal" NOT NULL DEFAULT 'EMPATE';
