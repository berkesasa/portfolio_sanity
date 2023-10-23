import Computers from '../components/models/Computers'
import HomeAbout from '../components/HomeAbout'
import HomeProjects from '../components/HomeProjects'
import HomeContact from '../components/HomeContact'

export const revalidate = 60
export default async function Home() {

    return (
        <div>
                {/* Computers */}
                <section id='computers' className='max-lg:hidden  lg:block'>
                    <Computers />
                </section>

                {/* About */}
                <section className='mt-24'>
                    <HomeAbout />
                </section>

                {/* Projects */}
                <section className='max-lg:mt-10 lg:mt-24'>
                    <HomeProjects />
                </section>

                {/* Contact */}
                <section className='max-lg:mt-10 lg:mt-24'>
                    <HomeContact />
                </section>

        </div>
    )
}
