import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './../../styles.module.css'

import {contributions} from '../../contributions'
export default function VierOhrenModel({params}) {
console.log(params)
  return (
    <section style={{
      margin: '1rem',
    }}>
    <h2>{contributions[0].titel}</h2>
    <p>Informationen zu diesem Nachrichtenfilterwerkzeug findest du hier:</p>
    <ul>
      <li style={{
        border: '1px solid black',
        borderRadius: '4px',
        padding: '1rem'
      }}>
        <Link href={contributions[0].link}  
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
      src={contributions[0].imageLink}
       />
      <p><b>Quelle:</b> studyflix.de</p>
      <b>Link: </b><p style={{
        fontSize: '10px',
      }}>{contributions[0].link}</p>
      <p><b>Video Länge: ca. 5 Minuten</b></p>
      </Link>
      </li>
    </ul>

    </section>

  )
}
