import Head from 'next/head'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Trello</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-lg text-blue-600">Trello風アプリケーション</h1>
    </div>
  )
}

export default Home