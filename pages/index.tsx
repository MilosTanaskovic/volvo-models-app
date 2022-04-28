import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { Block, View } from 'vcc-ui';
import cars from '../public/api/cars.json';
import { Footer } from '../src/components/organisms/Footer'
import { ModelCars } from '../src/components/organisms/ModelCars'
import { Car } from '../src/interfaces/car';

import styles from '../styles/Home.module.css'


const Home: NextPage<{ modelCars: Car[] }> = ({modelCars}) => {
  const [cars, setCars] = useState<Car[]>(modelCars);
  return (
    <>
      <Head>
        <title>Volvo Models Product Page</title>
        <meta name="description" content="Volvo models product page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <View
         as='main'
         extend={{
           padding: 20,
         }}
      >
        {/* Models section */}
          <ModelCars cars={cars} />
      </View>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      modelCars: cars
    }
  }
}

export default Home
