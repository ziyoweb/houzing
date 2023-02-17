import { message } from "antd";

export const useRequest = () => {
  const { REACT_APP_BASE_URL } = process.env;

  const warning = () => {
    message.success("Warning Email or Password");
  };

  const request = async ({
    me,
    url,
    headers = {},
    body,
    token,
    method = "GET",
  }) => {
    // headers["Content-Type"] = "aplication/json";
    if (token)
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    const options = {
      method,
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      let res = await fetch(
        `${
          me ? "https://houzing-app.herokuapp.com/api" : REACT_APP_BASE_URL
        }${url}`,
        options
      ).then((res) => res.json());

      return res;
    } catch (err) {
      warning(err);
      return err;
    }
  };

  return request;
};

export default useRequest;
