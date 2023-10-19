import { client } from '../../lib/sanity'

export default async function getExperience() {
    const query = `*[_type=="experience"] {
        title,
        jobTitle,
        description,
        startDate,
        endDate,
        _id,
    }`;

    const data = await client.fetch(query);
    return data;
}