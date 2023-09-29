import { memo, useMemo, useState, type KeyboardEvent, type ChangeEvent, useCallback } from 'react'
import { List, Paper, Stack } from '@mui/material'
import { type ITodo } from 'shared/types/todo'
import { TodoActions } from 'widget/Todo/ui/TodoActions'
import { TodoItem } from 'widget/Todo/ui/TodoItem'

export const Todo = memo(() => {
  const [variant, setVariant] = useState<'all' | 'active' | 'done'>('all')
  const [tasks, setTasks] = useState<ITodo[]>([{ title: 'Покушать', done: false }])
  const [title, setTitle] = useState('')

  const handleClickDone = useCallback((index: number) => {
    return () => {
      setTasks((prevState) => {
        const arr = [...prevState]
        arr[index].done = !arr[index].done
        return arr
      })
    }
  }, [])

  const handleClickDelete = useCallback((index: number) => {
    return () => {
      setTasks((prevState) => prevState.filter((task, taskIndex) => taskIndex !== index))
    }
  }, [])

  const handleChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }, [])

  const handleClearCompleted = useCallback(() => {
    setTasks((prevState) => prevState.filter((task) => !task.done))
  }, [])

  const handleSetVariant = useCallback((variant: 'all' | 'active' | 'done') => {
    return () => setVariant(variant)
  }, [])

  const handleAddTask = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setTasks((prevState) => [...prevState, { title, done: false }])
      setTitle('')
    }
  }

  const numLeftTask = useMemo(
    () => tasks.reduce((accum, item) => (item.done ? accum : accum + 1), 0),
    [tasks],
  )

  return (
    <Paper sx={{ width: '80%', height: '650px', p: '1rem' }}>
      <Stack
        sx={{ height: '100%' }}
        alignItems='stretch'
        direction='column'
        justifyContent='space-between'
      >
        <List sx={{ flexGrow: '1', overflowY: 'auto' }}>
          {variant === 'all'
            ? tasks.map((task, index) => (
                <TodoItem
                  key={`${task.title}-${index}`}
                  title={task.title}
                  done={task.done}
                  index={index}
                  handleClickDone={handleClickDone}
                  handleClickDelete={handleClickDelete}
                />
              ))
            : variant === 'done'
            ? tasks
                .filter((task) => task.done)
                .map((task, index) => (
                  <TodoItem
                    key={`${task.title}-${index}`}
                    title={task.title}
                    done={task.done}
                    index={index}
                    handleClickDone={handleClickDone}
                    handleClickDelete={handleClickDelete}
                  />
                ))
            : tasks
                .filter((task) => !task.done)
                .map((task, index) => (
                  <TodoItem
                    key={`${task.title}-${index}`}
                    title={task.title}
                    done={task.done}
                    index={index}
                    handleClickDone={handleClickDone}
                    handleClickDelete={handleClickDelete}
                  />
                ))}
        </List>
        <TodoActions
          title={title}
          variant={variant}
          handleChangeTitle={handleChangeTitle}
          handleAddTask={handleAddTask}
          handleClearCompleted={handleClearCompleted}
          handleSetVariant={handleSetVariant}
          numLeftTask={numLeftTask}
        />
      </Stack>
    </Paper>
  )
})
