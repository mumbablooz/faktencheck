import React from 'react'
import {questionsArray} from '../daten/questionsArray'
import Link from 'next/link'

export default function Questions() {

  return (
    <section>
        <h1>Fragen ohne Ende</h1>
        <ul>
          {questionsArray.map((question,index)=>{
            return (
              <li key={'question-'+index}>
               <Link href={'/questions/'+index}>
               <p><b>{question}</b></p>
               </Link> 
              </li>
            )
          })}
        </ul>

    </section>
  )
}
