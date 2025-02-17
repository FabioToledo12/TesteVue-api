import app from "./app";
import { conDataBase } from "./database/database";

const BASE_URL = process.env.BASE_URL || "http://localhost";
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
	console.log(`🚀🚀 - server is running in ${BASE_URL}:${PORT} - ✔️`);
	conDataBase();
});
