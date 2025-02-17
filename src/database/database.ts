import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const conDataBase = async (): Promise<void> => {
	await prisma.functionaries.findMany();
};

conDataBase()
	.catch(async (e) => {
		console.log("💥 - Database connection failed ❌");
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
		console.log("🎲🎲 - Database connected with successfully. - ✔️");
	});
