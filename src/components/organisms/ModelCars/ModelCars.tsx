import React from 'react'
import { Flex, Text, View } from 'vcc-ui';
import { Car } from '../../../interfaces/car';
import { ModelTitle } from '../../atoms/Title'
import { ModelCar } from '../../molecules/ModelBox';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/zoom";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import styles from './ModelCars.module.css';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper';
import { ModeFilter } from '../../molecules';

interface Props {
    cars: Car[],
    selectedModel?: string;
    modelChange: (event: any) => void;
}

export const ModelCars: React.FC<Props> = ({cars, selectedModel, modelChange}) => {
    
    return (
        <Flex
            as='section'
            extend={{
                gap: 20,
            }}
        >
            {/* Title section */}
            <ModelTitle
                extend={{ textAlign: 'center' }}
                variant={"cook"}
                subStyle={"emphasis"}
            >
                Our Models
            </ModelTitle>
            {/* Filter section */}
            <View
                extend={{
                    flexDirection: 'row',
                    maxWidth: 400
                }}
            >
                <Text variant='amundsen'>Filter by Model :</Text>
                <ModeFilter 
                    selectedModel={selectedModel}
                    modelChange={modelChange}
                    cars={cars}
                    
                />
            </View>
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
                    zoom={true}
                    navigation={true}
                    pagination={{
                      clickable: true

                    }}
                    breakpoints={{
                      500: {
                        width: 500,
                        slidesPerView: 2,
                        pagination: true,
                      },
                      768: {
                        width: 768,
                        slidesPerView: 4,
                        pagination: true,
                      },
                      1024: {
                        width: 1024,
                        slidesPerView: 5,
                        pagination: false,
                      }
                    }}
                    modules={[Zoom, Navigation, Pagination]}
                >
                    {cars.map((car) => {
                        const {id, modelName, bodyType, modelType, imageUrl} = car;
                        return(
                            <SwiperSlide key={id}>
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
                </Swiper>
            </Flex>
        </Flex>
    )
}
