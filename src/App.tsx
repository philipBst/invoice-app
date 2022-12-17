import { useRoutes } from 'react-router-dom'

import InvoiceProvider from './contexts/InvoiceContext'

import routes from './routes'

function App() {
  const content = useRoutes(routes)
  return <InvoiceProvider>{content}</InvoiceProvider>
}

export default App
