import { readFile } from 'fs/promises'
import path from 'path'

export default defineEventHandler(async () => {
  const filePath = path.resolve('mocks/products/sofia.json')
  const jsonData = await readFile(filePath, 'utf-8')
  return JSON.parse(jsonData)
})
