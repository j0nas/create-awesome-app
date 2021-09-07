import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import validateReqMethod from "../../../util/api/validateReqMethod";

const UsersEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!validateReqMethod(["GET", "POST"], req.method, res)) {
    return;
  }

  const prisma = new PrismaClient();
  try {
    if (req.method === "GET") {
      const data = await prisma.user.findMany();
      return data
          ? res.status(200).json(data)
          : res.status(404).json({ error: "NOT_FOUND" });
    }


    if (req.method === "POST") {
      const { email: caseSensitiveEmail, password } = req.body;
      if (!caseSensitiveEmail || !password) {
        return res.status(400).json({ error: "Missing email or password" });
      }

      const email = caseSensitiveEmail.toLowerCase();
      const duplicateEmail = await prisma.user.findUnique({ where: { email } });
      if (duplicateEmail) {
        return res.status(400).json({ error: "User with such email already exists" });
      }

      const passwordHash = await hash(password, 10);
      const user = await prisma.user.create({ data: { email, passwordHash } });

      return res.status(200).json(user);
    }
  } catch (e) {
    console.error(`Data API: failed to fetch: [[${JSON.stringify(e)}]]`);
    return res.status(500).json({ error: "failed to fetch" });
  } finally {
    await prisma.$disconnect();
  }
};

export default UsersEndpoint;
