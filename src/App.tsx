import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import InvoiceProvider from './contexts/InvoiceContext'

import routes from './routes'

function App() {
  const content = useRoutes(routes)
  return (
    <Suspense fallback={<></>}>
      <InvoiceProvider>{content}</InvoiceProvider>
    </Suspense>
  )
}

export default App
