const formatArray = (arr) => {
  const new_arr = [];
  for (i = 0; i < arr.length; i++) {
    const a = new_arr.find((b) => b.id === arr[i].id);
    if (a) {
      a.quantity += arr[i].quantity;
    } else {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
};

const mergeArray = (arr1, arr2) => {
  const output = [];

  arr1 = formatArray(arr1);
  arr2 = formatArray(arr2);

  for (m = 0; m < arr1.length; m++) {
    for (n = 0; n < arr2.length; n++) {
      if (arr1[m].id === arr2[n].id) {
        output.push({
          id: arr1[m].id,
          quantity: arr1[m].quantity + arr2[n].quantity,
        });
      }
    }
  }

  return output;
};

console.log(
  mergeArray(
    [
      { id: '1', quantity: 2 },
      { id: '2', quantity: 2 },
      { id: '3', quantity: 3 },
      { id: '1', quantity: 3 },
    ],
    [
      { id: '1', quantity: 2 },
      { id: '3', quantity: 2 },
    ]
  )
);
