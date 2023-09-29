import { Stack, Typography } from '@mui/material'
import { Todo } from 'widget/Todo'
import styles from './TodoPage.module.scss'

const TodoPage = () => {
  return (
    <main className={styles.todoPage}>
      <Typography variant='h3'>To-Do List</Typography>
      <Stack sx={{ flexGrow: '1' }} alignItems='center' justifyContent='center'>
        <Todo />
      </Stack>
    </main>
  )
}
export default TodoPage
