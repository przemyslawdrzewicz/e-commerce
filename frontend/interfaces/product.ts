interface Product {
  id: number
  title: string
  price: number | string
  description: String
  image: string
  code: string
  configurator: Configurator[]
  fullImage?: string
}

interface Color {
  code: string
  color: string
}

interface Params {
  placeholder?: string
}

interface Configurator {
  id: number
  category: string
  type: string
  colors?: Color[]
  value: string
  code: string
  params?: Params
}

export type { Product, Color, Params, Configurator }
