
import Image from "next/image";
import PortableTextConfiguration from "../../../../../sanity/lib/portable-text-configuration";
import { getProject } from "../../../../../sanity/lib/sanity-utils"; import { PortableText } from "@portabletext/react";
import PageWrapper from "../../components/PageWrapper";

export const dynamic = 'force-dynamic'

type Props = {
    params: { slug: string }
}




export default async function Project({ params }: Props) {
    const slug = params.slug
    const project = await getProject({ slug });
    return (
        <PageWrapper>
            
            <div className="mx-[2vw] md:mx-[20vw] 2xl:mx-[25vw]">
                {project.header &&  <PortableText
                        value={project.header}
                        components={PortableTextConfiguration}
                    />}
                <div className="flex flex-col md:flex-row justify-between mt-5">
                    <div className="text-lg md:w-[30%]">
                        {/* {project.name && <p>{project.name}</p>} */}
                        {project.client && <p><b>Client:</b> {project.client}</p>}
                        {project.categories && <p><b>Tags:</b> {project.categories}</p>}
                    </div>
                    <div className="md:max-w-[50%] ">
                        {project.description && <h2 className="font-semibold text-left">
                            {project.description}
                        </h2>}
                    </div>

                </div>
                <div className="mt-5">
                    <PortableText
                        value={project.content}
                        components={PortableTextConfiguration}
                    />
                </div>
                <div className="flex justify-between mt-20 mb-4 ">
                    <div>
                        <p><b>
                            {`Have a project in mind? Let's Talk!`}
                        </b></p>
                        <p>mabarriru@gmail.com</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/icons/hand-icon.png" width="32" height="32" alt="img" />
                        <p>next project</p>
                    </div>
                </div>
            </div>
        </PageWrapper>)
}