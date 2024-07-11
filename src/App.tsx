// import React, { useState } from "react"
// import { Routes, Route } from "react-router-dom"
// import {Routes, Route, Navigate, useLocation} from "react-router-dom"

// The previous method to work with React Router
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

// import {
//   createBrowserRouter, 
//   createRoutesFromElements,
//   Route, 
//   RouterProvider
// } from "react-router-dom"

// pages
// import Header from "./components/Header.tsx"
import AboutMe from "./components/AboutMe.tsx"
import Portfolio from "./components/Portfolio.tsx"
import Skills from "./components/Skills.tsx"
import Footer from "./components/Footer.tsx"
// import { ROUTE } from "./components/constants.ts"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Tailwind CSS classes: flex flex-col text-gray-900 bg-blue-400 font-sans h-screen w-screen p-10 */}
        {/* <Header /> */}
        <header>
          <nav>
            <NavLink to="/aboutMe">About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/skills">Skills</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route index path="/aboutMe" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>

        {/* <Routes>
          <Route path={ROUTE.aboutMe} element={<AboutMe />} />
          <Route path={ROUTE.portfolio} element={<Portfolio />} />
          <Route path={ROUTE.skills} element={<Skills />} />
        </Routes> */}

        <Footer />
      </div>
      </BrowserRouter>
  )
}

export default App
