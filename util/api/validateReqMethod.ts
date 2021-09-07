import { NextApiResponse } from "next";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
const errorBody = { error: "unsupported method" };

const validateReqMethod = (allowedMethods: Method[], method?: string, res?: NextApiResponse) => {
  if (!method || !allowedMethods.includes(method as Method)) {
    if (res) {
      res.status(400).json(errorBody);
    }

    return false;
  }

  return true;
};

export default validateReqMethod;
