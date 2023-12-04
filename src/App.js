import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import NavbarCom from "./components/NavbarCom";
import FooterCom from "./components/FooterCom";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App bg-slate-100">
      {/* <BrowserRouter> */}
      <HashRouter>
        <NavbarCom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#/about" element={<About />} />
          <Route path="#/contact" element={<Contact />} />
          <Route path="/detail/:dataCategory" element={<Detail />} />
        </Routes>
        <FooterCom />
      </HashRouter>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
