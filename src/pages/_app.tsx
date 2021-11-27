const isBrowser = typeof window !== 'undefined'

import '../styles/globals.css'
import '../styles/antdstyles.less'
import type { AppProps } from 'next/app'
import React from 'react'

React.useLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

function MyApp({ Component, pageProps }: AppProps) {
  return isBrowser ? <Component {...pageProps} /> : null
}
export default MyApp
