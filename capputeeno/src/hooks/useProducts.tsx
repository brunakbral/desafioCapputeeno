import { FilterType } from "@/types/filter-types";
import { getCategoryByType, getFieldByPriority } from "@/utils/graphpl-filters";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { PriorityTypes } from "@/types/priotity-types";

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
  return axios.post(API_URL, {query});
};

const mountQuery = (type: FilterType, priority: PriorityTypes) => {
  if (type === FilterType.ALL && priority === PriorityTypes.POPULARITY) {
    return `
      query {
        allProducts(sortField:"sales", sortOrder: "DESC") {
          id
          name
          price_in_cents
          image_url
        }
      }
    `
  }

    const sortSettings = getFieldByPriority(priority)
    const categoryFilter = getCategoryByType (type)
  return ` 
      query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
    `
}

export function useProducts() {
  const { type, priority } = useFilter();
  const query = mountQuery(type, priority)
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type , priority],
  });

  return {
    data: data?.data?.data?.allProducts
  };
}
