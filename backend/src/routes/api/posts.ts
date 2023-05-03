import { Router } from "express";
import { createPosts, getPosts } from "../../controllers/posts_controllers";

const postRouter: Router = Router();

postRouter.get("/", getPosts);
postRouter.post("/", createPosts);

export default postRouter;
