import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const GetProducts = ({ setProducts }) => {
  return useQuery({
    queryKey: [setProducts, "products"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://restaurant-menue-ordering-v1.onrender.com/api/v1/products?sort=category`
      );
      setProducts(data);
      return data;
    },
  });
};

export const GetProductWithId = ({ setProduct, id }) => {
  return useQuery({
    queryKey: [id, setProduct, "product"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://restaurant-menue-ordering-v1.onrender.com/api/v1/products/${id}`
      );
      setProduct(data);
      return data;
    },
  });
};

export const GetProductsWithCategoryId = ({ setProducts, id }) => {
  return useQuery({
    queryKey: [id, setProducts, "category"],
    queryFn: async () => {
      const { data } = await axios.get(
        // `https://restaurant-menue-ordering-v1.onrender.com/api/v1/products?subcategories=${id}`
        `https://restaurant-menue-ordering-v1.onrender.com/api/v1/products?category=${id}`
      );
      setProducts(data);
      return data;
    },
  });
};

export const GetProductsWithSubcategoryId = ({ setProducts, id }) => {
  return useQuery({
    queryKey: [id, setProducts, "subcategory"],
    queryFn: async () => {
      const { data } = await axios.get(
        // `https://restaurant-menue-ordering-v1.onrender.com/api/v1/products?subcategories=${id}`
        `https://restaurant-menue-ordering-v1.onrender.com/api/v1/products?subcategories=${id}`
      );
      setProducts(data);
      return data;
    },
  });
};
