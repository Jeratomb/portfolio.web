import logo from './logo.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Footer from './components/Footer/Footer'
import ProjectCard from './components/ProjectCard/ProjectCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Card } from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Projects from './pages/Projects'
import NavBar from './components/NavBar/NavBar'
import Auth from './pages/Auth'


function App() {
   return (
    <div>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path ="/home" element={<Home />} />
        <Route path ="/projects" element={<Projects />} />
        <Route path="/auth" element={<Auth />} />
        <Route path ="*" element={<NotFoundPage />} />
      </Routes>
      </BrowserRouter>

    </div>
);
}

export default App;
