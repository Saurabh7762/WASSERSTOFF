import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Style.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import OverView from "./Components/Overview/OverView";
import Dashboard from "./Components/Dashbord/Dashboard";
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<OverView />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
