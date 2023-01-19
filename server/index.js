import express from "express";
import recipesRouter from "./routes/recipesRoutes.js";
import { DBconnect } from "./config/db.js";
import { config } from "./config/index.js";

// init express application
const app = express();
const PORT = config.server.port || 5000;

DBconnect();

// ROUTES
app.use("/api/recipes", recipesRouter);

// listen to the port, to make sure that the app is running
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});