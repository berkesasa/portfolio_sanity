import { client } from '../../lib/sanity'


export default async function getProjects() {
    const query = `*[_type=="projects"] {
        title,
        description,
        technologies,
        homepageVisibility,
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