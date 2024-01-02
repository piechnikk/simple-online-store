import { API_BASE_PRODUCTS } from "@/helpers/constants";

export const fetchProducts = (params) => {
  const queryString = new URLSearchParams(params).toString();

  return fetch(API_BASE_PRODUCTS + `${queryString ? `?${queryString}` : ""}`);

  return [
    {
      ProductID: 1,
      ProductName: "Mens Casual Premium Slim Fit T-Shirts",
      Price: 22.3,
      QuantityInStock: 1,
      Description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      ImageURL:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      ProductID: 2,
      ProductName: "Mens Cotton Jacket",
      Price: 55.99,
      QuantityInStock: 1,
      Description:
        "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      ImageURL: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      ProductID: 3,
      ProductName: "Mens Casual Slim Fit",
      Price: 15.99,
      QuantityInStock: 1,
      Description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      ImageURL: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      ProductID: 4,
      ProductName: "DANVOUY Womens T Shirt Casual Cotton Short",
      Price: 12.99,
      QuantityInStock: 1,
      Description:
        "Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      ImageURL: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    },
    {
      ProductID: 5,
      ProductName: "Opna Women's Short Sleeve Moisture",
      Price: 7.95,
      QuantityInStock: 1,
      Description:
        "Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      ImageURL: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    },
    {
      ProductID: 6,
      ProductName: "MBJ Women's Solid Short Sleeve Boat Neck V",
      Price: 9.85,
      QuantityInStock: 1,
      Description:
        "Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      ImageURL: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    },
    {
      ProductID: 7,
      ProductName: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      Price: 39.99,
      QuantityInStock: 1,
      Description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      ImageURL: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    {
      ProductID: 8,
      ProductName:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      Price: 29.95,
      QuantityInStock: 1,
      Description:
        "Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      ImageURL: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
      ProductID: 9,
      ProductName: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      Price: 56.99,
      QuantityInStock: 1,
      Description:
        "The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather.",
      ImageURL: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
  ];
};
