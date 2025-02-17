import type { Request, Response } from "express";
import type { FunctionariesModel } from "../models/functionaries-model";
import {
	createFunctionaryService,
	deleteFunctionaryService,
	getFunctionariesService,
	updateFunctionaryService,
} from "../services/functionaries-service";

export const getFunctionariesController = async (_: Request, res: Response) => {
	const dataResp = await getFunctionariesService();
	// console.log(dataResp);
	res.status(200).json(dataResp);
};

export const createFunctionaryController = async (
	req: Request,
	res: Response,
): Promise<void> => {
	const bodyValue: FunctionariesModel = req.body;
	const dataResp = await createFunctionaryService(bodyValue);

	res.status(201).send(dataResp);
};

export const updateFunctionaryController = async (
	req: Request<{ id: string }>,
	res: Response,
): Promise<void> => {
	const id = req.params.id;
	const bodyValue: FunctionariesModel = req.body as FunctionariesModel;
	const dataResp = await updateFunctionaryService(id, bodyValue);

	res.status(200).send(dataResp);
};

export const deleteFunctionaryController = async (
	req: Request<{ id: string }>,
	res: Response,
): Promise<void> => {
	const id = req.params.id;
	const dataResp = await deleteFunctionaryService(id);

	res.status(200).send(dataResp);
};
