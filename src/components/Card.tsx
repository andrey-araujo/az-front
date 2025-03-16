import React from "react";

interface CardProps {
  icon?: React.ReactElement;
  title: string;
  className?: string;
  value?: string;
  orders?: number;
  sales?: number;
  iconBg?: string;
}

export default function Card(props: CardProps) {
  return (
    <div
      className={`card flex flex-col p-6 bg-white text-[#59666F] rounded-md shadow-md
         ${props.className ?? ""}`}
    >
      <div
        className={`flex justify-center items-center rounded-full h-12 w-12 mb-6 ${props.iconBg}`}
      >
        {props.icon}
      </div>
      <div className="font-normal flex gap-1">
        <div>{props.orders || props.sales}</div>
        <div>{props.title}</div>
      </div>
      <div className="font-bold">R$ {props.value}</div>
    </div>
  );
}
