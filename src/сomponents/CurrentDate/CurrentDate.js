import styled from 'styled-components';
import { monthes } from '../Month/Month';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin: 0 20px;
    @media (max-width: 640px) {
        flex-direction: row;
        margin-bottom: 10px;
    }
`;
const Title = styled.p`
    text-align: center;
    color: grey;
    font-size: 20px;
    margin-bottom: 10px;
    @media (max-width: 640px) {
        font-size: 1rem;
        margin: 0;
    }
`;
const Today = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    @media (max-width: 640px) {
        flex-direction: row;
        font-size: 1.2rem;
    }
`;
const Day = styled.span`
    color: grey;
    font-size:3rem;
    margin: 0 0 10px 0;
    @media (max-width: 640px) {
        font-size: 1.2rem;
        margin: 0 10px 0 0;
    }
    

`;
const Month = styled.span`
    color: grey;
    font-size:1rem;
    margin: 0 0 10px 0;
    @media (max-width: 640px) {
        margin: 0 10px 0 0;
        font-size: 1.2rem;
    }
`;
const Year = styled.span`
    color: grey;
    font-size:1.5rem;
    @media (max-width: 640px) {
        font-size: 1.2rem;
    }
`;

export default function CurrentDate({date, text}) {
    return (
        <Container>
            <Title>{text}</Title>
            <Today>
                <Day>{date.getDate()}</Day><Month>{monthes[date.getMonth()]}</Month><Year>{date.getFullYear()}</Year>
            </Today>
        </Container>
    )
}
