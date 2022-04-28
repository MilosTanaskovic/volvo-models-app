
import React from 'react';
import { Button, View } from 'vcc-ui';
import cars from '../../public/api/cars.json';
import { Car } from '../../src/interfaces/car';
import NextLink from 'next/link';

const CarPage = ({car}: {car: Car}) => {
  
    return (
        <View>
            <div>{car.modelName}</div>
            <View maxWidth="200">
                <NextLink href="/" passHref>
                    <Button intent="secondary">Go back to Home</Button>
                </NextLink>
            </View>
        </View>
    )
}

export const getStaticPaths = async () => {
    const paths = cars.map((car) => ({
        params: { id: String(car.id)},
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async ({params}: { params: {id: string}}) => {
    const carModels = cars.filter(p => p.id.toString() === params.id)
    return {
        props: {
            car: carModels[0],
        }
    }
}
export default CarPage