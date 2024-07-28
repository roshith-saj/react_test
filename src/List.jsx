import PropTypes from 'prop-types'
function List(props)
{
    // const fruits = [ {id: 1, name:"apple" , calories: 95} ,
    //                  {id: 2, name:"banana" , calories: 105} ,
    //                  {id: 3, name:"orange" , calories: 45} ,
    //                  {id: 4, name:"pineapple" , calories: 37} ,
    //                  {id: 5, name:"coconut" , calories: 159}];

    // const fruits = [ "apple", "banana", "pineapple", "orange",  "coconut"];
    
    // fruits.sort((a,b) => a.name.localeCompare(b.name));   //Alphabetical ascending   
    // fruits.sort((a,b) => b.name.localeCompare(a.name));   //Alphabetical descending      
    // fruits.sort((a,b) => a.calories - b.calories);   //Numeric ascending  
    // fruits.sort((a,b) => b.calories - a.calories);   //Numeric descending  
     
    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                       <b>{fruit.name}:</b> &nbsp; 
    //                                       {fruit.calories}</li>)
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);
    const itemsList = props.items;
    itemsList.sort((a,b) => a.name.localeCompare(b.name));   //Alphabetical ascending  
    const listItems = itemsList.map(item => <li key={item.id}>
        <b>{item.name}:</b> &nbsp; 
        {item.calories}</li>)


    return(<>
           <h3 className="list-category">{props.category}</h3>
           <ul className="list-items">{listItems}</ul>
           </>);
    // return (fruits)
}

List.defaultProps = {
    items : [],
    category : "Category",
}

List.propTypes = {
    category: PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                              name:PropTypes.string,
                                              _calories: PropTypes.string }))

}

export default List