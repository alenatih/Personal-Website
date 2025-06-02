// The previous method to work with React Router
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

// New method to work with React Router
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from "react-router-dom"

import { ROUTE } from "./constants.ts"

// pages
import Home from "./components/Home.tsx"
import AboutMe from "./components/AboutMe.tsx"
import Portfolio, { projectsLoader } from "./components/portfolio/Portfolio.tsx"
import Project, { projectInfoLoader } from "./components/portfolio/Project.tsx"
import Skills from "./components/Skills.tsx"
import Resources from "./components/Resources.tsx"
import Blog, { blogPostsLoader } from "./components/blog/Blog.tsx"
import BlogPostOneYear from "./components/blog/BlogPostOneYear.tsx"
import BlogPost, { blogPostInfoLoader } from "./components/blog/BlogPost.tsx"
import Contact, { contactAction } from "./components/Contact.tsx"
import NotFound from "./components/NotFound.tsx"
import ProjectsError from "./components/portfolio/ProjectsError.tsx"
import BlogError from "./components/blog/BlogError.tsx"
import Footer from "./components/Footer.tsx"

// layouts
import RootLayout from "./layouts/RootLayout.tsx"
import PortfolioLayout from "./layouts/PortfolioLayout.tsx"
import BlogLayout from "./layouts/BlogLayout.tsx"

import { Analytics } from "@vercel/analytics/react"
import "./App.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<RootLayout />} >
    //   <Route index element={<Home />} />
    //   <Route path="/aboutme" element={<AboutMe />} />
    //   <Route path="/portfolio" element={<PortfolioLayout />} errorElement={<ProjectsError />}>
    //     <Route
    //       index
    //       element={<Portfolio />}
    //       loader={projectsLoader}
    //      />
    //     <Route
    //       path=":slugId"
    //       element={<Project />}
    //       loader={projectInfoLoader}
    //     />
    //   </Route>
    // <Route path="/skills" element={<Skills />} />
    // <Route path="/blog" element={<BlogLayout />} errorElement={<BlogError />}>
    //     <Route
    //     index
    //     element={<Blog />}
    //     loader={blogPostsLoader}
    //     />
    //   <Route
    //     path=":slugId"
    //     element={<BlogPost />}
    //     loader={blogPostInfoLoader}
    //     />
    //   <Route
    //     path="blog-post-one-year"
    //     element={<BlogPostOneYear />}
    //    />
    // </Route>
    // <Route path="/resources" element={<Resources />} />
    // <Route path="/contact" element={<Contact />} action={contactAction} />

    //   <Route path="*" element={<NotFound />} />
    // </Route>

    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path={ROUTE.aboutMe} element={<AboutMe />} />
      <Route path={ROUTE.portfolio} element={<PortfolioLayout />} errorElement={<ProjectsError />}>
        <Route
          index
          element={<Portfolio />}
          loader={projectsLoader} />
        <Route
          path=":slugId"
          element={<Project />}
          loader={projectInfoLoader}
        />
      </Route>
      <Route path={ROUTE.skills} element={<Skills />} />
      <Route path={ROUTE.blog} element={<BlogLayout />} errorElement={<BlogError />}>
        <Route
          index
          element={<Blog />}
          loader={blogPostsLoader}
          />
        <Route
          path=":slugId"
          element={<BlogPost />}
          loader={blogPostInfoLoader}
          />
        <Route
          path="blog-post-one-year"
          element={<BlogPostOneYear />}
        />
      </Route>
      <Route path={ROUTE.resources} element={<Resources />} />
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
        <Analytics />
      </div>
  )
}

export default App
