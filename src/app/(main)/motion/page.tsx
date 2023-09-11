import { getProjects } from "../../../../sanity/lib/sanity-utils"
import { GridProjects } from "../components/GridProjects"

export default async function MotionPage(){
    const projects = await getProjects()

    return (
        <div className="md:mx-[10vw] 2xl:mx-[15vw] mt-5">
            <GridProjects projects={projects}/>
        </div>
    )
}