import { useContext, useState } from 'react'
import { AppContext } from 'app/providers/AppProvider'
import { Page } from 'widget/Page'
import { ProjectList } from 'entities/Projects'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { HStack, VStack } from 'shared/ui/Stack'

const ProjectsPage = () => {
  const { projects, setProjects } = useContext(AppContext)
  const [name, setName] = useState('')

  const handleChangeName = (value: string) => {
    setName(value)
  }

  const handleCreateProject = () => {
    if (name) {
      setProjects?.([...projects, { id: `${new Date().getTime()}`, title: name, tasks: [] }])
      setName('')
    }
  }

  return (
    <Page>
      <VStack align='stretch' gap='16'>
        <h2>Проекты</h2>
        <HStack gap={'24'}>
          <Input
            size='m'
            value={name}
            placeholder='Назавание проекта'
            onChange={handleChangeName}
          />
          <Button variant='outline' onClick={handleCreateProject}>
            Создать
          </Button>
        </HStack>
        <ProjectList data={projects} />
      </VStack>
    </Page>
  )
}
export default ProjectsPage
