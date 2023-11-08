import React from 'react'
import ShowYoutubeVideo from './youtube/ShowYoutubeVideo'
import Link from 'next/link'
export default function ShowContribution({contribution}) {
  return (
    <div style={{
        border: '1rem solid grey',
        borderRadius: '1rem',
        padding: '0.5rem'
    }}>
         <h2>{contribution.question}</h2>
        <p><b>von: </b>{contribution.from.youtubeChannel ? 
         <Link href={contribution.from.youtubeChannel}>{contribution.from.name}</Link> 
         : contribution.from.name}</p>
      {contribution.youtube ? <ShowYoutubeVideo youtubeLink={contribution.youtube}/> : ''}
         <p><b>Quelle: </b>{contribution.quelle}</p>                            
    </div>
  )
}
