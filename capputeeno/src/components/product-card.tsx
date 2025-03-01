import { formatPrice } from "@/utils/formatPrice"
import styled from "styled-components"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.4);
    
    img {
        width: 256px;
        height: 300px;
        border-radius: 8px 8px 0px 0px;
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--shapes-dark);
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0;


        div {
            width: 228px;
            height: 1px;
            margin: 8px 0;
            padding: 0px;
            background: var(--shapes)
        }
    }

`

export function ProductCard(props: ProductCardProps){

   

    const price = formatPrice(props.price)
    return (
        <Card>
            <img src={props.image} />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}