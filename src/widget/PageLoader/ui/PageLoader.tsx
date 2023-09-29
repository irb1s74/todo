import { memo } from 'react'
import { CircularProgress, Stack } from '@mui/material'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo((props: PageLoaderProps) => {
  const { className } = props
  return (
    <Stack sx={{ height: '100%', width: '100%' }} alignItems='center' justifyContent='center' className={className}>
      <CircularProgress />
    </Stack>
  )
})
