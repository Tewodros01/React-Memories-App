import * as api from "../api";
import { AnyAction, Dispatch } from "redux";

// Action Creatores

export const getPost = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data } = await api.feachPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
