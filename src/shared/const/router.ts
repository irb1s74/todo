export enum AppRoutes {
  PROJECTS = 'projects',
  TASKS = 'tasks',
  NOT_FOUND = 'not_found',
}

export const getRouteProjects = () => '/'
export const getRouteTasks = (id: string) => `/tasks/${id}`

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteProjects()]: AppRoutes.PROJECTS,
  [getRouteTasks(':id')]: AppRoutes.TASKS,
}
