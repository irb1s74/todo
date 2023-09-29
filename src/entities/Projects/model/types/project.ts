import { type Board } from 'entities/Task'

export interface Project {
  id: string
  title: string
  tasks: Board[]
}
