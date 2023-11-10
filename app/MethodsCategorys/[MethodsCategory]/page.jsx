import React from 'react'
import {methodsArray} from '../../daten/methodsArray'
import {methodsCategorysArray} from '../../daten/methodsCategorysArray'
//import Link from 'next/link'
import ShowMethod from '../../components/ShowMethod'
export default function MethodsCategory({params}) {
  return (
    <section style={{
        padding: '0.5rem',
    }}>
<h1>{methodsCategorysArray[params.MethodsCategory]}</h1>
<ul>
{methodsArray.map((method,index)=>{
            if(method.methodsCategory===methodsCategorysArray[params.MethodsCategory]){
                return <ShowMethod key={'method-'+index} method={method} />
            }
              })}
</ul>
    </section>
  )
}
