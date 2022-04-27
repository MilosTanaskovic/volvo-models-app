import React from 'react'
import { Block, Text } from 'vcc-ui'

interface Props {
    carType?: string;
    modelName?: string;
    modelType?: string;
}

export const ModelInfo: React.FC<Props> = ({carType, modelName, modelType}) => {
    return (
        <Block
         as='div'
        >
            <Text
                as='h3'
                variant='ootah'
            >
                {carType}
            </Text>
            <Text 
                as='span' 
                variant='amundsen' 
                subStyle='emphasis'
            >
                {modelName}
            </Text>
            <Text 
                as='span'
            >
                {modelType}
            </Text>
        </Block>
    )
}
