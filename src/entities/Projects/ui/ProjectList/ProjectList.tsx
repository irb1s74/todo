import { memo } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { ProjectListItem } from 'entities/Projects'
import { type Project } from '../../model/types/project'

interface ProjectListProps {
  data: Project[]
}

export const ProjectList = memo((props: ProjectListProps) => {
  const { data } = props

  return (
    <Grid container spacing={3}>
      {data.map((project) => (
        <Grid key={project.id} xl={2}>
          <ProjectListItem data={project} />
        </Grid>
      ))}
    </Grid>
  )
})

