/*
  Warnings:

  - Changed the type of `operation` on the `Permission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PermissionOperation" AS ENUM ('CREATE', 'READ', 'UPDATE', 'DELETE');

-- AlterTable
ALTER TABLE "Permission" DROP COLUMN "operation",
ADD COLUMN     "operation" "PermissionOperation" NOT NULL;
