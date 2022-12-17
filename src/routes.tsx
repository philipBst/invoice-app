import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

const InvoicesPage = lazy(() => import('./pages/InvoicesPage'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/invoices" />,
  },
  {
    path: '/invoices',
    element: <InvoicesPage />,
  },
]

export default routes
