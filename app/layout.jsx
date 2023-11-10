import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.css'

const inter = Inter({ subsets: ['latin'] })
//<link rel="preconnect" href="http://domain.com">
//<link rel="dns-prefetch" href="http://domain.com"> 
export const metadata = {

  title: 'Faktencheck',
  description: 'Methoden zur Analyse von (Fake-)Nachrichten',
 
}

export default function RootLayout({ children }) {
  const LinkCss = {
    maxWidth: '180px',
    margin: '0.3rem',
    padding: '0.3rem',
    border: '1px solid black',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <html lang="de">
      
      <body className={inter.className}>

      <header style={{
        margin: '1rem',
        padding: '1rem',
        borderBottom: '1px solid black',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        <div>
        <h1>Faktencheck</h1>
      <p>Hilfen zum Einschätzen von (Fake-) Nachrichten</p>
        </div>

        <Image 
      className={styles.Image}
      width={640}
      height={452}
      sizes="50vw"
      alt='Faktenck Foto'
      src='/search-engine-463398_640.jpg' 
      priority={true}/>
      <nav style={{
        padding: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
      }}>        
      <Link className='Link' style={LinkCss} href={'/'} >Home</Link>
      <Link className='Link' style={LinkCss} href={'/questions'} >Fragen und Antworten</Link>
      <Link className='Link' style={LinkCss} href={'/MethodsCategorys'} >Methoden</Link>
      
      </nav>
      </header>
<main>
{children}
</main>



        </body>
    </html>
  )
}
