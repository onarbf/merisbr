
import Link from "next/link"
import { getProjects } from "../../../sanity/lib/sanity-utils"
import { MasonryProjects } from "./components/MasonryProjects"

export default async function Home() {
  const projects = await getProjects()


  return (
    <main >
      <div>
        <MasonryProjects projects={projects}/>
      </div>
    </main>
  )
}
