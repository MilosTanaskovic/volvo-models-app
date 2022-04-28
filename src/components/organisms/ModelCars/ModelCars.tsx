import React from 'react'
import { Flex, View } from 'vcc-ui';
import { Car } from '../../../interfaces/car';
import { ModelTitle } from '../../atoms/Title'
import { ModelCar } from '../../molecules/ModelBox';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';

import styles from './ModelCars.module.css';

// import required modules
import { Navigation, Pagination } from 'swiper';
import { ChevronCircleLeft, ChevronCircleRight } from '../../atoms';

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
                    dir='ltr'
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    pagination={{
                      clickable: true

                    }}
                    breakpoints={{
                      500: {
                        slidesPerView: 2,
                        //pagination: true,
                      },
                      768: {
                        slidesPerView: 4,
                        //pagination: true,
                      },
                      1024: {
                        slidesPerView: 5,
                        //pagination: false,
                      }
                    }}
                    modules={[Navigation, Pagination]}
                >
                    {cars.map((car) => {
                        const {id, modelName, bodyType, modelType, imageUrl} = car;
                        return(
                            <SwiperSlide>
                                <ModelCar 
                                    key={id}
                                    modelId={id}
                                    modelName={modelName}
                                    carType={bodyType}
                                    modelType={modelType}
                                    imageCar={imageUrl}
                                />
                            </SwiperSlide>
                        )
                    })}
                    {/* Carousel section */}
                    {/* <Flex
                        extend={{
                            position: 'absolute',
                            bottom: 0,
                            right: 290,
                        }}
                    > */}
                    <div>
                        <ChevronCircleLeft />
                        <ChevronCircleRight />
                    </div>
                        
                    {/* </Flex> */}
                </Swiper>
            </Flex>
        </Flex>
    )
}
