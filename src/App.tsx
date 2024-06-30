// import React, { useState } from "react"
import Header from "./components/Header.tsx"
import AboutMe from "./components/AboutMe.tsx"
import Portfolio from "./components/Portfolio.tsx"
import Skills from "./components/Skills.tsx"
import Footer from "./components/Footer.tsx"
import "./App.css"

function App() {
  return (
    <div className="app-container text-gray-900 bg-blue-400 h-screen w-screen p-10">
      <Header />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
