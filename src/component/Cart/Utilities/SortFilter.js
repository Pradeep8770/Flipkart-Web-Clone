export default function SortFilter(
  stock,
  fastdelivery,
  sortBy,
  productCompany,
  Products
) {
  const getFilterProduct = (Products, productCompany)=>{
    return [...Products].filter((element) => {
      if (productCompany && productCompany === "apple") {
        return element.name === "apple";
      } else if (productCompany && productCompany === "samsung") {
        return element.name === "samsung";
      } else if (productCompany && productCompany === "huawei") {
        return element.name === "huawei";
      } else if (productCompany && productCompany === "meizu") {
        return element.name === "meizu";
      } else if (productCompany && productCompany === "vestel") {
        return element.name === "vestel";
      } else if (productCompany && productCompany === "xiaomi") {
        return element.name === "xiaomi";
      } else if (productCompany && productCompany === "asus") {
        return element.name === "asus";
      } else {
        return Products;
      }
    });
  };

  const getFilterPrice = (Products, sortBy) => {
    if (sortBy && sortBy === "lowtohigh") {
      return [...Products].sort((a, b) => {
        return a["price"] - b["price"];
      });
    } else if (sortBy && sortBy === "hightolow") {
      return [...Products].sort((a, b) => {
        return b["price"] - a["price"];
      });
    } else {
      return Products;
    }
  };

  const getFilterStock = (Products, fastdelivery, stock) => {
    return [...Products].filter((element) => {
      if (fastdelivery && fastdelivery === "fastdelivey") {
        return element.delivery === "1 day";
      } else if (stock && stock === "instock") {
        return element.instock === true;
      } else if(stock && stock === "outofstock") {
        return element.instock === false;
      }else{
        return element;
      }
    });
  };

  const getProduct = getFilterProduct(Products, productCompany);
  // console.log("get",getProduct)
  const getPrice = getFilterPrice(getProduct, sortBy);
  const getStock = getFilterStock(getPrice, fastdelivery,stock);

  return getStock;
}
