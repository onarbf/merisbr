import { PortableTextBlock } from "sanity"

export type Project = {
    _id: string,
    _createdAt: Date,
    name: string,
    slug: string,
    client: string,
    categories: string[],
    description: string,
    image: string,
    header: PortableTextBlock[],
    url: string,
    content: PortableTextBlock[]
    projectType: string[]
    highlighted: boolean
}