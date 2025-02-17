import type { FunctionariesModel } from "../models/functionaries-model";
import * as FunctionariesRepository from "../repository/functionaries-repository";

export const getFunctionariesService = async () => {
	const dataFunctionary = await FunctionariesRepository.findAllFunctionaries();
	return dataFunctionary;
};

export const createFunctionaryService = async (
	functionary: FunctionariesModel,
) => {
	const dataFunctionary =
		await FunctionariesRepository.createFunctionary(functionary);
	return dataFunctionary;
};

export const searchFunctionaryService = async (id: string) => {
	return await FunctionariesRepository.searchFunctionary(id);
};

export const updateFunctionaryService = async (
	id: string,
	functionary: FunctionariesModel,
) => {
	const dataFunctionary = await FunctionariesRepository.updateFunctionary(
		id,
		functionary,
	);
	return dataFunctionary;
};

export const deleteFunctionaryService = async (id: string) => {
	const dataFunctionary = await FunctionariesRepository.deleteFunctionary(id);
	return dataFunctionary;
};
