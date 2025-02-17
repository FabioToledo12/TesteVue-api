import { Router } from "express";
import {
	createFunctionaryController,
	deleteFunctionaryController,
	getFunctionariesController,
	getFunctionaryController,
	updateFunctionaryController,
} from "../controllers/functionaries-controllers";

const router = Router();

router.get("/api", (req, res) => {
	res.send("Hello World!");
});

router.get("/", getFunctionariesController);
router.post("/", createFunctionaryController);

router.get("/:id", getFunctionaryController);
router.put("/:id", updateFunctionaryController);
router.delete("/:id", deleteFunctionaryController);

export default router;
