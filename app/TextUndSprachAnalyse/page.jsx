import React from 'react'
import Link from 'next/link'
import {methodsArray} from '../daten/methodsArray'
export default function TextUndSprachAnalyse() {  

  return (
    <section style={{
      padding: '0.5rem'
    }}>
      <h1>Text und Sprach Analyse</h1>
      {methodsArray.map((element,contributionIndex)=>{
        
 return <Link id='Link' key={`contribution-${contributionIndex}`} href={`/TextUndSprachAnalyse/'+${contributionIndex}`}>{element.titel}</Link>
})}
     
    </section>
  )
}
