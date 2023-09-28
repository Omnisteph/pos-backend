-- CreateTable
CREATE TABLE "pos" (
    "id" SERIAL NOT NULL,
    "batteryPercentage" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "batteryInfo" TEXT NOT NULL,
    "connectedToInternet" BOOLEAN NOT NULL,
    "canReachInternet" BOOLEAN NOT NULL,
    "typeOfConnection" TEXT NOT NULL,
    "carrierName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pos_pkey" PRIMARY KEY ("id")
);
