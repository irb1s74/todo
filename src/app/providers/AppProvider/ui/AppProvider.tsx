import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { type Project } from 'entities/Projects'
import { type Board } from 'entities/Task'
import { Localstorage } from 'shared/const/localstorage'
import { AppContext } from '../config/AppContext'

interface ThemeProviderProps {
  children: ReactNode
}

const AppProvider = (props: ThemeProviderProps) => {
  const { children } = props
  const [projects, setProjects] = useState<Project[]>([])
  const [projectTasks, setProjectTasks] = useState<Board[]>([])

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(Localstorage.PROJECTS_LOCALSTORAGE_KEY)!)
    if (!projects.length && storage.length) setProjects(storage)
  }, [])

  useEffect(() => {
    if (projects.length) {
      localStorage.setItem(Localstorage.PROJECTS_LOCALSTORAGE_KEY, JSON.stringify(projects))
    }
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

  return <AppContext.Provider value={defaultProps}>{children}</AppContext.Provider>
}

export default AppProvider
