import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import validateReqMethod from "../../../util/api/validateReqMethod";

const UserEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!validateReqMethod(["GET", "PUT"], req.method, res)) {
    return;
  }

  const id = Number(req.query.id);
  const prisma = new PrismaClient();
  try {
    if (req.method === "GET") {
      const data = await prisma.user.findUnique({ where: { id } });
      return data
        ? res.status(200).json(data)
        : res.status(404).json({ error: "NOT_FOUND" });
    }

    if (req.method === "PUT") {
      const data = await prisma.user.update({ where: { id }, data: req.body });
      return data
        ? res.status(200).json(data)
        : res.status(404).json({ error: "NOT_FOUND" });
    }
  } catch (e) {
    console.error("User API: failed to fetch", e);
    return res.status(500).json({ error: "failed to fetch" });
  } finally {
    await prisma.$disconnect();
  }
};

export default UserEndpoint;
