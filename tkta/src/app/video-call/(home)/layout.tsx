import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative">
      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
