// import React, { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import Header from "./components/Header.tsx"
import AboutMe from "./components/AboutMe.tsx"
import Portfolio from "./components/Portfolio.tsx"
import Skills from "./components/Skills.tsx"
import Footer from "./components/Footer.tsx"
import "./App.css"

function App() {
  return (
    <div className="app-container bg-blue-400">
      <Header />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
