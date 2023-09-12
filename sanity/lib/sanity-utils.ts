import { groq } from "next-sanity";
import { client } from "./client";
import { Project } from "../../types/Project";

export async function getProjects(): Promise<Project[]>{
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            projectType

        }`,{cache: 'force-cache'}
    )
}

export async function getProject({slug}: {slug: string}):  Promise<Project>{
    console.log(slug)
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            projectType,
            url,
            content

        }`,{slug,cache: 'force-cache'}
    )
}