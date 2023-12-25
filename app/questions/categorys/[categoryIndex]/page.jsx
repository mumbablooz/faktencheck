import React from 'react'
import {categorysArray } from '../../../daten/categorysArray'
import { questionsArray } from '@/app/daten/questionsArray'
import Link from 'next/link'

export default function Category({params}) {
  return (
    <section>
        <h4>{categorysArray[params.categoryIndex].name}</h4>

{questionsArray.map((question, questionIndex)=>{
return (<div key={'questionContainer-'+questionIndex}>

  {question.categorys && question.categorys.map((category,categoryIndex)=>{
    if(category===categorysArray[params.categoryIndex].stateName){
      return (<div key={'question-'+categoryIndex}>
     <Link href={`/questions/${questionIndex}`}>
     <p style={{marginBottom: '0.4rem'}}>{question.question}</p></Link> 

  </div>)
    }
  })}
</div>)

})}    
    </section>
  )
}
