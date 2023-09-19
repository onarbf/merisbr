'use client'

import Link from "next/link"
import { Project } from "../../../../types/Project"
import Image from "next/image"
import { motion } from "framer-motion"
import { useGlobalContext } from "../context/store";
import { useEffect, useState} from "react";


export function MasonryProjects({ projects }: { projects: Project[] }) {
    const { categories } = useGlobalContext();
    const [animationKey, setAnimationKey] = useState(0);
    const masonryAnimation = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            }
        },
    }
    useEffect(()=>{
        setAnimationKey((prevKey) => prevKey + 1);
    },[categories])

    const imageAnimation = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    return (<motion.div
        initial="hidden"
        animate="visible"
        key={animationKey}
        variants={masonryAnimation} className="masonry sm:masonry-sm md:masonry-md">
        {projects.filter((project) => {
            const isFiltered = categories.some(r => project.projectType.indexOf(r) >= 0)
            return (isFiltered || categories.length === 0)
        }).map((project) => {
            return (<motion.div variants={imageAnimation}
                key={project._id} className="rounded-lg break-inside mt-8 md:mt-0">
                <Link href={`project/${project.slug}`}>
                    {project.image && <Image className="w-full h-auto" src={project.image} alt="image" width="0" height="0" sizes="100vw" />}
                </Link>
            </motion.div>)
        })}
    </motion.div>)
}