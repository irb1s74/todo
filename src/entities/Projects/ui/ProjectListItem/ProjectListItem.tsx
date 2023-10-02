import { memo, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from 'app/providers/AppProvider'
import { type Project } from '../../model/types/project'
import { getRouteTasks } from 'shared/const/router'
import { Card } from 'shared/ui/Card'
import cls from './ProjectListItem.module.scss'

interface ProjectListItemProps {
  data: Project
}

export const ProjectListItem = memo((props: ProjectListItemProps) => {
  const { data } = props
  const { setProjectTasks } = useContext(AppContext)
  const navigate = useNavigate()

  const handleClick = () => {
    setProjectTasks?.(data.tasks)
    navigate(getRouteTasks(data.id))
  }

  return (
    <Card className={cls.ProjectListItem} onClick={handleClick}>
      <h5>{data.title}</h5>
    </Card>
  )
})
