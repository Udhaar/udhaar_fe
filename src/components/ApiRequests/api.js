import { FireRequest } from "./FireRequest";

export const signin = (body, pathParam) => {
  return FireRequest("POST", `/user/token/`, body, true, pathParam, false);
};

export const signup = (body, pathParam) => {
  return FireRequest("POST", `/user/create/`, body, true, pathParam, false);
};

export const peopleList = () => {
  return FireRequest("GET", `/balance/`, {}, false, {}, true);
};

// export const transactionList = (pathParam) => {
//   return FireRequest("GET", "/transaction/", {}, false, pathParam, true);
// }
