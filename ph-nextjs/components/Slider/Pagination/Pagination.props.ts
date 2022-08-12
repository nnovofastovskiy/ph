import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    state: 'active' | "disactive",
}