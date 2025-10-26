-- CreateTable
CREATE TABLE "Zaprunoutofbox" (
    "id" TEXT NOT NULL,
    "zaprunid" TEXT NOT NULL,

    CONSTRAINT "Zaprunoutofbox_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Zaprunoutofbox" ADD CONSTRAINT "Zaprunoutofbox_zaprunid_fkey" FOREIGN KEY ("zaprunid") REFERENCES "Zaprun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
