import { mountQuery } from "@/utils/graphpl-filters";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

interface Product {
  image_url: string;
  id: string;
  name: string;
  price_in_cents: number;
}

interface ProductsFetchResponse {
  data: {
    allProducts: Product[];
  };
}

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query });
};

export function useProducts() {
  const { type, priority, search } = useFilter()
  const searchDeferred = useDeferredValue(search)
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority],
    staleTime: 1000 * 60 * 1
  })

  const products =  data?.data?.data?.allProducts
  const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

  return {
    data: filteredProducts
  }
}
