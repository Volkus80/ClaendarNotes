import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { createID } from '../DatasSheet/DatasSheet';


const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Text = styled.p`
    display: inline;
    color: white;
    font-size: 1.5rem;
    height: 2rem;
    text-align: flex-start;
    line-height: 2rem;
    hyphens: auto;
`;

const CloseButton = styled.span`
    color: red; 
    cursor: pointer;  
    font-size: 1.5rem;
    margin-left: 10px; 
    line-height: 2rem;
    
`;
const List = styled.ol`
    color: #fff;
    padding-left: 20px;
    font-size: 1.5rem;
    padding-top: 20px;
    width: 80%;
`;

const Input = styled.input`
    border: none;
    outline: none;
    background-color: ${props => props.color || '#087ea1'};
    color: #fff;
    font-size: 1.5rem;
    width: 100%;
`;






export default function NoteData({id, datas, setDatas, color}){
    const [value, setValue] = useState('');
    const notes = datas.map(data => (
        !data.active ? 
                        <li key={data.id}>
                        <Text                              
                            id={data.id}
                            onClick={() => startEdit(data.id)}
                            >
                                {data.text}                            
                        </Text>
                        <CloseButton 
                            color={color}
                            onClick={() => deleteLine(data.id)}>&times;</CloseButton> 
                        </li>
                    : 
                        <li key={data.id}>
                            <Input 
                                id={data.id}
                                type='text'
                                autoFocus
                                value={value}
                                color={color}
                                onChange={changeHandler}
                                onBlur={() => stopEdit(data.id)}
                                onKeyDown={(e) => onEnterHandler(e, stopEdit, data.id)} />
                        </li>
    ));

    function startEdit(id) {
        setDatas(datas.map(data => {
            if (data.id === id) {
                data={...data, active: true}
                setValue(data.text);
            } 
            return data;
        }));

    }
    function changeHandler(e){
        setValue(e.target.value);
        console.log(value);
    }

    function stopEdit(id) {
        if (value.length > 0) {
            setDatas(datas.map(data => data.id === id ? {...data, text: value, active: false} : data));
            setValue('');
        } else {
            deleteLine(id);
        }
        
    }
    function deleteLine(id) {
        setDatas(datas.filter(data => data.id !== id))
    }

    function onEnterHandler(e, cb, id) {
        if (e.key === 'Enter') {
            e.preventDefault();
            cb(id);
        }
    }

    function addLine() {
        setDatas([...datas, {
            id: createID(),
            text:'',
            active: true
        }])
    }
    

    

    return (
        <Container>
        <Button text='Добавить пункт' type='button' color={color} handler={addLine}/>
        <List>
        {notes}
        </List>
        </Container>
    )
}