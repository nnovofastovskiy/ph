export interface Project {
    id: number,
    title: string,
    costumer: string,
    photos: Photo[],
    description: string
}

export interface Photo {
    id: number | null,
    src: string,
    alt: string,
    fileName: string
}


export interface Thumbnail {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path?: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Formats {
    thumbnail: Thumbnail;
}

export interface Attributes2 {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: Date;
    updatedAt: Date;
}

export interface Datum {
    id: number;
    attributes: Attributes2;
}

export interface Photos {
    data: Datum[];
}

export interface Attributes {
    title: string;
    costumer: string;
    description: string;
    isActive?: any;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    photos: Photos;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Meta {
}

export interface RootObject {
    data: Data;
    meta: Meta;
}





