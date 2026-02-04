import { PrismaClient as AuthClient } from "@/../prisma/generated/auth";
import { PrismaClient as LogicClient } from "@/../prisma/generated/logic";
import { PrismaPg } from "@prisma/adapter-pg";

const adapterAuth = new PrismaPg({
  connectionString: process.env.DATABASE_URL_AUTH!,
});
const adapterLogic = new PrismaPg({
  connectionString: process.env.DATABASE_URL_LOGIC!,
});

export const Prisma_auth = new AuthClient({ adapter: adapterAuth });
export const Prisma_logic = new LogicClient({ adapter: adapterLogic });
