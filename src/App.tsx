// The previous method to work with React Router
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

// New method to work with React Router
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from "react-router-dom"

// pages
import Home from "./components/Home.tsx"
import AboutMe from "./components/AboutMe.tsx"
// import Header from "./components/Header.tsx"
import Portfolio, { projectsLoader } from "./components/portfolio/Portfolio.tsx"
import ProjectOne from "./components/portfolio/ProjectOne.tsx"
import ProjectTwo from "./components/portfolio/ProjectTwo.tsx"
import Project, { projectInfoLoader } from "./components/portfolio/Project.tsx"
import Skills from "./components/Skills.tsx"
import Blog from "./components/Blog.tsx"
import Contact, { contactAction } from "./components/Contact.tsx"
import NotFound from "./components/NotFound.tsx"
import ProjectsError from "./components/portfolio/ProjectsError.tsx"

// layouts
import RootLayout from "./layouts/RootLayout.tsx"
import PortfolioLayout from "./layouts/PortfolioLayout.tsx"

import Footer from "./components/Footer.tsx"

import { ROUTE } from "./components/constants.ts"

import "./App.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<RootLayout />} >
    //   <Route index element={<Home />} />
    //   <Route path="/aboutme" element={<AboutMe />} />
    //   <Route path="/portfolio" element={<PortfolioLayout />} errorElement={<ProjectsError />}>
    //     <Route path="projectone" element={<ProjectOne />} />
    //     <Route path="projecttwo" element={<ProjectTwo />} />
    //     <Route
    //       index
    //       element={<Portfolio />}
    //       loader={projectsLoader} />
    //     <Route
    //       path=":id"
    //       element={<Project />}
    //       loader={projectInfoLoader}
    //     />
    //   </Route>
    //   <Route path="/skills" element={<Skills />} />
      // <Route path={ROUTE.blog} element={<Blog />} />
    // <Route path={ROUTE.contact} element={<Contact />} action={contactAction} />

    //   <Route path="*" element={<NotFound />} />
    // </Route>

    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path={ROUTE.aboutMe} element={<AboutMe />} />
      <Route path={ROUTE.portfolio} element={<PortfolioLayout />} errorElement={<ProjectsError />}>
        <Route path="projectone" element={<ProjectOne />} />
        <Route path="projecttwo" element={<ProjectTwo />} />
        <Route
          index
          element={<Portfolio />}
          loader={projectsLoader} />
        <Route
          path=":id"
          element={<Project />}
          loader={projectInfoLoader}
        />
      </Route>
      <Route path={ROUTE.skills} element={<Skills />} />
      <Route path={ROUTE.blog} element={<Blog />} />
      <Route path={ROUTE.contact} element={<Contact />} action={contactAction} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
      <div className="app-container">
        {/* Tailwind CSS classes: flex flex-col text-gray-900 bg-blue-400 font-sans h-screen w-screen p-10 */}

        <RouterProvider router={router}/>

        <Footer />
      </div>
  )
}

export default App
