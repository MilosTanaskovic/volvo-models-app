import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helpers/imageLoader'

interface Props {
    imageCar: string;
    modelName?: string;
}

export const ModelImage: React.FC<Props> = ({imageCar, modelName}) => {
    return (
        <Image
            loader={imageLoader}
            src={imageCar}
            alt={modelName}
            width='200'
            height='200'
        />
    )
}
