import { Typography, Card } from "@material-tailwind/react";
import Navbar from "./components/navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer";
import AvaibleCars from "./pages/avaible";
import Deal from "./pages/deal";
// i love kanye west
export default function App() {
  return <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/avaible-cars" element={<AvaibleCars />} />
    <Route path="/deal/:id" element={<Deal />} />
  </Routes>
  <Footer />

  </>;
}
