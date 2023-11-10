import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles.module.css'

export default function ShowMethod({method,index}) {

    return (
    <li 
    key={'method-'+index}
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
      alt='Bild nicht vorhanden'
      src={method.imageLink}
       />
      <p><b>Quelle:</b> studyflix.de</p>
      <b>Link: </b><p style={{
        fontSize: '10px',
      }}>{method.link}</p>
      <p><b>Video Länge: ca. {method?.videoLength} Minuten</b></p>
      </Link>
      </li>
      )
}
