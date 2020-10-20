import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { useEffect } from 'react'
import { GetStaticProps } from 'next';

interface Props {
  data: Array<{
    body: string
  }>
 
}

export default function Home({data}: Props) {

  
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const headers = {github_token: '078b57e036ae904fd3765e8765697040f4d07935 '};
  const rsp = await fetch('https://api.github.com/repos/gentgaashi/netlify-next-starter-test/issues/comments', {headers: {Authorization: 'token '+headers.github_token}});
  const data = await rsp.json();

  return {
    props: {data}
  }
}