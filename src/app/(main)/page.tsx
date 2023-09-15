import { getProjects } from "../../../sanity/lib/sanity-utils"
import { MasonryProjects } from "./components/MasonryProjects"
import {MarqueeFooter} from "./components/MarqueeFooter"

export default async function Home() {
  const projects = await getProjects()


  return (
    <main >
      <div>
        <MasonryProjects projects={projects}/>
        <MarqueeFooter projects={projects}/>
      </div>
    </main>
  )
}
