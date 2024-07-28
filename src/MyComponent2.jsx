import React, {useState} from "react";
function MyComponent2()
{
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();
    // const [age, setAge] = useState(0);
    // const [isEmployed, setIsEmployed] = useState(false);
    // const updateName = ()=> {
    //     setName("SpongeBob");
    // }
    // const incrementAge = ()=> {
    //     setAge(age+1);
    // }
    
    // const toggleEmployedStatus = ()=> {
    //     setIsEmployed(!isEmployed);
    // }
    function handleNameChange(e)
    {
        setName(e.target.value);
    }
    function handleQuantityChange(e)
    {
        setQuantity(e.target.value);
    }
    function handleCommentChange(e)
    {
        setComment(e.target.value);
    }
    function handlePaymentChange(e)
    {
        setPayment(e.target.value);
    }
    function handleShippingChange(e)
    {
        setShipping(e.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Additional Delivery Instructions"/>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="VISA">VISA</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value="Pick Up" 
                checked={shipping==="Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" 
                checked={shipping==="Delivery"} onChange={handleShippingChange}/>   
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
            

            {/* <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Is Employed: { isEmployed? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button> */}
        </div>
    );
}

export default MyComponent2