import React from "react"
import styled from 'styled-components'

const Footer1 = styled.footer`
height: 10%;
  background-color: rgba(128, 128, 128, 0.082);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`
const H4Footer = styled.h4`
margin-left: 45%;
color: rgba(0, 0, 0, 0.364);
`
function Footer(props){
    return(
        <Footer1>
            <H4Footer>YouTube © 2022 Google LLC</H4Footer>
        </Footer1>
    )
}
export default Footer