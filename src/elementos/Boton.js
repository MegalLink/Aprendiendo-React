import styled, { css } from  'styled-components'
const Boton =styled.button`
background: #83d394;
display: inline-block;
padding: 20px;
border: none;
border-radius: 3px;
font-weight: bold;
font-family: Arial, sans-serif;
cursor: pointer;
transition: .3s ease all;
width: ${props=>props.largo?'100%':'auto'};

    &:hover{
        background: #44a559;
        color: #fff;
    }

    ${props=>props.tema_negro && css`background-color:#000; color:#fff;`}
    ${props=>props.m_5 && css`margin:5% 5% 5% 5%;`}
    
    
`;
export default Boton;