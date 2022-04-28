import React from 'react'

import { useSwiper } from 'swiper/react';

export const ChevronCircleLeft: React.FC = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper?.slidePrev()}>
            Prev
        </button>
    )
}