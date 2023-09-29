import { useCallback } from 'react'

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  let timer: null | NodeJS.Timeout = null

  return useCallback(
    (...args: any[]) => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay],
  )
}
