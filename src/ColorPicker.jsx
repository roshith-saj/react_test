import React,{useState} from 'react';

function ColorPicker(){
    const[color,setColor] = useState('#FFFFFF');
    function handleColorChange(e)
    {
        setColor(e.target.value);
    }

    return(
        <div className='colorPickerContainer'>
            <h1>Color Picker</h1>
            <div className='colorDisplay' style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
            </div>
            <label>Select a color</label>
            <input type='color' value={color} onChange={handleColorChange}/>
            
        </div>
    )

}

export default ColorPicker