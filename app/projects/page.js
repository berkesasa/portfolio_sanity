import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import GithubProject from '../components/GithubProjects'
import WebProject from '../components/WebProject'
import Transition from '../components/Transition'
import GithubCalendar from '../components/GithubCalendar'
import { client } from '../components/lib/sanity'

async function getProjects() {
  const query = `*[_type=="projects"] {
    title,
    description,
    technologies,
    date,
    link,
    type,
    image,
      _id,
      "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);
  const githubProjects = data.filter((project) => project.type === 'GitHub');
  const websiteProjects = data.filter((project) => project.type === 'Website');
  return { githubProjects, websiteProjects }
}

async function Project() {

  const { githubProjects, websiteProjects } = await getProjects();

  return (
    <Transition>
      <section className="max-lg:mt-24 lg:mt-32">

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

              {/* <WebProject
                name="Lorem ipsum dolor sit amet."
                imageSrc="/projectipsum.jpeg"
                url="lipsum.com"
              /> */}
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