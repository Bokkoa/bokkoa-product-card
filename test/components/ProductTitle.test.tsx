import * as React from 'react';
import renderer from 'react-test-renderer'
import ProductCard, { ProductTitle } from '../../src/components'
import { product1 } from '../data/products';

describe('ProductTitle', () => { 

  test('should show the component with the custom title correctly', () => { 
    const wrapper = renderer.create(
      <ProductTitle title='Custom Product' />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('should show the component with product\'s name', () => { 
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle title='Custom Product' />
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()

  })
})