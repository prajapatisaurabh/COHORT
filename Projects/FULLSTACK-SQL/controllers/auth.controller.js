import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    

  } catch (error) {}
};
