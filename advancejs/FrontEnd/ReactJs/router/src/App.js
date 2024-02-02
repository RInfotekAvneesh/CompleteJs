import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import Github from "./components/Github";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/:Id" element={<User />} />
            <Route path="github" element={<Github />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
