import Router from '@/pages'
import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withCSSVariables withNormalizeCSS>
      <Router />
    </MantineProvider>
  </React.StrictMode>,
)
