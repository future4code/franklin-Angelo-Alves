import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
export function SecaoComentario(props) {
	const [inputDoComentario, setInputDoComentario] = useState('')

	function handleInputComentario(event){
		setInputDoComentario(event.target.value)
	}
	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={inputDoComentario}
				onChange={handleInputComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}