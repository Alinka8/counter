import React,{useState} from 'react'
import "./counterTen.style.css"

const CounterTen = () => {

    const [countTen, setCountTen] = useState(0)

    const minusTen=()=>{
        setCountTen(countTen-10)
    }
    const plusTen=()=>{
        setCountTen(countTen+10)
    }
const showMax = ()=>{
    if (countTen === 100){
        return <p>Reached max!</p>
    } else if (countTen < 0){
        return <p>Reached min!</p>
    } else if (countTen <=100 && countTen >10)
return <p>continue...</p>
}

  return (
    <div className='button-component'>
        <button onClick={minusTen}>-</button>
        <p>{countTen}</p>
        <button onClick={plusTen}>+</button>
        <p>{showMax()}</p>
    </div>
  )
}

export default CounterTen