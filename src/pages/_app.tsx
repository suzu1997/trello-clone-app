import { MantineProvider } from '@mantine/core'

import 'src/lib/tailwind.css'
import { MainLayout } from 'src/components/uiParts/Layouts/MainLayout'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // withNormalizeCSS ... MantineのリセットCSS
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MantineProvider>
  )
}

export default MyApp
