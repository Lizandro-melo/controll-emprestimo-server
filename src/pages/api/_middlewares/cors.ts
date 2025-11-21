import type { NextApiRequest, NextApiResponse } from "next";

export function cors(
  req: NextApiRequest,
  res: NextApiResponse,
  method: "POST" | "GET" | "PUT"
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return true;
  }

  if (req.method !== method) {
    res.status(405).end();
    return false;
  }

  return false;
}
