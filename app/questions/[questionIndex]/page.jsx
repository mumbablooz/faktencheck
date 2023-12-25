import React from 'react'
import {questionsArray} from '../../daten/questionsArray'
import {contributionsArray} from '../../daten/contributionsArray'
import ShowContribution from '../../components/ShowContribution'

export default function Question({params}) {

  return (
    <section style={{
      padding: '0.5rem 0'
    }}>
<h1>{questionsArray[params.questionIndex].question}</h1>
<ul>
{contributionsArray.map((contribution,contributionIndex)=>{

    if(contribution.question===questionsArray[params.questionIndex].question){
      return <li 
      key={'contribution-'+contributionIndex}
      
      ><ShowContribution contribution={contribution} /></li>
    }

})}
</ul>

    </section>
  )
}
