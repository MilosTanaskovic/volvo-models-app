import React from 'react'

interface Props {
    carType?: string;
    modelName?: string;
    modelType?: string;
}

export const ModelInfo: React.FC<Props> = ({carType, modelName, modelType}) => {
    return (
        <div>
            <h3>{carType}</h3>
            <strong>{modelName}</strong>
            <p>{modelType}</p>
        </div>
    )
}
