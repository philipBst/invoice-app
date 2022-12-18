import { Suspense, Fragment } from 'react'
import { useRoutes } from 'react-router-dom'

import { Sidebar } from './components'

import InvoiceProvider from './contexts/InvoiceContext'

import routes from './routes'

function App() {
  const content = useRoutes(routes)
  return (
    <Fragment>
      <Sidebar />
      <Suspense fallback={<></>}>
        <InvoiceProvider>{content}</InvoiceProvider>
      </Suspense>
    </Fragment>
  )
}

export default App
