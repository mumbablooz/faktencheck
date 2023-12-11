'use client'
import React,{useState} from 'react'
import {questionsArray} from '../daten/questionsArray'
import {contributionsArray} from '../daten/contributionsArray'
import Link from 'next/link'

export default function Questions() {

 

function checkForContributions(question){
let length = 0
  contributionsArray.map((contribution)=>{
    if(contribution.question===question){
      ++length
    }
})
return length
}
  return (
    <section style={{
      padding: '0.5rem'
    }}>
        <h1>Fragen ohne Ende</h1>
        <ul>
          {questionsArray.map((question,index)=>{
        const length = checkForContributions(question.question)
            return (
              <li 
              style={{
                margin: '1rem',
                borderBottom: '0.1rem solid black'
              }}
              key={'question-'+index}>
               <Link href={'/questions/'+index}>
               <p><b style={{marginRight: '2rem'}}>{question.question}</b>Antworten: {length}</p>
               </Link> 
              </li>
            )
          })}
        </ul>

    </section>
  )
}
