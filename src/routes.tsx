import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

const InvoicesPage = lazy(() => import('./pages/InvoicesPage'))
const InvoiceDetailPage = lazy(() => import('./pages/InvoiceDetailPage'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/invoices" />,
  },
  {
    path: '/invoices',
    element: <InvoicesPage />,
  },
  {
    path: '/invoices/:invoiceId',
    element: <InvoiceDetailPage />,
  },
]

export default routes
