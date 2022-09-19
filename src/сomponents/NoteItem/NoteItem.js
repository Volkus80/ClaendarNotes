import styled from 'styled-components';
import NoteData from '../NoteData/NoteData';

const Container = styled.div`
    width: 100vw;
    height:100vh;
    position: fixed;
    left:0;
    top: 0;
    background-color:rgba(127, 183, 231, 0.808);
    display: ${props => props.hidden ?'none':'flex'};
    align-items: center;
    justify-content: center;
    z-index: 30;
`;

const Note = styled.div`
    position: relative;
    padding-top: 20px;
    width: 80vw;
    min-height: 80vh;
    background-color: ${props => props.color};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
       
`;

const Close = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 10px;
    right: 5px;
    text-align: center;
    line-height: 16px;
    border: solid white 2px;
    border-radius: 50%;
    font-size: 20px;
    color: white;
    cursor: pointer;
`;

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;    
`;
const Data = styled.p`
    color: #fff;
    font-size: 1.5rem;
    padding: 10px;
    &:not(:last-child) {
        border-right: solid #fff 2px;
        margin-left: 10px;
    }
`;



export default function NoteItem({date, month, year, hidden, closeNote, datas, setDatas, id, color}) {
    return (
        <Container hidden={hidden}>
            <Note color={color}>
                <Close onClick={closeNote}>x</Close>
                <DataContainer>
                    <Data>{date}</Data>
                    <Data>{month}</Data>
                    <Data>{year}</Data>
                </DataContainer>
                <NoteData datas={datas}
                          setDatas={setDatas}
                          id={id}
                          color={color}  />

            </Note>
        </Container>
    )
}


