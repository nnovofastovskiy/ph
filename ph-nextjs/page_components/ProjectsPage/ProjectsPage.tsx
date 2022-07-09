import { ProjectsPageProps } from "./ProjectsPage.props";
import styles from "./ProjectsPage.module.css";

import Image from "next/image";
import { ProjectCard } from "../../components";


export const ProjectsPage = ({ projects }: ProjectsPageProps) => {
    return (
        <>
            <h4>
                ProjectsPageComponent
            </h4>
            {/* <pre>
                {JSON.stringify(projects, null, 4)}
            </pre> */}
            {/* {projects[0].photos.map(img => {
                return (
                    <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}${img.src}`}
                        width={100}
                        height={100}
                        objectFit="cover"
                    />
                );
            })} */}
            {
                projects.map(proj => {
                    return (
                        <ProjectCard
                            key={`ProjectCard-${proj.id}`}
                            id={proj.id}
                            image={proj.photos[0]}
                            title={proj.title}
                        />
                    );
                })
            }
        </>
    );
};