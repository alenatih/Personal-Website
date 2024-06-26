import React, { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import Header from "./components/Header.jsx"
import AboutMe from "./components/AboutMe.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <Header />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
