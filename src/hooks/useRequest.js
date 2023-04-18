export const useRequest = () => {
  const { REACT_APP_BASE_URL } = process.env;

  const request = async ({
    me,
    url,
    headers = {},
    body,
    token,
    method = "GET",
  }) => {
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
          me
            ? "https://houzing-app.herokuapp.com/api"
            : "http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081"
        }${url}`,
        options
      ).then((res) => res.json());
      return res;
    } catch (err) {
      return err;
    }
  };

  return request;
};

export default useRequest;
