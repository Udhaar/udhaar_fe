import { toast } from "react-toastify";
const baseUrl = "https://udhaar-staging.herokuapp.com/api";

export const FireRequest = async (
  method,
  path,
  body,
  bodyRequired,
  pathParam,
  authenticationRequired
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  if (authenticationRequired)
    headers.append("Authorization", localStorage.getItem("access_token"));

  const options = {
    method: method,
    headers: headers,
  };

  if (bodyRequired) options["body"] = JSON.stringify(body);

  const response = fetch(baseUrl + path, options)
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
