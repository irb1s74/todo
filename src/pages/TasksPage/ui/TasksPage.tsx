import { useContext, useState } from 'react'
import { Page } from 'widget/Page'
import { AppContext } from 'app/providers/AppProvider'
import { Button } from 'shared/ui/Button'
import { HStack, VStack } from 'shared/ui/Stack'

const TasksPage = () => {
  const { projectTasks } = useContext(AppContext)
  const [modalIsOpen, setModal] = useState(false)

  return (
    <Page>
      <Button>Создать задачу</Button>
      <VStack>
        <HStack>
          <h5>Queue</h5>
        </HStack>
        <HStack>
          <h5>Development</h5>
        </HStack>
        <HStack>
          <h5>Done</h5>
        </HStack>
      </VStack>
    </Page>
  )
}
export default TasksPage
