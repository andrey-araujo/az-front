import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface SessionRequest {
  email: string;
  password: string;
}

interface SessionResponse {
  token: string;
  id: string;
  email: string;
  profile: {
    name: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body as SessionRequest;

      const response = await axios.post<SessionResponse>(
        "http://localhost:3333/proof/session",
        { email, password }
      );

      res.status(200).json(response.data);
    } catch (error) {
      console.error("Erro na API de session:", error);

      if (axios.isAxiosError(error)) {
        res.status(error.response?.status || 500).json({
          error: error.response?.data?.message || "Erro ao fazer login",
        });
      } else {
        res.status(500).json({ error: "Erro ao fazer login" });
      }
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
