
import React from 'react';
import { View } from 'vcc-ui';
import cars from '../../public/api/cars.json';
import { BackButton } from '../../src/components/atoms';
import { Car } from '../../src/interfaces/car';

const CarPage = ({car}: {car: Car}) => {
  
    return (
        <View>
            <div>{car.modelName}</div>
            <BackButton
                maxWidth={200}
                path={'/'}
                passHref={true}
                collor={'secondary'}
            >
                Go back to Home
            </BackButton>
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