'use client'

import Link from "next/link"
import { Project } from "../../../../types/Project"
import Image from "next/image"
import { useGlobalContext } from "../context/store";
import { useEffect } from "react";


export function MasonryProjects({projects}: {projects: Project[]}){
    const {categories, setCategories} = useGlobalContext();


    useEffect(()=>{
        console.log('category in masonry',categories)
    },[categories])
    return(<div className="masonry sm:masonry-sm md:masonry-md">
          {projects.filter((project)=>{
            const isFiltered  = categories.some(r=> project.projectType.indexOf(r) >= 0)

            return (isFiltered ||  categories.length === 0)
          }).map((project) => {
              return (<div key={project._id} className="rounded-lg break-inside">
                <Link href={`project/${project.slug}`}>
                    {project.image && <Image className="w-full h-auto" src={project.image} alt="image" width="0" height="0"sizes="100vw"/>}
                </Link>
                </div>)
            })}
            </div>)
}