import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import ProfilePicture from "./ProfilePicture.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
import MyComponent2 from "./MyComponent2.jsx"
import ColorPicker from "./ColorPicker.jsx"
import Counter2 from "./Counter2.jsx"
import MyComponent3 from "./MyComponent3.jsx"
import MyComponent4 from "./MyComponent4.jsx"
import MyComponent5 from "./MyComponent5.jsx"
import ToDoList from "./ToDoList.jsx"
function App() {
  const fruits = [ {id: 1, name:"apple" , calories: 95} ,
                   {id: 2, name:"banana" , calories: 105} ,
                   {id: 3, name:"orange" , calories: 45} ,
                   {id: 4, name:"pineapple" , calories: 37} ,
                   {id: 5, name:"coconut" , calories: 159}];
  const vegetables = [ {id: 1, name:"potato" , calories: 95} ,
                       {id: 2, name:"celery" , calories: 105} ,
                       {id: 3, name:"carrot" , calories: 45} ,
                       {id: 4, name:"corn" , calories: 37} ,
                       {id: 5, name:"broccoli" , calories: 159}];  
  return(
    <>
      {/* <Header/> */}
      {/* <Food/> */}
      <UserGreeting isLoggedIn={true} username="Roshith"></UserGreeting>
      <Card title="Roshith" text="I develop applications and I play games" src="https://i.pinimg.com/originals/67/2d/7b/672d7bf122e5af53a37819ef4c5188ef.jpg" />
      <Card title="Rohith" text="I calculate the earnings and I play games" src="https://i.pinimg.com/originals/67/2d/7b/672d7bf122e5af53a37819ef4c5188ef.jpg"/>
      <br></br>
      <Button/>
      <br></br>
      {/* <Card/> */}
      {/* <Student name="SpongeBob" age={30} isStudent={true}></Student> */}
      {/* <Student name="Patrick" age={42} isStudent={false}></Student> */}
      {/* <Student name="Squidward" age={50} isStudent={false}></Student> */}
      {/* <Student/> */}
      {/* <Footer/> */}
      {/* <List/> */}
      {fruits.length > 0 && <List items={fruits} category = "Fruits"/>}
      
      {vegetables.length > 0 && <List items={vegetables} category = "Vegetables"/>}
      <ProfilePicture/>
      <MyComponent/>
      <MyComponent2/>
      <Counter/>
      <ColorPicker/>
      <Counter2/>
      <MyComponent3/>  
      <MyComponent4/> 
      <MyComponent5/>  
      <ToDoList/>      
      
    </>
  );
}

export default App
