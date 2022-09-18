import styled from './Month.module.css';
import './style.css';
  

export const monthes = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
];


export default function Month({month, increase, decrease}) {
    return (
        <div className={styled.container}>
            <span 
                className='icon-minus'
                onClick={decrease}></span>
            <input type="text" 
                value={monthes[month]} 
                className={styled.input} 
                disabled/>
            <span 
                className='icon-plus' 
                onClick={increase}></span>
        </div>
    )

}