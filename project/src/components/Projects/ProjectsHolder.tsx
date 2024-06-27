import React from 'react'
import ProjectCard from './ProjectCard'
import { AllProjects } from './Project'

function ProjectsHolder() {
  return (
    <div className=''>
        <ProjectCard el={AllProjects}/>
    </div>
  )
}

export default ProjectsHolder