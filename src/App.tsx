// import React, { useState } from "react"
// import { Routes, Route } from "react-router-dom"
// import {Routes, Route, Navigate, useLocation} from "react-router-dom"

// import {
//   createBrowserRouter, 
//   createRoutesFromElements,
//   Route, 
//   RouterProvider
// } from "react-router-dom"

import Header from "./components/Header.tsx"
import AboutMe from "./components/AboutMe.tsx"
import Portfolio from "./components/Portfolio.tsx"
import Skills from "./components/Skills.tsx"
import Footer from "./components/Footer.tsx"
// import { ROUTE } from "./components/constants.ts"
import "./App.css"

function App() {
  return (
    <div className="app-container">
      {/* Tailwind CSS classes: flex flex-col text-gray-900 bg-blue-400 font-sans h-screen w-screen p-10 */}
      <Header />
      <AboutMe />
      <Portfolio />
      <Skills />

      {/* <Routes>
        <Route path={ROUTE.aboutMe} element={<AboutMe />} />
        <Route path={ROUTE.portfolio} element={<Portfolio />} />
        <Route path={ROUTE.skills} element={<Skills />} />
      </Routes> */}

      <Footer />
    </div>
  )
}

export default App
