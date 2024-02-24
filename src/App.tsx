/** @format */

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/sections/Hero";

function App() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header />
      <main className="grid grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
