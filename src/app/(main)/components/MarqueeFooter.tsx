import Link from "next/link";
import { Project } from "../../../../types/Project";
import Image from "next/image";
import Marquee from "react-fast-marquee";


interface Props {
    projects: Project[]
}
export function MarqueeFooter({ projects }: Props) {
    const highlightedProjects = projects.filter((project)=>{
        return project.highlighted === true
    })
    return (<header className="invisible md:visible flex flex-col sticky bottom-0 left-0">
        {projects && <div className="flex text-xl lg:text-2xl">
            <h4 className=" flex items-center flex-shrink-0 pl-4 py-2  relative z-10 bg-black text-white gap-2">
                <span>Proyectos destacados</span> 
                <svg  className="mt-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"></path></svg>
            </h4>
            <div className="relative flex overflow-x-hidden bg-black text-white grow">
                <Marquee className="" pauseOnHover={true} autoFill>
                    {highlightedProjects.map((project)=>{
                        return <div key={project._id} className="flex-shrink-0 flex mx-1">
                            <Link href={`/project/${project.slug}`}>
                                {project.name}
                            </Link>
                        <div className="ml-1">|</div></div>
                    })}
                </Marquee>
            </div>
        </div>}
        <div className="flex items-center justify-center py-2 px-8  bg-white">
            <ul className="flex gap-2">
                <li className="w-[30px] h-[30px]">
                    <Link href="#">
                        <Image src="/icons/linkedin-icon.png" alt="Linkedin Logo" width="32" height="32"/>
                    </Link>
                </li>
                <li className="w-[30px] h-[30px]">
                    <Link href="#">
                        <Image src="/icons/instagram-icon.png" alt="Instagram Logo" width="32" height="32"/>
                    </Link>
                </li>
                <li className="w-[30px] h-[30px]">
                <Link href="#">
                        <Image src="/icons/email-icon.png" alt="Email Logo" width="32" height="32"/>
                    </Link>
                </li>
            </ul>
        </div>
    </header>)
}