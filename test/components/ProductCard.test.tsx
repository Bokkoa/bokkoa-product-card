import * as React from 'react';
import renderer, { act } from 'react-test-renderer'
import { product1 } from '../data/products';
import ProductCard from '../../src/components';

describe('ProductCard', () => { 

  test('should show the component correctly', () => { 
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => (
          <h1>Hello test</h1>
        )}
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()

  })

  test('should increment counter', async () => { 

    let wrapper: any;
    act(() => {
      wrapper = renderer.create(
        <ProductCard product={product1}>
          {({count, increaseBy}) => (
            <>
              <h1>Product card</h1>
              <span>{count}</span>
              <button onClick={() => increaseBy(1)}></button>
            </>
          )}
        </ProductCard>
      )
    });

    let tree = wrapper!.toJSON();
    act(() => {
      (tree as any).children[2].props.onClick()
    })
    expect(tree).toMatchSnapshot();
    tree = wrapper!.toJSON()
    expect((tree as any).children[1].children[0]).toBe('1') // the counter's click
  })

})
