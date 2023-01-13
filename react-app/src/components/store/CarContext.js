import React from "react";
const CarContext = React.createContext({
  items: [],
  titalMount: 0,
  totalPrice: 0,
  cartdispatch: () => {},
});

export default CarContext;
