import { type Project } from './project'

export interface ProjectsState {
  projects: Project[]
}

export enum ProjectsActionEnum {
  SET_PROJECTS = 'SET_PROJECTS',
  ADD_PROJECT = 'ADD_PROJECT',
}

export interface SetProjectActions {
  type: ProjectsActionEnum.SET_PROJECTS
  payload: Project[]
}

export interface AddProjectAction {
  type: ProjectsActionEnum.ADD_PROJECT
  payload: Project
}

export type ProjectsAction = SetProjectActions | AddProjectAction
