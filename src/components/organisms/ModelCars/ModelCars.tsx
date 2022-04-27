import React from 'react'
import { Flex, Grid } from 'vcc-ui';
import { Car } from '../../../interfaces/car';
import { ChevronCircle } from '../../atoms/ChevronCircle'
import { ModelTitle } from '../../atoms/Title'
import { ModelCar } from '../../molecules/ModelBox';

interface Props {
    cars: Car[],
}

export const ModelCars: React.FC<Props> = ({cars}) => {
   
    return (
        <Flex
            as='section'
            extend={{
                gap: 20,
            }}
        >
            {/* Title section */}
            <Flex
                extend={{
                    border: '1px solid grey',
                    textAlign: 'center'
                }}
            >
                <ModelTitle />
            </Flex>
            {/* ModelContainer section */}
            <Flex
                extend={{
                    flexDirection: 'row',
                    gap: 20,
                }}
            >
                {cars.map((car) => {
                    const {id, modelName, bodyType, modelType, imageUrl} = car;
                    return(
                        <ModelCar 
                            key={id}
                            modelName={modelName}
                            carType={bodyType}
                            modelType={modelType}
                            imageCar={imageUrl}
                        />
                    )
                })}
            </Flex>
            {/* Carousel section */}
            <Flex
                extend={{
                    textAlign: 'center',
                }}
            >
                <ChevronCircle />
            </Flex>
        </Flex>
    )
}
