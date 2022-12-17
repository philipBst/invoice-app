import type { IAddress } from './IAddress.interface'
import type { IItem } from './IItem.interface'

export interface IInvoice {
  id: string
  createdAt: string
  paymentDue: string
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: string
  senderAddress: IAddress
  clientAddress: IAddress
  items: IItem[]
  total: number
}
