import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullLayout from './layouts/FullLayout'
import AppLayout from './layouts/AppLayout';
import Inventory from './main_app/Inventory';
import Dashboard from './main_app/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './auth/Login';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<FullLayout children={<Home/>}/>}
          />
          <Route
            path="/about"
            element={<FullLayout children={<About/>}/>}
          />
          <Route
            path="/services"
            element={<FullLayout children={<Services/>}/>}
          />
          <Route
            path="/contact"
            element={<FullLayout children={<Contact/>}/>}
          />
          <Route
            path="/login"
            element={<Login/>}
          />
          <Route
            path="/app/inventory"
            element={<AppLayout children={<Inventory/>}/>}
          />
          <Route
            path={"/app/dashboard"}
            element={<AppLayout children={<Dashboard/>}/>}
          />
          <Route
            path={"/app"}
            element={<AppLayout children={<Dashboard/>}/>}
          />
          {/* <Route
            path="/app/contacts"
            element={<AppLayout children={<Dashboard/>}/>}
          />
          <Route
            path="/app/requests"
            element={<AppLayout children={<Dashboard/>}/>}
          /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
