import React from 'react';
import styled from 'styled-components';


const DivBigCard = styled.div`

display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 170px;
width: 420px;
`

const ImgBigCard = styled.img`
width:70px;
margin-right: 10px;
border-radius: 50%;
`

const H4BigCard = styled.h4`
margin-bottom: 15px;
`

const DivInternaBigCard = styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start;
`




function CardGrande(props) {
    return (
        <DivBigCard className="bigcard-container">
            <ImgBigCard src={ props.imagem } />
            <DivInternaBigCard>
                <H4BigCard>{ props.nome }</H4BigCard>
                <p>{ props.descricao }</p>
            </DivInternaBigCard>
        </DivBigCard>
    )
}

export default CardGrande;
