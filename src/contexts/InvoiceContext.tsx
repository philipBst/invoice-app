import { createContext, useContext } from 'react'
import { HookUsedOutsideOfContextError } from '../errors'

import type { IInvoice } from '../interfaces'

export type InvoiceContextValue = {
  invoices: IInvoice[]
}

const InvoiceContext = createContext<InvoiceContextValue | null>(null)

const InvoiceProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <InvoiceContext.Provider value={null}>{children}</InvoiceContext.Provider>
  )
}

export function useInvoice() {
  const context = useContext(InvoiceContext)
  if (!context)
    throw new HookUsedOutsideOfContextError('useInvoice', 'InvoiceContext')
  return context
}

export default InvoiceProvider
