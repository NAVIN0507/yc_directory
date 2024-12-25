import { auth } from '@/auth'
import StartupForm from '@/components/StartupForm'
import { formatDate } from '@/lib/utils';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {
  const session = await auth();
if(!session) redirect("/");
  return (
<>
<section className='pink_container'>
  <p className='tag'>
    {formatDate(Date())}
  </p>
  <h1 className='heading'>Submit Your Startup</h1>
  <p className='sub-heading !max-w-5xl'>Expand your StartUps across the World</p>
</section>
<StartupForm/>
</>
  )
}

export default page