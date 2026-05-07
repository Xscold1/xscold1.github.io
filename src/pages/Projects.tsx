import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const projects = [
  {
    title: 'Concheck',
    shortDescription: 'Project and Employee Tracker for Construction Companies.',
    fullDescription: 'A project tracker and employee management system designed for construction companies, featuring real-time updates and comprehensive dashboards.',
    tags: ['React', 'Node.js', 'Express.js' ,'MongoDB'],
    accent: 'from-sky-500 to-violet-500',
    image: '/projects/concheck/landing-page.png',
    images: ['/projects/concheck/crew.png', '/projects/concheck/dashboard.png', '/projects/concheck/images.png', '/projects/concheck/projects.png'],
  },
  {
    title: 'Budget Planner Mobile App',
    shortDescription: 'Budget planning and expense tracking mobile application.',
    fullDescription: 'A mobile application for budget planning and expense tracking, allowing users to manage their finances on the go with intuitive interfaces and insightful analytics.',
    tags: ['React Native', 'Node.js', 'Express.js' ,'MySQL'],
    accent: 'from-emerald-500 to-cyan-500',
    image: '/projects/budget/dashboard.jpg',
    images: ['/projects/budget/dashboard.jpg'],
  },
  {
    title: 'Governance Commission for GOCCs Website',
    shortDescription: 'The Revamp website of the Governance Commission for GOCCs',
    fullDescription: 'The revamped website of the Governance Commission for GOCCs, designed to provide comprehensive insights into the financial performance, governance metrics, and operational efficiency of government-owned and controlled corporations.',
    tags: ['PHP', 'MySQL', 'Alpine.js' , 'TypeScript', 'Bootstrap', 'Eloquent'],
    accent: 'from-indigo-500 to-sky-500',
    image: '/projects/gcg/gc.png',
    images: ['/projects/gcg/gc.png'],
  },
  {
    title: 'GCG Human Resource Information System',
    shortDescription: 'Human Resource Information System (HRIS) for the Governance Commission for GOCCs.',
    fullDescription: 'The Human Resource Information System (HRIS) for the Governance Commission for GOCCs, designed to streamline employee data management, attendance tracking, and performance evaluations, enhancing HR operations and decision-making processes. Note: This image only shows the job application form, but the system also includes an internal system that handles all applicants, employee data management, attendance tracking, and payroll processing.',
    tags: ['PHP', 'MySQL', 'Alpine.js' , 'TypeScript', 'Bootstrap', 'Eloquent'],
    accent: 'from-fuchsia-500 to-orange-400',
    image: '/projects/hris/job-form.jpg',
    images: ['/projects/hris/job-form.jpg'],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-2xl uppercase tracking-[0.32em] text-sky-500/75">Featured Projects</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">A selection of my recent work</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              shortDescription={project.shortDescription}
              tags={project.tags}
              accent={project.accent}
              image={project.image}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          title={selectedProject.title}
          fullDescription={selectedProject.fullDescription}
          tags={selectedProject.tags}
          images={selectedProject.images}
        />
      )}
    </section>
  )
}
