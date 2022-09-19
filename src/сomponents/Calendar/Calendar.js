import { useState } from 'react';
import styled from 'styled-components';
import Month from '../Month/Month';
import Year from '../Year/Year';
import CurrentDate from '../CurrentDate/CurrentDate';
import DatasSheet from '../DatasSheet/DatasSheet';


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background-color: ${props => props.color || '#087ea1'}
`;

const CalendarBody = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 15vh;
    border-radius: 10px;
    margin-bottom: 20px;
    @media (max-width: 640px) {
        flex-direction: column;
    }

`;
const Switches = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;
const Main = styled.main`
    display: flex;


`;


export default function Calendar() {
    let date = new Date();
    const[dataMonth, setDataMonth] = useState(date.getMonth());
    const[dataYear, setDataYear] = useState(date.getFullYear());
    const[yearValue, setYearValue] = useState(date.getFullYear());
    let color = '';
    if (dataMonth === 11 || dataMonth === 0 || dataMonth === 1) {
        color = '#087ea1';
    } else if (dataMonth === 2 || dataMonth === 3 || dataMonth === 4) {
        color = '#30d63e';
    } else if (dataMonth === 5 || dataMonth === 6 || dataMonth === 7) {
        color = '#d63b30';
    } else {
        color = '#e9c834';
    }
    function increaseMonth() {
        let count = dataMonth;
        count++;
        if (count > 11) {
            count = 0;
            let year = yearValue;
            year++;
            setYearValue(year);
            setDataYear(year);
        }
        setDataMonth(count);
    }
    function increaseYear() {
        let count = yearValue;
        ++count;
        setYearValue(count);
        setDataYear(count);
    }
    
    function decreaseMonth() {
        let count = dataMonth;
        count--;
        if (count < 0) {
            count = 11;
            let year = yearValue;
            year--;
            setYearValue(year);
            setDataYear(year);
        }
        setDataMonth(count);
    }
    function decreaseYear() {
        let count = yearValue;
        count--;
        setYearValue(count);
        setDataYear(count);
    }
    function yearEnterHandler(e) {
        if (e.key === 'Enter' && yearValue.trim().length > 0) {
            setDataYear(yearValue);
        } else if (e.key === 'Enter' && yearValue.trim().length === 0) {
            setYearValue(date.getFullYear());
            setDataYear(date.getFullYear());
        } 
    }
    function changeHandler(e) {
        setYearValue(e.target.value);
    }
    function blurHandler() {
        if (yearValue.trim().length > 0) {
            setDataYear(yearValue);
        } else {
            setYearValue(date.getFullYear());
            setDataYear(date.getFullYear());
        }
    }

    return(
        <Container color={color}>
            <CalendarBody>
                <Header>
                    <CurrentDate 
                        date={date}
                        text={'Сегодня'}/>
                    <Switches>
                        <Month 
                            month={dataMonth} 
                            increase={increaseMonth} 
                            decrease={decreaseMonth} 
                            />
                        <Year 
                            year={yearValue} 
                            increase={increaseYear} 
                            decrease={decreaseYear}
                            yearEnterHandler={yearEnterHandler} 
                            changeHandler={changeHandler}
                            blurHandler={blurHandler}/>
                    </Switches>
                </Header>
                <Main>
                    <DatasSheet 
                        dataMonth={dataMonth} 
                        dataYear={dataYear}
                        color={color}
                        />
                </Main>
            </CalendarBody>
        </Container>
    )
};