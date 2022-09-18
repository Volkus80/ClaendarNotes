import { useState } from 'react';
import styled from 'styled-components';
import {monthes} from '../Month/Month';
import DataItem from '../DataItem/DataItem';
import uuid from 'react-uuid';
import NoteItem from '../NoteItem/NoteItem';

export const createID = () => uuid();


const Sheet = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 5px;
    row-gap: 5px;
`;

const weekDays = [
    'ПН',
    'ВТ',
    'СР',
    'ЧТ',
    'ПТ',
    'СБ',
    'ВС',
];

export default function DatasSheet({dataMonth, dataYear, color}) {
    const [date, setDate] = useState('');
    const [hidden, setHidden] = useState(true);
    const [id, setID] = useState('');
    const [datas, setDatas] = useState([]);
    const monthLength = new Date(dataYear, dataMonth+1, 0).getDate();
    const firstDay = new Date(+dataYear, +dataMonth, 1).getDay();
    const emptyDates = [];
    for (let i = 0; i < firstDay-1; i++) {
        let key = createID();
        emptyDates.push(<DataItem key={key} text={''} empty/>);
    }
    const dates = [];
    for (let i = 1; i <= monthLength; i++) {
        let dateID = new Date(dataYear, dataMonth, i+1).toISOString();
        dates.push(<DataItem 
                    key={dateID} 
                    id={dateID} 
                    text={i} 
                    hoverColor={color}
                    variable
                    openDataItem={openDataItem}
                    doNothing={doNothing}
                    />)
    }
    const DaysTitle = weekDays.map((day, i) => (<DataItem key={day} color={(i+1)%7 === 0 ? 'red' : 'grey'} text={day}></DataItem>));
    
    function openDataItem(day, id) {
        if (!isNaN(day)) {
            setID(id);
            getDatas(id);
            setDate(day);
            setHidden(false);
        } else {return}        
    }
    function doNothing() {
        return;
    }
    function closeNote() {
        if(datas.length > 0) {
        localStorage.setItem(id, JSON.stringify(datas));
        setDatas([]);
    }
        setHidden(true);
    }
    function getDatas(id) {
        const newDatas = JSON.parse(localStorage.getItem(id));
        if (newDatas) {
            setDatas(newDatas);
        }
    }
    return (
        <>
        <Sheet>
            {DaysTitle}
            {emptyDates}
            {dates}            
        </Sheet>
        <NoteItem date={date} 
                  month={monthes[dataMonth]} 
                  year={dataYear} 
                  hidden={hidden}
                  id={id} 
                  datas={datas}
                  color={color}
                  setDatas={setDatas}
                  closeNote={closeNote}/>
        </>
    )
}