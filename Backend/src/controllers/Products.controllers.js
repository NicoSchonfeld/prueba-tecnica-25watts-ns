const products = [
  {
    title: "Aliquam post loralo lorem ipsum 1",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Aliquam at dui hasu kduid 2",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },

  {
    title: "Aliquam at dui Noea ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },

  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },

  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Tulopo at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
  {
    title: "Aliquam at dui lorem ipsum",
    item1: "- Ut mattis gravida efficitur",
    item2: "- Ut feugiat vehicula nibh, efficitur laoreet justo.",
    item3: "- Molestie id. Integer varius enim sit amet egestas.",
    item4: "- Ut mattis gravida efficitur.",
  },
];

const randomProducts = (products) => {
  // Recibe como parametro un array
  // i debe ser 1 menos a la longitud del array ya que se genera un numero aleatorio que este dentro del rango de la longitud.

  for (let i = products?.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * (i + 1));

    // almacenamos el valor que se encuentre en la posicion products[i]
    const posicionArray = products[i];

    // Realizamos los cambios
    products[i] = products[randomNum];
    products[randomNum] = posicionArray;
  }

  return products;
};

export const getProducts = (req, res) =>
  res.status(200).json(randomProducts(products));
