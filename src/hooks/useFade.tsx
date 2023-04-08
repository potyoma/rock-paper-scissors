import { useEffect, useState } from "react"

const useFade = <T,>(
  watch: T | undefined,
  callback: (val: T | undefined) => boolean
) => {
  const [show, setShow] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(callback(watch))
  }, [callback, watch])

  useEffect(() => {
    setTimeout(() => setShow(animate), 500)
  }, [animate])

  return { show, animate }
}

export default useFade
