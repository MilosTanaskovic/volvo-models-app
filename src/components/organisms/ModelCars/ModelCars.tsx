import React from 'react'
import { Car } from '../../../interfaces/car';
import { ChevronCircle } from '../../atoms/ChevronCircle'
import { ModelTitle } from '../../atoms/Title'
import { ModelCar } from '../../molecules/ModelBox';

interface Props {
    cars: Car[],
}

export const ModelCars: React.FC<Props> = ({cars}) => {
   
    return (
        <main>
            {/* Title section */}
            <section>
                <ModelTitle />
            </section>
            {/* ModelContainer section */}
            <section>
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
            </section>
            {/* Carousel section */}
            <section>
                <ChevronCircle />
            </section>
        </main>
    )
}
