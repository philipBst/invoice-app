import data from '../data/invoices.json'

import type { IInvoice } from '../interfaces'
import type { InvoiceStatus } from '../types/InvoiceStatus.type'

const invoices: IInvoice[] = JSON.parse(JSON.stringify(data))

export async function getAllInvoices() {
  return invoices
}

export async function getAllInvoicesByStatus(status: InvoiceStatus) {
  return invoices.filter(invoice => invoice.status === status)
}

export async function getInvoiceById(id: string) {
  return invoices.find(invoice => invoice.id === id)
}
