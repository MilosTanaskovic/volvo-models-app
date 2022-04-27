import React from 'react'
import { Flex } from 'vcc-ui';
import { Car } from '../../../interfaces/car';
import { ChevronCircle } from '../../atoms/ChevronCircle'
import { ModelTitle } from '../../atoms/Title'
import { ModelCar } from '../../molecules/ModelBox';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './ModelCars.module.css';

// import required modules
import { Pagination } from 'swiper';

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
                className={styles.modelCars__container}
            >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                      clickable: true

                    }}
                    breakpoints={{
                      500: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      1024: {
                        slidesPerView: 5,
                      }
                    }}
                    modules={[Pagination]}
                >
                    {cars.map((car) => {
                        const {id, modelName, bodyType, modelType, imageUrl} = car;
                        return(
                            <SwiperSlide>
                                <ModelCar 
                                    key={id}
                                    modelName={modelName}
                                    carType={bodyType}
                                    modelType={modelType}
                                    imageCar={imageUrl}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Flex>
            {/* Carousel section */}
            <Flex
                extend={{
                    textAlign: 'center',
                    border: '1px solid grey',
                }}
            >
                <ChevronCircle />
            </Flex>
        </Flex>
    )
}
