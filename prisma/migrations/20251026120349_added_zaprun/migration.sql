-- CreateTable
CREATE TABLE "Zaprun" (
    "id" TEXT NOT NULL,
    "zapid" TEXT NOT NULL,

    CONSTRAINT "Zaprun_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Zaprun" ADD CONSTRAINT "Zaprun_zapid_fkey" FOREIGN KEY ("zapid") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
