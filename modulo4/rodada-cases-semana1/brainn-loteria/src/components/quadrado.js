import styled from 'styled-components'

export const Quadrado = styled.h1`
color: ${(props) => props.teste};
height: 10px;
width: 10px;
`
export const Quadradon = (props) => {
    return (
        <Quadrado teste={props.cor} >
            teste
        </Quadrado >
    )

}