import React, {useState} from "react";
function ToDoList()
{
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e)
    {
        setNewTask(t=>(e.target.value));
    }     
    function addTask()
    {
        // const newTask1 = {task: newTask};
        // setFoods(f=>[...f, newFood])
        if ( newTask.trim() !== "" ) {
        setTasks(c=>[...c, newTask]) 
        }
        setNewTask(m=>"");
        
    }
    function deleteTask(index)
    {
        const updatedTasks = tasks.filter((_, i)=> i!== index) ;
        // setTasks(tasks.filter((_,i)=>i !== index))
        setTasks(updatedTasks);
    }
    function moveTaskUp(index)
    {
        if(index > 0)
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index - 1]] = 
            [updatedTasks[index - 1] , updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index)
    {
        if(index < tasks.length -1)
            {
                const updatedTasks = [...tasks];
                [updatedTasks[index] , updatedTasks[index + 1]] = 
                [updatedTasks[index + 1] , updatedTasks[index]];
                setTasks(updatedTasks);
            }
    }

    return(
        <div className="toDoList">
            <h1 className="toDoList-heading"> To Do List </h1>
            <div>
                <input type="text" 
                 value={newTask} 
                 onChange={handleInputChange} 
                 className="toDoList-input"
                 placeholder="Enter a task"/>
                <button className="toDoList-add" 
                 onClick={addTask}> 
                 Add
                </button>
            </div>
            <ol className="toDoList-ol">
                {tasks.map((task,index)=>
                 <li key={index} className="toDoList-li">
                    <span className="toDoList-task">{task}</span>
                    <button className="toDoList-delete" onClick={()=> deleteTask(index)}> 🗑</button>
                    <button className="toDoList-move" onClick={()=> moveTaskUp(index)}>🔼 </button>
                    <button className="toDoList-move" onClick={()=> moveTaskDown(index)}> 🔽 </button>
                 </li> )
                }
            </ol>
            {/* <ul>
                {cars.map((car,index)=> 
                <li key={index} onClick={()=>handleRemoveCar(index)}>
                     {car.year} {car.make} {car.model}
                </li> ) }
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/><br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model"/><br/>
            <button onClick={handleAddCar}> Add Car</button> */}
        </div>
    );
}

export default ToDoList