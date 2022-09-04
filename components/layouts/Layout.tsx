import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface layoutProps {
  children: JSX.Element,
  title?: String
}

export const Layout: FC<layoutProps> = ({ children, title="Pokemon App" }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="author" content="Pablo Rodríguez"/>
            <meta name="description" content={ `Informacion sobre el pokemon ${ title }` } />
            <meta name="keywords" content={ `${ title }, pokedex, pokemon` } />
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
