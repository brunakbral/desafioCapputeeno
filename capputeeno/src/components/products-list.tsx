"use client"

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./product-card";
import styled from "styled-components";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 16px;
    max-width: 100%;
    margin-top: 48px;
    padding-left:155px;
    background-color: var(--bg-primary)
    
`


export function ProductsList() {        
    const { data } = useProducts();
    console.log(data)

    return (
        <ListContainer>
            {data?.map(product => 
            <ProductCard 
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
            />
          )}
        </ListContainer>
    )
}