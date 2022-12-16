import * as dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
