import { getProjects } from "../../../sanity/lib/sanity-utils"
import { MasonryProjects } from "./components/MasonryProjects"
import {MarqueeFooter} from "./components/MarqueeFooter"
import PageWrapper from "./components/PageWrapper"

export default async function Home() {
  const projects = await getProjects()


  return (
    <PageWrapper>
    <main >  
      <div>
        <MasonryProjects projects={projects}/>
        <MarqueeFooter projects={projects}/>
      </div>
    </main>
    </PageWrapper>
  )
}
