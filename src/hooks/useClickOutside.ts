import { RefObject, useEffect } from "react"

const useClickOutside = (
  targetRef: RefObject<HTMLElement>,
  callback: () => void,
  setCallback: boolean
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) =>
      (event instanceof MouseEvent ||
        (event instanceof KeyboardEvent && event.key === "Escape")) &&
      targetRef.current &&
      !targetRef.current.contains(event.target as Node) &&
      callback()

    const events = ["click", "keyup"]

    if (setCallback) {
      setTimeout(
        () =>
          events.forEach(ev =>
            document.addEventListener(ev, handleClickOutside)
          ),
        1000
      )
      return () =>
        events.forEach(ev =>
          document.removeEventListener(ev, handleClickOutside)
        )
    }
  }, [callback, setCallback])
}

export default useClickOutside
