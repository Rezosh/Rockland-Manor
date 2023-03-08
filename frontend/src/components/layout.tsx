import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <main className='container mx-auto max-w-7xl p-6 lg:px-8'>
        {children}
      </main>
      <Footer />
    </>
  );
}
