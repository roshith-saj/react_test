import React, {useState} from "react";
function MyComponent3()
{
    const [car, setCar] = useState({year:2024 ,
                                    make:"Ford" ,
                                    model:"Mustang" });

    // function handleYearChange(e)
    // {
    //     setCar({...car, year: e.target.value});
    // }
    // function handleMakeChange(e)
    // {
    //     setCar({...car, make: e.target.value});
    // }
    // function handleModelChange(e)
    // {
    //     setCar({...car, model: e.target.value});
    // }
// Using setter functions rewrite:
    
    function handleYearChange(e)
    {
        setCar(c=>({...car, year: e.target.value}));
    }
    function handleMakeChange(e)
    {
        setCar(c=>({...car, make: e.target.value}));
    }
    function handleModelChange(e)
    {
        setCar(c=>({...car, model: e.target.value}));
    }
    return(
        <div>
             <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    );
}

export default MyComponent3