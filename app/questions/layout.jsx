
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

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
<div>
<h2>Fragen und Antworten</h2>
<div style={{
        padding: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
      }}>        
      <Link className='Link' style={LinkCss} href={'/questions/categorys'} >Kategorien</Link>
        
      </div>     
<main>
{children}
</main>
</div>






  )
}
