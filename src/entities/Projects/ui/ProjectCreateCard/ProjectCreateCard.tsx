import { memo } from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

interface ProjectCreateCardProps {
  className?: string
}

export const ProjectCreateCard = memo((props: ProjectCreateCardProps) => {
  const { className } = props

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
      <CardActionArea color='primary' sx={{ flexGrow: 1, bgcolor:"#6499E9" }}>
        <CardContent>
          <Typography gutterBottom variant='h5'>Создать проект</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
})
