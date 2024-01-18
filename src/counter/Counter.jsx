import React, {useState} from "react";
import './counter.style.css';


const Counter =(props)=> {


  const [count, setCount] = useState(0)

  const onMinusClick=()=>{
    if (count>0){
   setCount(count-props.sumadd)
  }
}
  const onPlusClick=()=>{
    if (count <props.sumadd*10){
    setCount(count+props.sumadd)
  }
}

// const showMessage=()=>{
//   if (count < 10 && count > 0){
//     return <p>Keep it going</p>
//   } else if (count === 10){
//     return<p>Reached max!</p>

//   }else if (!count){
//     return <p>Reached Min!</p>
//   }
// }

const showMessage=()=>{
  switch (count){
    case 10:
      return <p>Reached max!</p>
    
      case 0:
        return <p>Reached min!</p>
     
        default:
          return <p>keep it going..</p>
  }


}
  return (
    <>
    <div className="counter">
    <div className="button-group">
   <button onClick={onMinusClick }>-</button>
   <p>{count}</p>
   <button onClick={onPlusClick}>+</button>
 
    </div>
    {/* {count === 10 && count !==0 ? <p> reached max count! </p> : <p>keep going...</p>}
    {count === 0  ? <p>You reached min count</p> :<p>keep going...</p>} */}
    {showMessage()}
    </div>
   
    </>
  );
}

export default Counter;
