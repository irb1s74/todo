import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { type Project } from 'entities/Projects'
import { Localstorage } from 'shared/const/localstorage'
import { AppContext } from '../config/AppContext'
import { type Board } from 'entities/Task'

interface ThemeProviderProps {
  children: ReactNode;
}


const AppProvider = (props: ThemeProviderProps) => {
  const { children } = props
  const [projects, setProjects] = useState<Project[]>([])
  const [projectTasks, setProjectTasks] = useState<Board[]>([])

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem(Localstorage.PROJECTS_LOCALSTORAGE_KEY)!)
    if (!storage) {
      localStorage.setItem(Localstorage.PROJECTS_LOCALSTORAGE_KEY, JSON.stringify([]))
      storage = JSON.parse(localStorage.getItem(Localstorage.PROJECTS_LOCALSTORAGE_KEY)!)
    }
    if (!projects.length && storage.length) setProjects(storage)
  }, [projects])

  const defaultProps = useMemo(
    () => ({
      projects,
      setProjects,
      projectTasks,
      setProjectTasks,
    }),
    [projects, projectTasks],
  )

  return (

    <AppContext.Provider value={defaultProps}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
