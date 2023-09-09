
import { SanityImage } from "@/app/components/NextSanityImage";
import { getProject } from "../../../../sanity/lib/sanity-utils";import { PortableText } from "@portabletext/react";

type Props = {
    params: {slug: string}
}

const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => {
        return (
          <SanityImage {...value} />
        );
      },
    },
  };

export default async function Project({params}: Props){
    const slug = params.slug
    const project = await getProject({slug});
    return(<div>
        <h1>{project.name}</h1>
        <PortableText
        value={project.content}
        components={myPortableTextComponents}
        />
    </div>)
}