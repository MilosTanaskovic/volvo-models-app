import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/organisms/Footer'
import { ModelCars } from '../components/organisms/ModelCars'
import { NavBar } from '../components/organisms/NavBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volvo Models Product Page</title>
        <meta name="description" content="Volvo models product page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Volvo Models</h1>
      {/* Navbar section */}
      <NavBar />
      {/* Models section */}
      <ModelCars />
      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Home
