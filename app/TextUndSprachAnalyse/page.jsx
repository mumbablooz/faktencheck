import React from 'react'
import Link from 'next/link'
import {contributions} from '../contributions'
export default function TextUndSprachAnalyse() {  

  return (
    <section>
      <h1>Text und Sprach Analyse</h1>
      {contributions.map((element,contributionIndex)=>{
        
 return <Link key={`contribution-${contributionIndex}`} href={`/TextUndSprachAnalyse/'+${contributionIndex}`}>{element.titel}</Link>
})}
     
    </section>
  )
}
