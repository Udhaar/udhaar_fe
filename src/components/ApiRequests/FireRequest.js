import { toast } from "react-toastify";
const baseUrl = "http://localhost:8000/api";

export const FireRequest = async (method, path, body, pathParam) => {
  const response = fetch(baseUrl + path, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      const data = response.json();
      return Promise.all([response, data]);
    })
    .then((res) => {
      if (res[0].status === 401) toast.error("Unauthorized access denied");
      else if (res[0].status === 405) toast.error("Permission denied");
      else if (res[0].status >= 400) {
        for (var k in res[1]) {
          toast.error(res[1][k][0]);
        }
      }

      return res;
    })
    .catch((err) => toast.error("Something went wrong"));
  return response;
};
