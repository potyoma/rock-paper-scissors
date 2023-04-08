import { useEffect, useState } from "react"

const useMediaQuery = (screen: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const query = screen
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [matches, screen])

  return matches
}

export default useMediaQuery
