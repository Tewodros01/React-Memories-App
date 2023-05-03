import { Router } from "express";
import postRouter from "./api/posts";

const routes: Router = Router();

routes.use("/posts", postRouter);

export default routes;
