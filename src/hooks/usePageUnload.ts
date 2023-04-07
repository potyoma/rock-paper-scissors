import { useEffect } from "react"

const BEFORE_UNLOAD = "beforeunload"

const usePageUnload = (onUnload: () => void) => {
  useEffect(() => {
    window.addEventListener(BEFORE_UNLOAD, onUnload, { capture: true })
    return window.removeEventListener(BEFORE_UNLOAD, onUnload)
  }, [onUnload])
}

export default usePageUnload
