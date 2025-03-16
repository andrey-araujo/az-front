import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-center items-center h-14">
      <div>
        <Image src={"/infos-az.svg"} alt="infos" width={1000} height={500} />
      </div>
    </div>
  );
}
