import { IconCoin, IconList, IconPlusEqual } from "@tabler/icons-react";
import Card from "./Card";
import Table from "./Table";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export interface Order {
  _id: string;
  customer: {
    name: string;
    doc: string;
    email: string;
    phone: string;
  };
  payment: {
    amount: number;
    status: string;
    method: string;
  };
  createdAt: string;
}

interface DashboardData {
  orders_total: number;
  orders_count: number;
  sales_total: number;
  sales_count: number;
  average_ticket: number;
  orders: Order[];
}

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [, setError] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    // Busca os dados do dashboard
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get<DashboardData>("/api/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error || "Erro ao carregar dados.");
        } else {
          setError("Erro ao carregar dados.");
        }
        console.error("Erro no dashboard:", err);
      }
    };

    fetchDashboardData();
  }, [router]);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="h-full w-full mb-4">
      <div className="mt-6 ml-10 mb-8 font-normal text-[#59666F]">
        Resumo dos pedidos
      </div>
      <div className="flex justify-between">
        <Card
          className="ml-10"
          icon={<IconList stroke={1} color="#E54594" />}
          iconBg="bg-[#F4C8E1]"
          orders={data.orders_count}
          title="Pedidos"
          value={data.orders_total.toFixed(2)}
        />
        <Card
          className=""
          icon={<IconCoin stroke={1} color="#07C693" />}
          iconBg="bg-[#B6EEDD]"
          sales={data.sales_count}
          title="Vendas"
          value={data.sales_total.toFixed(2)}
        />
        <Card
          className="mr-20"
          icon={<IconPlusEqual stroke={1} color="#3CB0D9" />}
          iconBg="bg-[#C3E7F3]"
          title="Ticket médio"
          value={data.average_ticket.toFixed(2)}
        />
      </div>
      <div className="flex justify-center mt-14 mx-10">
        <Table orders={data.orders} />
      </div>
    </div>
  );
}
