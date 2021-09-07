import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Awesome App</title>
        <meta name="description" content="Generated by Create Awesome App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Create Awesome App
        </h1>
      </main>

      <footer className={styles.footer}>
        Powered by Create Awesome App
      </footer>
    </div>
  )
}

export default Home
