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
            unoptimized
            src={imageCar}
            alt={modelName}
            width='200px'
            height='200px'
        />
    )
}
