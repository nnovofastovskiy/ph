export interface Project {
    id: number,
    title: string,
    costumer: string,
    photos: Photo[],
    description: string,
    isActive: boolean
}

export interface Photo {
    id: number,
    src: string,
    alt: string,
    fileName: string
}