import { memo } from 'react'
import { Modal } from 'shared/ui/Modal'

interface CreateProjectModalProps {
  open: boolean
  handleClose: () => void
}

export const CreateTaskModal = memo((props: CreateProjectModalProps) => {
  const { open, handleClose } = props

  return (
    <Modal isOpen={open} onClose={handleClose}>
      {/* <Box sx={{ width: 400 }}> */}
      {/*  <TextField variant='outlined' /> */}
      {/* </Box> */}
    </Modal>
  )
})
