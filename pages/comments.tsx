import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { GetStaticProps } from 'next';
import Comments from 'components/Comments';

interface Props {
  comments: Array<{
    body: string
  }>
}

export default function CommentsPage({comments}: Props) {

  return (
    <div>
        <Head>
            <title>Comments</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Comments comments={comments} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const rsp = await fetch('https://api.github.com/repos/gentgaashi/netlify-next-starter-test/issues/comments');
  const data = await rsp.json();

  return {
    props: {comments: data},
    revalidate: 1
  }
}