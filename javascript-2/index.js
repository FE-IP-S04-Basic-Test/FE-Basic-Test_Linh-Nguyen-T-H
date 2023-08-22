const mergeArray = (arr1, arr2) => {
  const output = [];
  const arr = arr1.concat(arr2);

  arr.map((item) => {
    const a = output.find((i) => i.id === item.id);
    if (a) {
      a.quantity += item.quantity;
    } else {
      output.push(item);
    }
  });

  //console.log(output);
};

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
);
