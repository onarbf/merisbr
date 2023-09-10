
import PortableTextConfiguration from "../../../../../sanity/lib/portable-text-configuration";
import { getProject } from "../../../../../sanity/lib/sanity-utils";import { PortableText } from "@portabletext/react";


type Props = {
    params: {slug: string}
}




export default async function Project({params}: Props){
    const slug = params.slug
    const project = await getProject({slug});
    return(<div>
        <h1>{project.name}</h1>
        <PortableText
        value={project.content}
        components={PortableTextConfiguration}
        />
    </div>)
}