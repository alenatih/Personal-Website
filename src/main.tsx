import React from "react"
import ReactDOM from "react-dom/client"
// import { HashRouter as Router } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const rootElement = document.getElementById("root")
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/* <Router> */}
        <App />
      {/* </Router> */}
    </React.StrictMode>,
  )
} else {
  console.error("Element with ID 'root' not found")
}

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App />)
