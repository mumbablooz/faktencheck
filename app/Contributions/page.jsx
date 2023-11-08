import React from 'react'
import Link from 'next/link'

import {contributionsArray} from '../daten/contributionsArray'
import ShowContribution from '../components/ShowContribution'

export default function Contributions() {

  return (
    <section>
        <h1>Alle Beiträge</h1>
        <ul>
          {contributionsArray.map((contribution,index)=>{
            return (
              <li key={'contribution-'+index}>
<ShowContribution contribution={contribution} />
                          </li>
            )
          })}
        </ul>

    </section>
  )
}
