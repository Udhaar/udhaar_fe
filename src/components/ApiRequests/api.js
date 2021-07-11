import { FireRequest } from "./FireRequest";

export const signin = (body, pathParam) => {
  return FireRequest("POST", `/user/token/`, body, pathParam);
};

export const signup = (body, pathParam) => {
  return FireRequest("POST", `/user/create/`, body, pathParam);
};
