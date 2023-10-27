import { NextResponse, type NextRequest } from "next/server";

const id = "dfgdfg";
const orgId = "eLk7SSltmbQzX5flmU92hBlK2Md2";

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as { prisma?: PrismaClient };

const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export async function GET(request: NextRequest, { params }: any) {
  const patient = await db.client.findUnique({
    where: { orgId, id },
    //
  });

  console.log(patient);

  return NextResponse.json(patient);
}
