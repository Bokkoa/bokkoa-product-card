import * as React from 'react';
import renderer from 'react-test-renderer'
import ProductCard, { ProductImage } from '../../src/components'
import { product2 } from '../data/products';

describe('ProductImage', () => { 

  test('should show the component with the image url correctly', () => { 
    const wrapper = renderer.create(
      <ProductImage img='https://i.insider.com/60638bd66183e1001981966a?width=1136&format=jpeg'/>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('should show the component with product\'s image', () => { 
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()

  })
})