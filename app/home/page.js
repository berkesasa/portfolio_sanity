import Computers from '../components/models/Computers'
import HomeAbout from '../components/HomeAbout'
import HomeProjects from '../components/HomeProjects'
import HomeContact from '../components/HomeContact'


export default async function Home() {

    return (
        <div>
                {/* Computers */}
                <section id='computers' className=''>
                    <Computers />
                </section>

                {/* About */}
                <section className='max-lg:mt-10 lg:mt-24'>
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
