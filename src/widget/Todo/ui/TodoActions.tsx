import { type ChangeEvent, type KeyboardEvent, memo } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'

interface TodoActionsProps {
  title: string
  variant: 'all' | 'active' | 'done'
  handleChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  handleAddTask: (event: KeyboardEvent<HTMLDivElement>) => void
  handleSetVariant: (variant: 'all' | 'active' | 'done') => () => void
  handleClearCompleted: () => void
  numLeftTask: number
  className?: string
}

export const TodoActions = memo((props: TodoActionsProps) => {
  const {
    variant,
    handleChangeTitle,
    title,
    handleAddTask,
    handleClearCompleted,
    handleSetVariant,
    numLeftTask,
  } = props

  return (
    <Stack spacing={1}>
      <TextField
        id='outlined-size-small'
        color='primary'
        fullWidth={true}
        label='Add a task'
        value={title}
        onChange={handleChangeTitle}
        onKeyUp={handleAddTask}
      />
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color='gray'>{numLeftTask} items left</Typography>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Button
            variant={variant === 'all' ? 'contained' : 'outlined'}
            onClick={handleSetVariant('all')}
          >
            All
          </Button>
          <Button
            variant={variant === 'active' ? 'contained' : 'outlined'}
            onClick={handleSetVariant('active')}
          >
            Active
          </Button>
          <Button
            variant={variant === 'done' ? 'contained' : 'outlined'}
            onClick={handleSetVariant('done')}
          >
            Completed
          </Button>
        </Stack>
        <Button onClick={handleClearCompleted} variant='contained'>
          Clear completed
        </Button>
      </Stack>
    </Stack>
  )
})
