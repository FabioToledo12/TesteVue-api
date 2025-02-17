import { PrismaClient } from "@prisma/client";
import type { FunctionariesModel } from "../models/functionaries-model";

const prisma = new PrismaClient();
export const findAllFunctionaries = async (): Promise<FunctionariesModel[]> => {
	const functionaries = await prisma.functionaries.findMany();
	return functionaries.map((functionary) => ({
		...functionary,
		id: functionary.id.toString(),
	}));
};

export const createFunctionary = async (functionary: FunctionariesModel) => {
	const functionaryCreated = await prisma.functionaries.create({
		data: functionary,
	});

	return functionaryCreated;
};

export const searchFunctionary = async (id: string) => {
	const functionarySearch = await prisma.functionaries.findUnique({
		where: { id: id },
	});

	if (!functionarySearch) {
		throw new Error("Functionary not found");
	}

	return functionarySearch;
};

export const updateFunctionary = async (
	id: string,
	functionary: FunctionariesModel,
) => {
	const functionaryUpdated = await prisma.functionaries.update({
		where: {
			id: id,
		},
		data: functionary,
	});
	return `User ${functionaryUpdated.name} and email ${functionaryUpdated.email} is updated with success`;
};

export const deleteFunctionary = async (id: string) => {
	await prisma.functionaries.delete({
		where: {
			id: id,
		},
	});
	return "User is deleted with success";
};
