import React from 'react'
import { ModelButton, ModelImage } from '../../atoms'
import { ModelInfo } from './ModelInfo'

interface Props {
    modelName?: string;
    carType?: string;
    modelType?: string;
    imageCar: string;
}

export const ModelCar: React.FC<Props> = ({modelName, carType, modelType, imageCar}) => {
    return (
        <div>
            <ModelInfo
                carType={carType}
                modelName={modelName}
                modelType={modelType}
            />
            <ModelImage 
                imageCar={imageCar}
                modelName={modelName}
            />
            <div>
                <ModelButton>LEARN</ModelButton>
                <ModelButton>SHOP</ModelButton>
            </div>
        </div>
    )
}
