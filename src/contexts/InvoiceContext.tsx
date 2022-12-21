import { createContext, useContext, useReducer } from 'react'

import { HookUsedOutsideOfContextError } from '../errors'

import {
  createNewInvoice,
  getAllInvoices,
  getAllInvoicesByStatus,
  getInvoiceById,
} from '../services/invoice.service'

import type { IInvoice } from '../interfaces'
import type { InvoiceStatus } from '../types'

export type InvoiceContextValue = {
  invoices: IInvoice[]
  dispatch: React.Dispatch<IInvoice[]>
}

const InvoiceContext = createContext<InvoiceContextValue | null>(null)

const invoiceReducer = (_prevState: IInvoice[], newState: IInvoice[]) =>
  newState

const InvoiceProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [invoices, dispatch] = useReducer(invoiceReducer, [])

  return (
    <InvoiceContext.Provider value={{ invoices, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  )
}

export function useInvoice() {
  const context = useContext(InvoiceContext)
  if (!context)
    throw new HookUsedOutsideOfContextError('useInvoice', 'InvoiceContext')
  return context
}

export async function getInvoices(dispatch: React.Dispatch<IInvoice[]>) {
  const invoices = await getAllInvoices()
  dispatch(invoices)
}

export async function getInvoicesByStatus(
  status: InvoiceStatus,
  dispatch: React.Dispatch<IInvoice[]>,
) {
  const filteredInvoices = await getAllInvoicesByStatus(status)
  dispatch(filteredInvoices)
}

export async function getInvoiceByID(
  id: string,
  dispatch: React.Dispatch<IInvoice[]>,
) {
  const invoice = await getInvoiceById(id)
  if (!invoice) {
    dispatch([])
    return
  }
  dispatch([invoice])
}

export async function addNewInvoice(
  invoice: IInvoice,
  dispatch: React.Dispatch<IInvoice[]>,
) {
  invoice.status = 'pending'
  await createNewInvoice(invoice)
  const invoices = await getAllInvoices()
  dispatch(invoices)
}

export async function addNewDraftInvoice(
  invoice: IInvoice,
  dispatch: React.Dispatch<IInvoice[]>,
) {
  invoice.status = 'draft'
  await createNewInvoice(invoice)
  const invoices = await getAllInvoices()
  dispatch(invoices)
}

export default InvoiceProvider
