import { memo, useState } from 'react'
import { Box, Modal, TextField } from '@mui/material'

interface CreateProjectModalProps {
  open: boolean
  handleClose: () => void
}

export const CreateTaskModal = memo((props: CreateProjectModalProps) => {
  const { open, handleClose } = props


  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={{ width: 400 }}>
        <TextField variant='outlined' />
      </Box>

    </Modal>
  )
})
