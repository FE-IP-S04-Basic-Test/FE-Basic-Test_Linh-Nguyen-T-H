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

const addToCart = ({ product_id, ice_id, sugar_id, quantity }) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cart);

  const product = data.products.find((item) => item.id === product_id);
  const ice = data.ices.find((item) => item.id === ice_id);
  const sugar = data.sugars.find((item) => item.id === sugar_id);

  const cartItem = cart.find(
    (item) =>
      item.product.id === product_id &&
      item.ice.id === ice_id &&
      item.sugar.id === sugar_id
  );

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      product: product,
      ice: ice,
      sugar: sugar,
      quantity: quantity,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

addToCart({ product_id: 1, ice_id: 2, sugar_id: 2, quantity: 6 });
addToCart({ product_id: 2, ice_id: 1, sugar_id: 2, quantity: 6 });
