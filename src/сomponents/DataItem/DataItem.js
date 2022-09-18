import styled, { css } from 'styled-components';

const Item = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
align-items: center;
justify-content: center;
font-size: 2rem;
padding: 15px 20px;
color: ${props => props.color || 'grey'};
border: solid grey 2px;
border-radius: 5px;
cursor: pointer;
transition: ease .5s;
${props => 
    props.variable && css `
    :hover { 
        background-color: ${props => props.hoverColor};
        color: white;
        border: solid white 2px;
    }`};
${props => 
    props.empty && css `
    border: none;
    background: transparent;
    cursor: default;`};
@media (max-width: 640px) {
    font-size:1.3rem;
    padding: 5px;
}

`;

export default function DataItem({color, text, empty, variable, id, hoverColor, openDataItem, doNothing}) {
    return (        
        <Item color={color} 
              empty={empty} 
              variable={variable} 
              id={id} 
              hoverColor={hoverColor}
              onClick={!isNaN(text) ? () => openDataItem(text, id) : doNothing}>{text}</Item>        
    )
}