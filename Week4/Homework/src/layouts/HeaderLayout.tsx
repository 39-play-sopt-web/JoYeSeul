import Header from "@/components/header/Header";
import { Outlet } from "react-router";

export default function HeaderLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
