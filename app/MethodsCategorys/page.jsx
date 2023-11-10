import React from 'react'
import {methodsCategorysArray} from '../daten/methodsCategorysArray'
import Link from 'next/link'

export default function MethodsCategorys() {
  return (
    <section style={{
        padding: '0.5rem',
    }}>
        <h1>Methoden</h1>
        <ul>
        {methodsCategorysArray.map((methodsCategory,index)=>{
           return (<li key={'methodsCategory-'+index}>
            <Link 
            href={'/MethodsCategorys/'+index}
            >{methodsCategory}</Link>
            </li>)
        })}
        </ul>
        
    </section>
  )
}
