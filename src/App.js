import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./pages/Auth";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <header><NavBar /></header>
      <main className="App-main">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </>
  );
}

export default App;
