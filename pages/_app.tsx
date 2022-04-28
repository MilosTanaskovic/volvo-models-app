import '../styles/globals.css'
import { StyleProvider, ThemePicker } from 'vcc-ui';
import type { AppProps } from 'next/app'
import React from 'react';
// eslint-disable-next-line
import "swiper/css/bundle";
import { NavBar } from '../src/components/organisms/NavBar';
import { Footer } from '../src/components/organisms/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant='light'>
            {/* Navbar section */}
            <NavBar />
            {/* pages */}
            <Component {...pageProps} />
            {/* Footer Section */}
            <Footer />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  )
}

export default MyApp
