import { readFile } from 'fs/promises'
import path from 'path'

export default defineEventHandler(async () => {
  const filePath = path.resolve('mocks/products/products.json')
  const jsonData = await readFile(filePath, 'utf-8')
  return JSON.parse(jsonData)
})
