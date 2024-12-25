import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERIES } from '@/sanity/lib/quries'
import { writeClient } from '@/sanity/lib/write-client'
import { after} from 'next/server'
const View = async({id} :{id:string}) => {
const {views : totlaViews} = await client.withConfig({useCdn:false}).fetch(STARTUP_VIEWS_QUERIES , {id})
 after(async() =>await writeClient.patch(id).set({views : totlaViews+1}).commit())

  return (
    <div className='view-container'>
      <div className='absolute -top-2 -right-2 '>
        <Ping/>
      </div>
      <p className='view-text'>
        <span className='font-black'>{totlaViews < 10 ? (<p>View:{totlaViews}</p>):<p>Views:{totlaViews}</p>}</span>
      </p>
    </div>
  )
}

export default View