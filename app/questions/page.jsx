import React from 'react'
import {questionsArray} from '../daten/questionsArray'
import Link from 'next/link'

export default function Questions() {

  return (
    <section style={{
      padding: '0.5rem'
    }}>
        <h1>Fragen ohne Ende</h1>
        <ul>
          {questionsArray.map((question,index)=>{
            return (
              <li 
              style={{
                margin: '1rem'
              }}
              key={'question-'+index}>
               <Link href={'/questions/'+index}>
               <p><b>{question.question}</b></p>
               </Link> 
              </li>
            )
          })}
        </ul>

    </section>
  )
}
