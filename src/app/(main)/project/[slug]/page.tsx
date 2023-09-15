
import Image from "next/image";
import PortableTextConfiguration from "../../../../../sanity/lib/portable-text-configuration";
import { getProject } from "../../../../../sanity/lib/sanity-utils";import { PortableText } from "@portabletext/react";

export const dynamic = 'force-dynamic'

type Props = {
    params: {slug: string}
}




export default async function Project({params}: Props){
    const slug = params.slug
    const project = await getProject({slug});
    return(<div className="mx-[2vw] md:mx-[20vw] 2xl:mx-[25vw]">
        {project.imageHeader && <Image className="w-full h-auto" width="0" height="0" sizes="100vw" src={project.imageHeader} alt="Header image"/>}
        <div className="mx-[24px] mt-5">
        <div className="flex justify-between">
            
        <div>
            {project.name && <p>{project.name}</p>}
            {project.client && <p>{project.client}</p>}
            {project.categories && <p>{project.categories}</p>}
        </div>
        <div className="max-w-[50%]">
            {project.description && <h2>{project.description}</h2>}
        </div>
        </div>
        <PortableText
        value={project.content}
        components={PortableTextConfiguration}
        />
        </div>
    </div>)
}