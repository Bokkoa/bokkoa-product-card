import { ProductCardHOCProps } from '../interfaces/interfaces'
import { ProductButtons } from './ProductButtons'
import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'


// To use without the barrell technique
export { ProductButtons } from './ProductButtons'
export { ProductImage } from './ProductImage'
export { ProductTitle } from './ProductTitle'

// To use sintax like <ProductCard.Image />
// insde the compound component
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Buttons: ProductButtons,
  Image: ProductImage
})

export default ProductCard