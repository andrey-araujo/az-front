import { Order } from "../components/Dashboard"; // Importe a interface Order do Dashboard

interface TableProps {
  orders: Order[];
}

export default function Table({ orders }: TableProps) {
  return (
    <table className="w-full rounded-md overflow-hidden shadow-md">
      <thead className="text-white font-bold h-14">
        <tr>
          <th className="tableHeader1">ID do Pedido</th>
          <th className="tableHeader2">ID na Loja</th>
          <th className="tableHeader1">Criação</th>
          <th className="tableHeader2">Nome do cliente</th>
          <th className="tableHeader1">CPF/CNPJ do cliente</th>
          <th className="tableHeader2">Status do pedido</th>
          <th className="tableHeader1">Status do pagamento</th>
          <th className="tableHeader2">Método de pagamento</th>
          <th className="tableHeader1">Total</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {orders.map((order) => (
          <tr key={order._id}>
            <td className="tableCell1">{order._id}</td>
            <td className="tableCell2">{order._id}</td>{" "}
            <td className="tableCell1">
              {new Date(order.createdAt).toLocaleDateString()}
            </td>
            <td className="tableCell2">{order.customer.name}</td>
            <td className="tableCell1">{order.customer.doc}</td>
            <td className="tableCell2">{order.payment.status}</td>
            <td className="tableCell1">{order.payment.status}</td>
            <td className="tableCell2">{order.payment.method}</td>
            <td className="tableCell1">R$ {order.payment.amount.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
