import data from '../data/invoices.json'

import type { IInvoice } from '../interfaces'
import type { InvoiceStatus } from '../types/InvoiceStatus.type'

let invoices: IInvoice[] = JSON.parse(JSON.stringify(data))

export async function getAllInvoices() {
  return invoices
}

export async function getAllInvoicesByStatus(status: InvoiceStatus) {
  return invoices.filter(invoice => invoice.status === status)
}

export async function getInvoiceById(id: string) {
  return invoices.find(invoice => invoice.id.toLowerCase() === id.toLowerCase())
}

export async function createNewInvoice(invoice: IInvoice) {
  const id = generateId()
  invoice.id = id
  invoices.push(invoice)
  return invoice
}

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function generateId() {
  const firstRandomChar = alphabets.charAt(
    Math.floor(Math.random() * alphabets.length),
  )
  const secondRandomChar = alphabets.charAt(
    Math.floor(Math.random() * alphabets.length),
  )
  const fourRandomNumbers = Math.floor(Math.random() * 10000)
  const id = firstRandomChar.concat(secondRandomChar, String(fourRandomNumbers))
  return id
}

export async function editInvoiceById(data: IInvoice) {
  let invoice = invoices.find(invoice => invoice.id === data.id)
  invoice = {
    ...invoice,
    ...data,
  }
}

export async function deleteInvoice(id: string) {
  invoices = invoices.filter(
    invoice => invoice.id.toLowerCase() !== id.toLowerCase(),
  )
}
