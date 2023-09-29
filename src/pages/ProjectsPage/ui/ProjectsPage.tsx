import { type ChangeEvent, useContext, useState } from 'react'
import { Button, Container, Divider, Stack, TextField, Typography } from '@mui/material'
import { ProjectList } from 'entities/Projects'
import { AppContext } from 'app/providers/AppProvider'


const ProjectsPage = () => {
  const { projects, setProjects } = useContext(AppContext)
  const [name, setName] = useState('')

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleCreateProject = () => {
    if (name) {
      setProjects?.([...projects, { id: `${new Date().getTime()}`, title: name, tasks: [] }])
      setName('')
    }
  }

  return (
    <Container maxWidth='xl'>
      <Typography variant='h4'>Проекты</Typography>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <TextField value={name} variant='outlined' placeholder='Назавание проекта' onChange={handleChangeName} />
        <Button variant='contained' onClick={handleCreateProject}>
          Создать
        </Button>
      </Stack>
      <Divider sx={{ my: '10px' }} />
      <ProjectList data={projects} />
    </Container>
  )
}
export default ProjectsPage
