import React from 'react'
import {categorysArray } from '../../daten/categorysArray'
import Link from 'next/link'

export default function Categorys() {
  return (
    <section>
      <h3>Categorien</h3>
{categorysArray.map((category,categoryIndex)=>{
    return (<div key={'category-'+categoryIndex}
    style={{marginBottom: '0.6rem'}}>
      <Link href={`/questions/categorys/${categoryIndex}`}>
      <p>{category.name}</p></Link>
      </div>)
})}
    </section>
  )
}
