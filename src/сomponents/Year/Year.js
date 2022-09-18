import styled from './Year.module.css';



export default function Year({year, increase, decrease, yearEnterHandler, changeHandler, blurHandler}) {
    return (
        <div className={styled.container}>
            <span 
                className='icon-minus'
                onClick={decrease}></span>
            <input type="text" 
                value={year} 
                className={styled.input} 
                onChange={changeHandler}
                onKeyDown={yearEnterHandler}
                onBlur={blurHandler}
                />
            <span 
                className='icon-plus' 
                onClick={increase}></span>
        </div>
    )

}