import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';
import { ProductCardHandlers } from '../dist/interfaces/interfaces';

const product = {
  id: '1',
  title: 'Coffe mug - Card',
}

const App = () => {
  return (
    <>
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
