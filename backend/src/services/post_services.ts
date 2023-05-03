import {
  IPostMessage,
  IPostMessageDocument,
  PostMessageModel,
} from "../models/post_message_models";

export const getPosts = async (): Promise<IPostMessageDocument[]> => {
  try {
    const postMessages = await PostMessageModel.find();
    return postMessages;
  } catch (error) {
    throw new Error(`Could not get posts ${error}`);
  }
};

export const createPost = async (
  post: IPostMessage
): Promise<IPostMessageDocument> => {
  try {
    const newPost: IPostMessageDocument = new PostMessageModel(post);
    await newPost.save();
    return newPost;
  } catch (error) {
    throw new Error(`Could not create post ${error}`);
  }
};
