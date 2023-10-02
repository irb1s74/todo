import { createContext } from 'react'
import { type Project } from 'entities/Projects'
import { type Board } from 'entities/Task'

export interface AppContextProps {
  projects: Project[]
  projectTasks?: Board[]
  setProjects?: (projects: Project[]) => void
  setProjectTasks?: (tasks: Board[]) => void
}

export const AppContext = createContext<AppContextProps>({ projects: [] })
