import Head from 'next/head'
import {  GetServerSideProps } from 'next';
import Comments from 'components/Comments';

interface Props {
  issues: Array<{
    body: string
  }>
}

export default function CommentsPage({issues}: Props) {

  return (
    <div>
        <Head>
            <title>Comments</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Comments comments={issues} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const rsp = await fetch('https://api.github.com/repos/gentgaashi/netlify-next-starter-test/issues');
  const data = await rsp.json();

  return {
    props: {issues: data},
  }
}