import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import { Block, View } from 'vcc-ui';
import cars from '../public/api/cars.json';
import { Footer } from '../src/components/organisms/Footer'
import { ModelCars } from '../src/components/organisms/ModelCars'
import { filterByModel } from '../src/helpers/filterByModel';
import { Car } from '../src/interfaces/car';

import styles from '../styles/Home.module.css'


const Home: NextPage<{ modelCars: Car[] }> = ({modelCars}) => {
  const [cars, setCars] = useState<Car[]>(modelCars);
  const [selectedModel, setSelectedModel] = useState<any>("");

  // Update selectedModel state
  const handleModelChange = (event: any) => {
    console.log(event.target.value);
    setSelectedModel(event.target.value);
  }

  useEffect(() => {
    const filteredData = filterByModel(selectedModel, cars);
    setCars(filteredData);
  }, [selectedModel]);

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
          <ModelCars 
            cars={cars}
            selectedModel={selectedModel}
            modelChange={handleModelChange}
          />
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
