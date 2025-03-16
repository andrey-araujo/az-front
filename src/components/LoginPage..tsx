import Image from "next/image";
import LoginFiels from "./LoginFields";
import LogoAz from "./Logo";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-white text-black">
      <div className="h-screen w-1/2">
        <div className="flex items-center flex-col">
          <div className="mt-24">
            <LogoAz />
          </div>
          <div className="mt-8">
            <LoginFiels />
          </div>
        </div>
      </div>
      <div className="h-screen w-1/2 flex justify-center items-center">
        <Image
          className="imagemAz"
          src="/imagem-az.png"
          alt="imagem"
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
}
