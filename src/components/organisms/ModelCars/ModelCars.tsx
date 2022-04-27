import React from 'react'
import { ChevronCircle } from '../../atoms/ChevronCircle'
import { ModelTitle } from '../../atoms/Title'
import { ModelCar } from '../../molecules/ModelBox';

export const ModelCars: React.FC = () => {
    return (
        <main>
            {/* Title section */}
            <section>
                <ModelTitle />
            </section>
            {/* ModelContainer section */}
            <section>
                ModelContainer
                <ModelCar />
            </section>
            {/* Carousel section */}
            <section>
                <ChevronCircle />
            </section>
        </main>
    )
}
