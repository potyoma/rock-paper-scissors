const tryAccess = <T>(fn: (storage: Storage) => T | undefined) => {
  try {
    const { sessionStorage: storage } = window
    return fn?.(storage)
  } catch {
    return undefined
  }
}

const setStoreValue = <T>(key: string, val: T) => {
  const stringified = JSON.stringify(val)
  tryAccess(storage => storage.setItem(key, stringified))
}

const readStoreValue = <T>(key: string): T | undefined => {
  const value = tryAccess(storage => storage.getItem(key))

  if (!value) return undefined

  return JSON.parse(value) as T
}

const clear = () => tryAccess(storage => storage.clear())

const removeItem = (key: string) =>
  tryAccess(storage => storage.removeItem(key))

export { setStoreValue, readStoreValue, clear, removeItem }
