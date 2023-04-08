import { useEffect, useState } from "react"

const useFade = <T,>(
  watch: T | undefined,
  callback: (val: T | undefined) => boolean
): boolean => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(callback(watch)), 500)
  }, [watch])

  return show
}

export default useFade
