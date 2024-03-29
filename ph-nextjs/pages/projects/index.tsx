import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Photo, Project } from '../../helpers/interfaces/Projects.interface';
import { ProjectsPage } from '../../page_components';


const defaultImage: Photo = {
    id: null,
    src: "/uploads/Frame_31_36f215031c.png?updated_at=2022-10-11T17:06:04.771Z",
    alt: "default image of project",
    fileName: ""
};

const Projects: NextPage = () => {
    // const [data, setData] = useState();
    const [projects, setProjects] = useState<Project[]>();

    const load = async () => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}/api/projects`, { params: { populate: "*" } });
        // setData(data);
        // console.log(data);


        const serverProjectsArr = data.data;
        const projectsArr: Project[] = serverProjectsArr.map(item => {
            // console.log(item);

            const photosArr = item.attributes.photos.data;
            // if (photosArr.length > 0) {
            const mappedPhotos: Photo[] = photosArr?.map(item => {
                const mappedItem: Photo = {
                    id: item.id,
                    fileName: item.attributes.name,
                    src: item.attributes.url,
                    alt: item.attributes.alternativeText
                };
                return mappedItem;
            });
            // } else {
            //     const mappedPhotos = null;
            // }

            const mappedItem: Project = {
                id: item.id,
                title: item.attributes.title,
                costumer: item.attributes.costumer,
                description: item.attributes.description,
                isActive: item.attributes.isActive,
                photos: photosArr ? mappedPhotos : [defaultImage]
            };

            return mappedItem;
        });
        setProjects(projectsArr);

        return data;
    };

    useEffect(() => {
        load();
    }, []);

    // console.log(process.env.NEXT_PUBLIC_STRAPI_DOMAIN);


    return (
        <>
            <h4>
                Projects Page
            </h4>
            {
                projects &&
                <ProjectsPage projects={projects} />
            }
        </>
    );
};

export default Projects;
