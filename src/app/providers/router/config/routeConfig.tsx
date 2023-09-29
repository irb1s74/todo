import { Navigate, type RouteProps } from 'react-router-dom'
import { ProjectsPage } from 'pages/ProjectsPage'
import { AppRoutes, getRouteProjects, getRouteTasks } from 'shared/const/router'
import { TasksPage } from 'pages/TasksPage'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.PROJECTS]: {
    path: getRouteProjects(),
    element: <ProjectsPage />,
  },
  [AppRoutes.TASKS]: {
    path: getRouteTasks(':id'),
    element: <TasksPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <Navigate to={getRouteProjects()} />,
  },
}
