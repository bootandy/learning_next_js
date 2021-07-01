import Layout from '../../components/layout'
// import Title from Title
import Head  from 'next/head'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

// params is from the url args so id is from this 
// file name: [id].js - 
export const getStaticProps: GetStaticProps = async ({params}) => {
// export const async function getStaticProps({ params }) {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
// export async function getStaticPaths() {
  const paths = getAllPostIds()
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

// TBD: Is this return object correct? it does build.
export function Paths() : React.ReactElement {
  // fails as tries to read from filesystem. 
  // -> can only ab run at build time
  // const paths = getStaticPaths()

  const fileNames = ['hi.md', 'other.md']
  const paths = fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  });
  console.log(paths)
  return (
    <>
      {paths.map(({ params }) => (
        <li>{params.id}</li>
      ))}
    </>
  )
}

export default function Post({
  postData
}: { 
  postData: {
    title: string
    date: string
    contentHtml: string
  }}
  ) {
  return (
    <Layout>
        <Head>
        <title>
            {postData.title}
        </title>
        </Head>
        <p>
          <ul>
            <Paths/>
          </ul>
        </p>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
  )
}

