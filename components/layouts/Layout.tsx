import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface layoutProps {
  children: JSX.Element,
  title?: String
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<layoutProps> = ({ children, title="Pokemon App" }) => {
  
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="author" content="Pablo Rodríguez"/>
            <meta name="description" content={ `Informacion sobre el pokemon ${ title }` } />
            <meta name="keywords" content={ `${ title }, pokedex, pokemon` } />
            
            <link rel="shortcut icon" href="/vercel.svg" type="image/x-icon" />
            <meta property="og:title" content={`Información sobre ${ title }`}/>
            <meta property="og:description" content={`Esta es la página sobre ${ title }`}/>
            <meta property="og:image" content={`${ origin }`}/>
        </Head>

        <Navbar />

        <main style={{
          padding: '0 20px'
        }}>
          { children }
        </main>
    </>
  )
}
