import '../styles/globals.css'
import { StyleProvider, ThemePicker } from 'vcc-ui';
import type { AppProps } from 'next/app'
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant='light'>
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  )
}

export default MyApp
