import express from "express";
import morgan from "morgan";
import path from "path";
import connectDB from "./config/db.conn";
import routes from "./routes";

// Initializations
const app: express.Application = express();
// Settings
app.set("port", process.env.PORT || 3000);
// Middlewares
app.use(morgan("dev"));
app.use(express.json());
// Routes
// Routes
app.use("/api", routes);
// Public
app.use("/uploads", express.static(path.resolve("uploads")));

(async () => {
  try {
    await connectDB();
    app.listen(app.get("port"));
    console.log(`Server runnig http://localhost:${app.get("port")}`);
  } catch (e) {
    console.log(e);
  }
})();
