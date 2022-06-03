import React from "react";
import styled from 'styled-components'

const LogoLabenu = styled.img`
margin: 20px;
width:50px;
border-radius:25px;
`
const DivHeader = styled.div`
display:flex;
align-items:center;
background-color: #EFF2F5`

export const Header = () =>{
    return(
        <DivHeader>
            <LogoLabenu src="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj" /> 
            <p>LabeGrupo do zap</p>

        </DivHeader>
    )
}
