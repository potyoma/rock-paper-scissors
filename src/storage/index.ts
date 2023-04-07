const setStoreValue = <T>(key: string, val: T) => {
  const { localStorage: storage } = window
  const stringified = JSON.stringify(val)
  storage.setItem(key, stringified)
}

const readStoreValue = <T>(key: string): T | undefined => {
  const { localStorage: storage } = window
  const value = storage.getItem(key)

  if (!value) return undefined

  return JSON.parse(value) as T
}

const clear = () => window.localStorage.clear()

const removeItem = (key: string) => window.localStorage.removeItem(key)

export { setStoreValue, readStoreValue, clear, removeItem }
