import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    state: 'active' | "disactive",
}