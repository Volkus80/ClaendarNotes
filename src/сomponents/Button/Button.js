import styled from 'styled-components';

const StyledButton = styled.button`
    color: ${props => props.color || '#087ea1'};
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 15px;
    align-self: ${props => props.align || 'flex-start'};
    cursor: pointer;
    font-size: 1.2rem;
    font-family: 'Roboto';
    outline: none;
    border: none;
    transition: ease .5s;
    &:hover {
        transform: scale(1.1);
    };
    &:active {
        transform: translate(3px);
    };
    `;

export default function Button({text, type, handler, color}) {
    return <StyledButton 
                type={type} 
                color={color}
                onClick={handler}>{text} </StyledButton>
}