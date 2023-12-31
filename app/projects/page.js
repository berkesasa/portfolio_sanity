import React from 'react'
import GithubProject from '../components/GithubProjects'
import WebProject from '../components/WebProject'
import Transition from '../components/Transition'
import GithubCalendar from '../components/GithubCalendar'
import getProjects from '../components/sanityGetFuncs/getProjects'

export const revalidate = 60

async function Project() {

  const { githubProjects, websiteProjects } = await getProjects();

  return (
    <Transition>
      <section className="max-lg:mt-10 lg:mt-20">

        <div className='container'>
          <div>
            <h2>Projects</h2>
          </div>

          {/* Github Activities */}
          <div className='max-lg:mt-7 lg:mt-14 flex items-center justify-center'>
            <GithubCalendar />
          </div>
          {/* Github Projects */}
          <div className='max-lg:mt-7 lg:mt-14'>
            <h3>Github</h3>
            <div className='max-lg:mt-7 lg:mt-14 grid lg:grid-cols-2 max-lg:gap-10 lg:gap-20'>
              {githubProjects?.map((project) => (
                <GithubProject
                  key={project._id}
                  name={project.title}
                  technologies={project.technologies}
                  url={project.link}
                  date={project.date}
                  description={project.description}
                />
              ))}
            </div>
          </div>

          {/* Website Projects */}
          <div className='max-lg:mt-7 lg:mt-14'>
            <h3>Website</h3>
            <div className='grid sm:grid-cols-2 max-sm:gap-5 gap-10 lg:gap-20 max-lg:mt-7 lg:mt-14'>
              {websiteProjects?.map((project) => (
                <WebProject
                  key={project._id}
                  name={project.title}
                  imageSrc={project.imageUrl}
                  url={project.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Transition>
  )
}

export default Project