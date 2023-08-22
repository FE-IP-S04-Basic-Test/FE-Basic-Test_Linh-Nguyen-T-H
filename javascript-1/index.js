const data = {
  products: [
    {
      id: 1,
      name: 'Trà sữa truyền thống',
      price: 30000,
    },
    {
      id: 2,
      name: 'Trà sữa Thái xanh',
      price: 32000,
    },
    {
      id: 3,
      name: 'Trà sữa đặc biệt',
      price: 40000,
    },
  ],

  sugars: [
    {
      id: 1,
      amount: 0,
      label: '0%',
    },
    {
      id: 2,
      amount: 50,
      label: '50%',
    },
    {
      id: 3,
      amount: 100,
      label: '100%',
    },
  ],

  ices: [
    {
      id: 1,
      amount: 0,
      label: '0%',
    },
    {
      id: 2,
      amount: 50,
      label: '50%',
    },
    {
      id: 3,
      amount: 100,
      label: '100%',
    },
  ],
};

const addToCart = ({ name, ice, sugar, quantity }) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const product_name = data.products.find((item) => item.name === name);
  const ice_amount = data.ices.find((item) => item.amount === ice);
  const sugar_amount = data.sugars.find((item) => item.amount === sugar);

  const cartItem = {
    product: product_name,
    ice: ice_amount,
    sugar: sugar_amount,
    quantity: quantity,
  };

  cart.push(cartItem);
  localStorage.setItem('cart', JSON.stringify(cart));
};
