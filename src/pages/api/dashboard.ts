import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface DashboardData {
  orders_total: number;
  orders_count: number;
  sales_total: number;
  sales_count: number;
  average_ticket: number;
  orders: React.ReactInstance[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  try {
    const response = await axios.get<DashboardData>(
      "http://localhost:3333/proof/dashboard",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro na API do dashboard:", error);

    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error:
          error.response?.data?.message || "Erro ao buscar dados do dashboard",
      });
    } else {
      res.status(500).json({ error: "Erro ao buscar dados do dashboard" });
    }
  }
}
