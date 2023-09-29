import { memo } from 'react'
import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface TodoItemProps {
  title: string
  done: boolean
  index: number
  handleClickDone: (index: number) => () => void
  handleClickDelete: (index: number) => () => void
}

export const TodoItem = memo((props: TodoItemProps) => {
  const { handleClickDone, handleClickDelete, title, done, index } = props
  return (
    <ListItem divider={true}>
      <ListItemIcon onClick={handleClickDone(index)}>
        <Checkbox edge='start' checked={done} />
      </ListItemIcon>
      <ListItemText sx={done ? { textDecoration: 'line-through' } : undefined} primary={title} />
      <IconButton edge='end' aria-label='delete'>
        <DeleteIcon onClick={handleClickDelete(index)} />
      </IconButton>
    </ListItem>
  )
})
