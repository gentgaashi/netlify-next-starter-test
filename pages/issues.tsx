import Head from 'next/head'
import {  GetStaticProps } from 'next';
import Comments from 'components/Comments';

interface Props {
  issues: Array<{
    body: string
  }>
}

export default function IssuesPage({issues}: Props) {

  return (
    <div>
        <Head>
            <title>Issues</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Comments comments={issues} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const rsp = await fetch('https://api.github.com/repos/gentgaashi/netlify-next-starter-test/issues');
  const data = await rsp.json();

  return {
    props: {issues: data},
    revalidate: 1
  }
}