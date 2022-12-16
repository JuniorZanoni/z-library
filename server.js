import app from "./src/app.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));
