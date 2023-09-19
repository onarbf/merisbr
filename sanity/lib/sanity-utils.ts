import { groq } from "next-sanity";
import { client } from "./client";
import { Project } from "../../types/Project";

export async function getProjects(): Promise<Project[]>{
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            url,
            "slug": slug.current,
            "image": image.asset->url,
            "imageHeader": imageHeader.asset->url,
            client,
            categories,
            description,
            projectType,
            url,
            content,
            highlighted

        }`,{cache: 'force-cache'}
    )
}

export async function getProject({slug}: {slug: string}):  Promise<Project>{
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            url,
            "slug": slug.current,
            "image": image.asset->url,
            "imageHeader": imageHeader.asset->url,
            client,
            categories,
            description,
            projectType,
            url,
            content,
            highlighted

        }`,{slug,cache: 'force-cache'}
    )
}