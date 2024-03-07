import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header />
      <main className="grid grow overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
