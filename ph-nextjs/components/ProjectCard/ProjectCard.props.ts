import { HtmlHTMLAttributes } from "react";
import { Photo } from "../../helpers/interfaces/Projects.interface";

export interface ProjectCardProps {
    id: number,
    title: string,
    image: Photo
}