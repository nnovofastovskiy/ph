import Link from "next/link";
import Image from "next/image";
import { ProjectCardProps } from "./ProjectCard.props";
import { Photo } from '../../helpers/interfaces/Projects.interface';

export const ProjectCard = ({ id, image, title }: ProjectCardProps) => {
    return (
        <Link
            href={`${process.env.NEXT_PUBLIC_DOMAIN}/projects/${id}`}
        >
            <a>
                <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}${image.src}`}
                    alt={image.alt}
                    width={100}
                    height={100}
                />
                <p>
                    {title}
                </p>
            </a>
        </Link>
    );
};