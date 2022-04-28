import React from 'react'
import { Row, Col, Flex, View } from 'vcc-ui'
import { ModelInfo } from './ModelInfo'

import { Swiper, SwiperSlide } from 'swiper/react';
import { ModelButton, ModelImage } from '../../atoms';

interface Props {
    modelName?: string;
    carType?: string;
    modelType?: string;
    imageCar: string;
}

export const ModelCar: React.FC<Props> = ({modelName, carType, modelType, imageCar}) => {
    return (
        <View
            extend={{
                //minWidth: 250,
            }}
        >
            <ModelInfo
                carType={carType}
                modelName={modelName}
                modelType={modelType}
            />
            <ModelImage
                imageCar={imageCar}
                modelName={modelName}
            />
            <View
                extend={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    margin: 20,
                    padding: 10,
                    
                    
                    
                }}
            >
                <ModelButton>LEARN</ModelButton>
                <ModelButton>SHOP</ModelButton>
            </View>
        </View>
    )
}
