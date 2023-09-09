import Link from "next/link"
import { getProjects } from "../../sanity/lib/sanity-utils"

export default async function Home() {
  const projects = await getProjects()


  return (
    <main >
      <div>{
        projects.map((project)=>(
          <div key={project._id}>
            <Link href={`/project/${project.slug}`}>{project.name}</Link>
            
          </div>
        ))
        }</div>
    </main>
  )
}
