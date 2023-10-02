# Bokkoa Product Card

This is a testing package for npm deploys

## Felipe Cruz
```js
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'bokkoa-product-card'
```

```js
<ProductCard
  className="bg-dark text-white"
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10
  }}
>
  {
    ({ reset, count, isMaxCountReached, increaseBy, maxCount }: ProductCardHandlers) => (
      <>
        <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
        <ProductTitle className="text-bold" />
        <ProductButtons className="custom-buttons" />

        <button onClick={reset} >Reset</button>
        <button onClick={() => increaseBy(-2)}> -2 </button>

        {!isMaxCountReached && <button onClick={() => increaseBy(2)} > +2 </button>}

        <span>{count} - max: {maxCount}</span>
      </>
    )

  }
</ProductCard>
```