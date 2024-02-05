fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(result => {
    console.log("MAIN ARRAY", result); // API log test

    // All laptops, ordered by price descending
    let descendingPriceLaptops = result.products.filter(product => product.category === 'laptops').sort((a, b) => b.price - a.price); 
    console.log(descendingPriceLaptops);


    // The first grocery item 
    let firstGroceryItem = result.products.filter(product => product.category === 'groceries');
    console.log(firstGroceryItem);


    // Index of the first "Samsung" smartphone
    let firstSamsungIndex = result.products.findIndex(item => item.brand === 'Samsung');
    if (firstSamsungIndex !== -1) {
      console.log("Index of first Samsung:", firstSamsungIndex);
    } else {
      return ("No samsung found");
    }
    console.log(firstSamsungIndex);

    // Check if there is any item from the brand "Sony"
    let checkSony = result.products.find(item => item.brand === 'Sony');
    if (checkSony) {
      console.log("There are Sony items in this API.", checkSony);
    } else {
      console.log("There are no Sony items in this API.");
    }


    // The average discount percentage of products with a rating above 4.5 (PAK NE MI RABOTI SO REDUCE ISTO KAKO EXERCISE 1 POSLEDNO BARANJE)
    let avgDiscount = result.products.filter (product => product.rating > 4.5).reduce ((sum, product) => sum + product.discount_percentage, 0) / result.length;
    console.log(avgDiscount);


  });


