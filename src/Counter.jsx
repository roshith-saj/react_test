import React,{useState} from 'react';
function Counter()
{
    const[count,setCount] = useState(0);
    const incrementCount = ()=> {
        setCount(count+1)
    }
    const decrementCount = ()=> {
        setCount(count-1)
    }
    const resetCount = ()=> {
        setCount(0)
    }
    return(
        <div className='counter-container'>
            <p className='count'> {count}</p>
            <button onClick={decrementCount} className='countButton'>Decrease</button>
            <button onClick={resetCount} className='countButton'>Reset</button>
            <button onClick={incrementCount} className='countButton'>Increase</button>
        </div>
    )
}

export default Counter