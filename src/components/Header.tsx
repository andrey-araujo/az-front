import { IconBell, IconUser } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="flex items-center h-20 justify-end drop-shadow-2xl font-extralight text-[#59666F]">
      <div className="flex items-center mr-10 gap-2">
        <IconBell stroke={1} />
        Avisos
      </div>
      <div className="flex flex-col justify-center mr-5">
        <div className="flex justify-end">Olá,</div>
        <div className="font-bold text-zinc-500">Fulano</div>
      </div>
      <div className="flex justify-center items-center bg-[#FE7C6E] w-10 h-10 rounded-full mr-10">
        <IconUser color="white" stroke={1} size={20} />
      </div>
    </div>
  );
}
