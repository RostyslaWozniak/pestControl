import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
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
