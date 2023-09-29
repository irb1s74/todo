import { useContext, useState } from 'react'
import { Button, Container, Divider, Stack, Typography } from '@mui/material'
import { AppContext } from 'app/providers/AppProvider'


const TasksPage = () => {
  const { projectTasks } = useContext(AppContext)
  const [modalIsOpen, setModal] = useState(false)

  return (
    <Container maxWidth='xl'>
      <Button variant='contained'>Создать задачу</Button>
      <Divider sx={{ my: '10px' }} />
      <Stack direction='row' alignItems='flexStart' justifyContent='space-between'>
        <Stack>
          <Typography variant='h5'>Queue</Typography>
        </Stack>
        <Stack>
          <Typography variant='h5'>Development</Typography>
        </Stack>
        <Stack>
          <Typography variant='h5'>Done</Typography>
        </Stack>
      </Stack>
    </Container>
  )
}
export default TasksPage
