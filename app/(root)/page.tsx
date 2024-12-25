
import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { STARTUP_QURIES } from "@/sanity/lib/quries";
import { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
export default async function Home({searchParams}:{searchParams : Promise<{query?:string}>}) {
  const  query  = (await searchParams).query; 
  const params = {search : query || null};
  const session = await auth();
  console.log(session?.id)
const {data : posts} = await sanityFetch({query:STARTUP_QURIES , params:params})
const handleError =()=>{
  throw new Error("Testin error")
}
  return (
    <>
    <section className="pink_container"> 
      <h1 className="heading">Pitch Your Startup ,<br /> Connect With Enterpreneurs</h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas , Vote on Pitches, and Get Noticed in Virtual Competitions
      </p>
      <SearchForm query ={query}/>
       </section>
<section className="section_container">
  <p className="text-30-semibold">
    {query ? `Search results for "${query}"`:'All StartUps'}
  </p>
  <ul className="mt-7 card_grid">
{posts.length > 0 ? (
  posts.map((post:StartupTypeCard)=>(
    <StartupCard key={post?._id} post={post}/>
  ))
): (
  <p> No startups found</p>
)}
  </ul>
</section>
<SanityLive/>
    </>
  );
}
