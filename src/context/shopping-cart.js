

import React from 'react';

    
    const CartCounterContext = React.createContext({
      value: 0,
      setValue: () => {},
    });

    export const CartContextProvider = CartCounterContext.Provider;
    export default CartCounterContext;
    
