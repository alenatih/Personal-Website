import React, { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import Header from "./components/Header.jsx"
import MainSection from "./components/MainSection.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"

function App() {

  return (
    <div className="app">
      <Header />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App
