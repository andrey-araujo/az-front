import { IconChartBarPopular } from "@tabler/icons-react";
import LogoAz from "./Logo";

export default function SideBar() {
  return (
    <div className="flex flex-col w-64 h-screen items-center">
      <div className="my-7 mx-16">
        <LogoAz />
      </div>
      <div>
        <button className="button w-[218px] flex items-center justify-start">
          <IconChartBarPopular className="mx-3" stroke={1} size={20} />
          Dashboard
        </button>
      </div>
    </div>
  );
}
