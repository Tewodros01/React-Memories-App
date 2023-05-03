import { Request, Response } from "express";
import * as postService from "../services/post_services";
import { IPostMessage } from "../models/post_message_models";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const allPosts = await postService.getPosts();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ message: `${error}` });
  }
};

export const createPosts = async (req: Request, res: Response) => {
  const post: IPostMessage = {
    title: req.body.title,
    message: req.body.message,
    creator: req.body.create,
    tags: [],
    selectedFile: req.body.selectedFile,
  };
  try {
    const newPost = await postService.createPost(post);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: `${error}` });
  }
};
