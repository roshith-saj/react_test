import React, {useState} from "react";
function MyComponent5()
{
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState();
    const [carModel, setCarModel] = useState();
    
    function handleAddCar()
    {
        const newCar = {year: carYear, 
                        make: carMake, 
                        model: carModel};
        // setFoods(f=>[...f, newFood])
        if ( carMake.length > 0 && carModel.length >0 ) {
        setCars(c=>[...c, newCar]) 
        }
        setCarYear(y=>new Date().getFullYear());
        setCarMake(m=>"");
        setCarModel(m=>"");
        
    }
    function handleRemoveCar(index)
    {
        setCars(cars.filter((_,i)=>i !== index))
    }
    function handleYearChange(e)
    {
        setCarYear(y=>(e.target.value));
    }
    function handleMakeChange(e)
    {
        setCarMake(m=>(e.target.value));
    }
    function handleModelChange(e)
    {
        setCarModel(m=>(e.target.value));
    }
    return(
        <div>
            <h2> List of car objects </h2>
            <ul>
                {cars.map((car,index)=> 
                <li key={index} onClick={()=>handleRemoveCar(index)}>
                     {car.year} {car.make} {car.model}
                </li> ) }
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/><br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model"/><br/>
            <button onClick={handleAddCar}> Add Car</button>
        </div>
    );
}

export default MyComponent5