import React, { useState, useEffect } from "react"

// Thanks https://stackoverflow.com/questions/68732392/window-width-in-react

const useWindowWide = (cutoff) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])

  return width > cutoff
}

export { useWindowWide }