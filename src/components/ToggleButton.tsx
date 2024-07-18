import { useState, useEffect } from "react"
import "./ToggleButton.css"

function ToggleButton() {
  // Initialize state based on sessionStorage
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedMode = sessionStorage.getItem("isLightMode")
    return savedMode ? JSON.parse(savedMode) : true // Makes the app light mode by default
  })

  useEffect(() => {
    const root = document.getElementById("root")

    if (root) {
        if (isLightMode) {
            root.classList.add("light-mode")
            root.classList.remove("dark-mode")
          } else {
            root.classList.add("dark-mode")
            root.classList.remove("light-mode")
          }
    }

  }, [isLightMode])

  const toggleMode = () => {
    const newMode = !isLightMode
    setIsLightMode(newMode)
    // console.log("clicked", isLightMode)

    // Save the state to sessionStorage when it changes
    sessionStorage.setItem("isLightMode", JSON.stringify(newMode))
  }

  return (
    <div className="toggle-button-container">
      {isLightMode ? (
        <p className="toggle-text">Dark</p>
      ) : (
        <p className="toggle-text">Light</p>
      )}
      <label className="toggle">
        <input type="checkbox" checked={isLightMode} onChange={toggleMode} />
        <span className="slider">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation">
          </svg>
        </span>
      </label>
    </div>
  )
}

export default ToggleButton

{/* <path fill="none" d="m4 16.5 8 8 16-16"></path> */}

// https://cssnippets.shefali.dev/toggle
