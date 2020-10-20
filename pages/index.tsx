import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { useEffect } from 'react'
import { GetStaticProps } from 'next';
import { ContainerDiv,  Main } from './index.styles';

interface Props {
  data: Array<{
    body: string
  }>
}

export default function Home({data}: Props) {

  return (
    <ContainerDiv>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <br></br>
        <div>
          {
            data.map((item, i) => <div key={i}>{item.body}</div>)
          }
        </div>
      </Main>

      <Footer />

    </ContainerDiv>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const rsp = await fetch('https://api.github.com/repos/gentgaashi/netlify-next-starter-test/issues/comments');
  const data = await rsp.json();

  return {
    props: {data},
    revalidate: 1
  }
}