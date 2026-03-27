import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export default function App() {
    const Location = useLocation();
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-100 h-100 bg-purple-600 blur-[120px] opacity-20 top-25 left-[-20%]" ></div>
      </div>
      <Navbar />

        <AnimatePresence mode="wait">
            <Routes location={Location} key={Location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
            </Routes>
        </AnimatePresence>
    </>
  );
}
