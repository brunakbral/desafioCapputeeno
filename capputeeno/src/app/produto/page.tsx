"use client"

import styled from "styled-components"

interface ProdutoProps {

}

const Container = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`

export default function Product(props : ProdutoProps){
    return (
        <Container>
            <button>Voltar</button>
            <section>Informações do produto</section>
        </Container>
    )
   
}