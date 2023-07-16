export default function SortFilter(
  fastdelivery,
  sortBy,
  productCompany,
  mobile
) {
  const getFilterPrice = (mobile, sortBy) => {
    if (sortBy && sortBy === "lowtohigh") {
      return [...mobile].sort((a, b) => {
        return a["price"] - b["price"];
      });
    } else if (sortBy && sortBy === "hightolow") {
      return [...mobile].sort((a, b) => {
        return b["price"] - a["price"];
      });
    }
    return mobile;
  };

  const getFilterProduct = (mobile, productCompany) => {
    return [...mobile].filter((element) => {
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
      }
      return mobile;
    });
  };

  const getFilterStock = (mobile, fastdelivery) => {
    return [...mobile].filter((element) => {
        console.log(element.instock)
      if (fastdelivery && fastdelivery === "outofstock") {
        return element.instock === !"true";
      } else {
        return element.delivery === "1 day";
      }
    });
  };

  const getProduct = getFilterProduct(mobile, productCompany);
  const getPrice = getFilterPrice(getProduct, sortBy);
  const getStock = getFilterStock(getPrice, fastdelivery);
//   console.log("p",getPrice);
//   console.log("pr",getProduct);
//   console.log("s",getStock)
//   const finalproduct = {}
return getStock
}
