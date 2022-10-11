import axios from 'axios';
import type { NextPage, NextPageContext } from 'next';
import router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Photo, Project } from '../../helpers/interfaces/Projects.interface';
import { ProjectsPage } from '../../page_components';

const defaultImage: Photo = {
    id: null,
    src: "/uploads/Frame_31_36f215031c.png?updated_at=2022-10-11T17:06:04.771Z",
    alt: "default image of project",
    fileName: ""
};

type ProjectPageProps = {
    serverProject: Project | null
}

const ProjectPage: NextPage<ProjectPageProps> = ({ serverProject: serverProject }) => {
    const id = useRouter().query.id;
    // const [data, setData] = useState();
    const [project, setProject] = useState<Project>();

    const load = async () => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}/api/projects/${router.query.id}`, { params: { populate: "*" } });
        console.log(data.data);
        return data;
    };

    useEffect(() => {
        async function load() {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}/api/projects/${router.query.id}`, { params: { populate: "*" } });
            setProject(data);
        }
        load();
    }, []);

    console.log(process.env.NEXT_PUBLIC_STRAPI_DOMAIN);


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

ProjectPage.getInitialProps = async ({ query, res, req }: NextPageContext): Promise<ProjectPageProps> => {
    if (!req) return { serverProject: null };
    const { data: serverProducts } = await axios.get<IProduct[]>(API.products.getInCollectionById + query.categoryId);
    const { data: serverProduct } = await axios.get<IProduct>(API.products.getOneById + query.productId);
    // const { data: serverCategories } = await axios.get<ICategory[]>(API.collections.read);
    if (serverProducts.filter(prod => prod._id === query.productId).length < 1) {
        res?.writeHead(301, { Location: '/404' });
        res?.end();
    }
    // serverProduct.descriptionHTML = parse(serverProduct.description);
    return { serverProduct: serverProduct };

};


export default ProjectPage;
