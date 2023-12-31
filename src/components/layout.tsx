import { useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mt-28">{children}</main>
      <Footer />
    </>
  );
}
