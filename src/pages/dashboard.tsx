import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function DashboardPage() {
  return (
    <div className="flex bg-white text-black">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-1 justify-center items-center bg-zinc-100">
          <Dashboard />
        </div>
        <Footer />
      </div>
    </div>
  );
}
