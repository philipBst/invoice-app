import type { IAddress } from './IAddress.interface'
import type { IItem } from './IItem.interface'

import type { InvoiceStatus } from './../types'

export interface IInvoice {
  id: string
  createdAt: string
  paymentDue: string
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: InvoiceStatus
  senderAddress: IAddress
  clientAddress: IAddress
  items: IItem[]
  total: number
}
