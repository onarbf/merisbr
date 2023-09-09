import Link from "next/link"
import { Project } from "../../../types/Project"
import Image from "next/image"


export function MasonryProjects({projects}: {projects: Project[]}){
    return(<div className="masonry sm:masonry-sm md:masonry-md">
          {projects.map((project) => {
              return (<div key={project._id} className="rounded-lg p-4 break-inside">
                <Link href={`project/${project.slug}`}>
                    {project.image && <Image className="w-full h-auto" src={project.image} alt="image" width="0" height="0"sizes="100vw"/>}
                </Link>
                </div>)
            })}
            </div>)
}