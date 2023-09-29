import { lazy } from 'react'

export const TodoPageAsync = lazy(async () => await import('./TodoPage'))
