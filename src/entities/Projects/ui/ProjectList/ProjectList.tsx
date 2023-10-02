import { memo } from 'react'
import { ProjectListItem } from 'entities/Projects'
import { type Project } from '../../model/types/project'
import { HStack, VStack } from 'shared/ui/Stack'

interface ProjectListProps {
  data: Project[]
}

export const ProjectList = memo((props: ProjectListProps) => {
  const { data } = props

  return (
    <HStack gap='4'>
      {data.map((project) => (
        <ProjectListItem key={project.id} data={project} />
      ))}
    </HStack>
  )
})
