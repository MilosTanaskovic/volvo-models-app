import React from 'react'

import { useSwiper } from 'swiper/react';

export const ChevronCircleRight: React.FC = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper?.slideNext()}>
            Next
        </button>
    )
}
