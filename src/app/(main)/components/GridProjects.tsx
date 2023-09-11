import Link from "next/link"
import { Project } from "../../../../types/Project"
import Image from "next/image"


export function GridProjects({projects}: {projects: Project[]}){
    return(<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => {
              return (<div key={project._id} className=" flex justify-center items-center overflow-hidden aspect-square">
                    {project.image && <Image className="w-full  h-auto" src={project.image} alt="image" width="0" height="0"sizes="100vw"/>}
                </div>)
            })}
            </div>)
}