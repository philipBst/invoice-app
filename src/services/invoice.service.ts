import data from '../data/invoices.json'

import type { IInvoice } from '../interfaces'

const invoices = JSON.parse(JSON.stringify(data))

export async function getAllInvoices() {
  return invoices as IInvoice[]
}
