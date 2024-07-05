// import React, { useState } from "react"
import {Routes, Route} from "react-router-dom"
// import {Routes, Route, Navigate, useLocation} from "react-router-dom"
import Header from "./components/Header.tsx"
import AboutMe from "./components/AboutMe.tsx"
import Portfolio from "./components/Portfolio.tsx"
import Skills from "./components/Skills.tsx"
import Footer from "./components/Footer.tsx"
import "./App.css"

function App() {

  const ROUTE = {
    aboutMe: "./components/AboutMe",
    portfolio: "./components/Portfolio",
    skills: "./components/Skills",
  }

  return (
    <div className="app-container">
      <Header />
      {/* flex flex-col text-gray-900 bg-blue-400 font-sans h-screen w-screen p-10 */}
      <Routes>
        <Route path={ROUTE.aboutMe} element={<AboutMe />} />
        <Route path={ROUTE.portfolio} element={<Portfolio />} />
        <Route path={ROUTE.skills} element={<Skills />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
