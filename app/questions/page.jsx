'use client'
import React,{useState} from 'react'
import {questionsArray} from '../daten/questionsArray'
import {contributionsArray} from '../daten/contributionsArray'
import Link from 'next/link'

export default function Questions() {

function checkForContributionsLength(question){
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

        <ul>
          {questionsArray.map((question,questionIndex)=>{
        const length = checkForContributionsLength(question.question)
            return (
              <li 
              style={{
                marginBottom: '0.6rem',
                borderBottom: '0.1rem solid black'
              }}
              key={'question-'+questionIndex}>
               <Link href={`/questions/${questionIndex}`}>
               <p><b style={{marginRight: '2rem'}}>{question.question}</b>Antworten: {length}</p>
               </Link> 
              </li>
            )
          })}
        </ul>

    </section>
  )
}
