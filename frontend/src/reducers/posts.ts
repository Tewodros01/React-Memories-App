import { Action } from "../interfaces/action.interfaces";

export default (posts = [], action: Action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
