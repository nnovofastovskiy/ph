import axios from 'axios';
import type { NextPage } from 'next';
import router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Photo, Project } from '../../helpers/interfaces/Projects.interface';
import { ProjectsPage } from '../../page_components';

const ProjectPage: NextPage = () => {
    const id = useRouter().query.id;
    // const [data, setData] = useState();
    // const [projects, setProjects] = useState<Project[]>();

    // const load = async () => {
    //     const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}/api/projects`, { params: { populate: "*" } });
    //     setData(data);

    //     const serverProjectsArr = data.data;
    //     const projectsArr: Project[] = serverProjectsArr.map(item => {
    //         const photosArr = item.attributes.photos.data;
    //         const mappedPhotos: Photo[] = photosArr.map(item => {
    //             const mappedItem: Photo = {
    //                 id: item.id,
    //                 fileName: item.attributes.name,
    //                 src: item.attributes.url,
    //                 alt: item.attributes.alternativeText
    //             };
    //             return mappedItem;
    //         });
    //         const mappedItem: Project = {
    //             id: item.id,
    //             title: item.attributes.title,
    //             costumer: item.attributes.costumer,
    //             description: item.attributes.description,
    //             isActive: item.attributes.isActive,
    //             photos: mappedPhotos
    //         };

    //         return mappedItem;
    //     });
    //     setProjects(projectsArr);

    //     return data;
    // };

    // useEffect(() => {
    //     load();
    // }, []);

    // console.log(process.env.NEXT_PUBLIC_STRAPI_DOMAIN);


    return (
        <>
            <h4>
                Project Page
            </h4>
            <p>
                id = {id}
            </p>
            {/* {
                projects &&
                <ProjectsPage projects={projects} />
            } */}
        </>
    );
};

export default ProjectPage;
