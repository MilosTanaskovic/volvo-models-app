import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import cars from '../public/api/cars.json';
import { Footer } from '../src/components/organisms/Footer'
import { ModelCars } from '../src/components/organisms/ModelCars'
import { NavBar } from '../src/components/organisms/NavBar'
import { Car, GetCarResults } from '../src/interfaces/car';

import styles from '../styles/Home.module.css'


const Home: NextPage<{ modelCars: Car[] }> = ({modelCars}) => {
  const [cars, setCars] = useState<Car[]>(modelCars);
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
      <ModelCars cars={cars} />
      {/* Footer Section */}
      <Footer />
    </div>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      modelCars: cars
    }
  }
}
