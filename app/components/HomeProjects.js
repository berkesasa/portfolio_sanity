
import getProjects from '../components/sanityGetFuncs/getProjects';
import HomeSwiper from './HomeSwiper';

async function HomeProjects() {

    const { githubProjects, websiteProjects } = await getProjects();

    return (
        <div className='container'>
            <div>
                <h2>Projects</h2>
            </div>
            <div className='max-lg:mt-7 lg:mt-14'>
                <div className='max-xl:flex max-xl:flex-col max-xl:spcae-y-10 xl:grid xl:grid-cols-2 xl:gap-10 !h-auto items-center'>
                    <HomeSwiper github={githubProjects} website={websiteProjects} />
                </div>


            </div>
        </div>
    )
}

export default HomeProjects