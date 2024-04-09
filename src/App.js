import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Shows from "./routes/Shows";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Shows />} path="/shows" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </div>
  );
}
