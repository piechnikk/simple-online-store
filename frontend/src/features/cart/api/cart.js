import { useEffect, useRef, useState } from "react";
import { useRevalidator } from "react-router-dom";

export const fetchCart = () => {
  return {
    cart: [
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
    ],
  };
};

export const tryAddToCart = async () => {
  await new Promise((_) => setTimeout(_, 500));
};

export const tryRemoveFromCart = async () => {
  await new Promise((_) => setTimeout(_, 500));
};

export const useAddToCart = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const { state, revalidate } = useRevalidator();

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return {
    addToCart: async () => {
      try {
        setLoading(true);
        const response = await tryAddToCart();
        // if (!response.ok) throw new Error(response.statusText);
        revalidate();
        // return await response.json();
      } catch (error) {
        console.log(error);
      } finally {
        if (mounted.current) setLoading(false);
      }
    },
    isLoading: loading || state === "loading",
  };
};

export const useRemoveFromCart = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const { state, revalidate } = useRevalidator();

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return {
    removeFromCart: async () => {
      try {
        setLoading(true);
        const response = await tryRemoveFromCart();
        if (!response.ok) throw new Error(response.statusText);
        revalidate();
        return await response.json();
      } catch (error) {
        console.log(error);
      } finally {
        if (mounted.current) setLoading(false);
      }
    },
    isLoading: loading || state === "loading",
  };
};
