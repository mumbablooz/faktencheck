import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './../../styles.module.css'

import {methodsArray} from '../../daten/methodsArray'

export default function Method({params}) {
console.log(params)
  return (
    <section style={{
      margin: '1rem',
      padding: '0.5rem'
    }}>

    <p>Informationen zu diesem Nachrichtenfilterwerkzeug findest du hier:</p>
    <ul>
      {methodsArray.map((method,index)=>{
    return (<li 
  key={'method'+index}
  style={{
        border: '1px solid black',
        borderRadius: '4px',
        padding: '1rem'
      }}>
        <h2>{method.titel}</h2>
        <Link href={method.link}  
        target="_blank">
          <p style={{
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      }}>4 Ohren Model</p>
         
      <Image 
      className={styles.Image}
      width={640}
      height={360}
      alt='4 Ohren Model-Video'
      src={method.imageLink}
       />
      <p><b>Quelle:</b> studyflix.de</p>
      <b>Link: </b><p style={{
        fontSize: '10px',
      }}>{method.link}</p>
      <p><b>Video Länge: ca. {method?.videoLength} Minuten</b></p>
      </Link>
      </li>)
      })}

      
    </ul>

    </section>

  )
}
