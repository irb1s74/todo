import { memo, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { AppContext } from 'app/providers/AppProvider'
import { type Project } from '../../model/types/project'
import { getRouteTasks } from 'shared/const/router'

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
    <Card
      sx={{
        maxHeight: '220px',
        height: '220px',
        width: '228px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea onClick={handleClick} sx={{ flexGrow: 1 }}>
        <CardContent>
          <Typography gutterBottom variant='h5'>{data.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
})
