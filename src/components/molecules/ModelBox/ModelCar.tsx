import React from 'react'
import { View } from 'vcc-ui'
import { ModelInfo } from './ModelInfo'
import { ModelButton, ModelImage } from '../../atoms';

interface Props {
    modelId: string;
    modelName?: string;
    carType?: string;
    modelType?: string;
    imageCar: string;
}

export const ModelCar: React.FC<Props> = ({modelId, modelName, carType, modelType, imageCar}) => {
    return (
        <View>
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
                <ModelButton
                    path={`learn/${modelId}`}
                    arrow={'right'}
                >
                    LEARN
                </ModelButton>
                <ModelButton
                    path={`shop/${modelId}`}
                    arrow={'right'}
                >
                    SHOP
                </ModelButton>
            </View>
        </View>
    )
}
