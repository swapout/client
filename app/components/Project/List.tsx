import Link from 'next/link'
import {useProjectContext} from '@hooks/project/useProjectContext'
import ProjectPreview from '@components/Project/Preview'
import {EmptyMessage} from '@components/lib/Message/Empty'

const ProjectsList = (): React.ReactElement => {
  const {projects} = useProjectContext()
  return (
    <section className='pt-12 xl:pt-0'>
      {projects.length ? (
        <ul className='flex flex-col py-3'>
          {projects.map(project => (
            <ProjectPreview key={project.id} project={project} />
          ))}
        </ul>
      ) : (
        <EmptyMessage>
          It seems there is not any project yet. <br />
          Click{' '}
          <Link href='/new/project'>
            <a className='underline'>here</a>
          </Link>{' '}
          to create your first project
        </EmptyMessage>
      )}
    </section>
  )
}

export default ProjectsList
