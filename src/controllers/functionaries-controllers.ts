import type { Request, Response } from "express";
import {
	createFunctionaryService,
	deleteFunctionaryService,
	getFunctionariesService,
	searchFunctionaryService,
	updateFunctionaryService,
} from "../services/functionaries-service";
import { functionarySchema } from "../validators/functionary-validator";

export const getFunctionariesController = async (_: Request, res: Response) => {
	const dataResp = await getFunctionariesService();
	res.status(200).json(dataResp);
};

export const createFunctionaryController = async (
	req: Request,
	res: Response,
): Promise<void> => {
	try {
		const bodyValue = functionarySchema.parse(req.body);
		const dataResp = await createFunctionaryService(bodyValue);

		res.status(201).send(dataResp);
	} catch (err) {
		if (err instanceof Error) {
			res.status(400).json({ error: err });
		} else {
			res.status(400).json({ error: "An unknown error occurred" });
		}
	}
};

export const getFunctionaryController = async (
	req: Request<{ id: string }>,
	res: Response,
): Promise<void> => {
	try {
		const { id } = req.params;
		const dataResp = await searchFunctionaryService(id);

		res.status(200).json(dataResp);
	} catch (err: unknown) {
		if (err instanceof Error) {
			res.status(400).json({ error: err.message });
		} else {
			res.status(400).json({ error: "An unknown error occurred" });
		}
	}
};

export const updateFunctionaryController = async (
	req: Request<{ id: string }>,
	res: Response,
): Promise<void> => {
	try {
		const id = req.params.id;
		const bodyValue = functionarySchema.parse(req.body);

		const dataResp = await updateFunctionaryService(id, bodyValue);
		res.status(200).send(dataResp);
	} catch (err: unknown) {
		if (err instanceof Error) {
			res.status(400).json({ error: err });
		} else {
			res.status(400).json({ error: "An unknown error occurred" });
		}
	}
};
export const deleteFunctionaryController = async (
	req: Request<{ id: string }>,
	res: Response,
): Promise<void> => {
	const id = req.params.id;
	const dataResp = await deleteFunctionaryService(id);
	res.status(200).send(dataResp);
};
