import { PaginationProps } from "./Pagination.props";
import Circle from "./circle.svg";
import styles from "./Pagination.module.css";
import { useState } from "react";
import cn from "classnames";

export const Pagination = ({ state, ...props }: PaginationProps) => {
    return (
        <button
            className={cn(styles.wrapper,
                {
                    [styles.active]: state == "active",
                    [styles.disactive]: state == "disactive"
                }
            )}            {...props}
        >
            {/* <Circle
                className={cn(styles.circle,
                    {
                        [styles.active]: state == "active",
                        [styles.disactive]: state == "disactive"
                    }
                )}
            /> */}
            <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
            >
                <rect />
                <circle
                    stroke-linecap="round"
                    cx="25"
                    cy="25"
                    r="24"
                    stroke="white"
                    stroke-width="2"
                    fill="none"
                    stroke-mitterlimit="0"
                    transform="rotate(-90) translate(-50 0)"
                />
            </svg>
            <div className={styles.rect}></div>
        </button>
    );
};