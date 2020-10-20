import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { ContainerDiv,  Main, Sa } from '../components/index.styles';
import Link from 'next/link'


export default function Home() {

  return (
    <ContainerDiv>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header title="Welcome to my app!" />
        <div>
          <Link  href="/" passHref><Sa>Home</Sa></Link>
          <Link href="/comments" passHref><Sa>Comments</Sa></Link>
          <Link href="/issues" passHref><Sa>Issues</Sa></Link>
        </div>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <br></br>
      </Main>

      <Footer />

    </ContainerDiv>
  )
}
