import React from 'react'
import ShowYoutubeVideo from './youtube/ShowYoutubeVideo'
import Link from 'next/link'
import Image from 'next/image'
export default function ShowContribution({contribution}) {
  return (
    <div style={{
        border: '1rem solid rgb(202,255,112)',
        borderRadius: '1rem',
        padding: '0.5rem'
    }}><Link href={contribution.link}>
         <h2>{contribution.titel}</h2>
        </Link>  
        <p><b>von: </b>{contribution.from.youtubeChannel ? 
         <Link href={contribution.from.youtubeChannel}>{contribution.from.name}</Link> 
         : contribution.from.name}</p>
         {contribution.link ? <Link href={contribution.link}>
          <p>{contribution.link}</p>
          {contribution.image && <Image src={contribution.image} width={100} height={100} alt='Beitrags Bild nicht vorhanden' style={{borderRadius: '0.4rem'}}/>}
          </Link> : ''}
     
      {contribution.youtube ? <ShowYoutubeVideo youtubeLink={contribution.youtube}/> : ''}
         <p><b>Quelle: </b>{contribution.quelle}</p>                            
    </div>
  )
}
