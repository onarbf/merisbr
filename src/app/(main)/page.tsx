
import Link from "next/link"
import { getProjects } from "../../../sanity/lib/sanity-utils"
import { MasonryProjects } from "./components/MasonryProjects"
import Footer from "./components/Footer"

export default async function Home() {
  const projects = await getProjects()


  return (
    <main >
      <div>
        <MasonryProjects projects={projects}/>
        <Footer projects={projects}/>
      </div>
    </main>
  )
}
