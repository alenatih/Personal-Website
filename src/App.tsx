// import React, { useState } from "react"
// import {Routes, Route, Navigate, useLocation} from "react-router-dom"

// The previous method to work with React Router
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

// New method to work with React Router
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from "react-router-dom"

// import Header from "./components/Header.tsx"
// pages
import Home from "./components/Home.tsx"
import AboutMe from "./components/AboutMe.tsx"
import PortfolioLayout from "./components/portfolio/PortfolioLayout.tsx"
import Skills from "./components/Skills.tsx"

// layouts
import RootLayout from "./components/RootLayout.tsx"

import Footer from "./components/Footer.tsx"

import { ROUTE } from "./components/constants.ts"

import "./App.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<RootLayout />} >
    //   <Route index element={<Home />} />
    //   <Route path="/aboutme" element={<AboutMe />} />
    //   <Route path="/portfolio" element={<Portfolio />} />
    //   <Route path="/skills" element={<Skills />} />
    // </Route>

    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path={ROUTE.aboutMe} element={<AboutMe />} />
      <Route path={ROUTE.portfolio} element={<PortfolioLayout />}>
        <Route path="project-one" element={<ProjectOne />} />
        <Route path="project-two" element={<ProjectTwo />} />
      </Route>
      <Route path={ROUTE.skills} element={<Skills />} />
    </Route>
  )
)

function App() {
  return (
      <div className="app-container">
        {/* Tailwind CSS classes: flex flex-col text-gray-900 bg-blue-400 font-sans h-screen w-screen p-10 */}

        {/* <Header /> */}

          <RouterProvider router={router}/>

        <Footer />
      </div>
  )
}

export default App
