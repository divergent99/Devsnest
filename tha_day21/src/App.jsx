import './App.css';
import React,{ useState } from 'react';

const Todo = ({todo,todos,setTodos,index}) =>
{
  return(
  <div className="card">
  <h1>{todo}</h1> 
  <button
  onClick={()=>
    {
      console.log("Delete",todo);
      const newTodos = todos.filter((el,i)=> i!== index);
      setTodos(newTodos);
    }
  }>
    Delete
    </button>
    </div>
  );
}
function App(props) {
  const [value,setValue] = useState("");
  const [value2,setValue2] = useState("");
  const [todos,setTodos] = useState(["Complete THA_Day 18","Complete THA_Day 19","Complete THA_Day 20"]); 
  return (
    <div className="App">
      <input placeholder="Enter Your Stuff" type="text" onChange={(e)=>
      {
        setValue(e.target.value)
      }}
      value={value}
      />
      <input placeholder="Enter Calorie" type="text" onChange={(e)=>
      {
        setValue2(e.target.value2)
      }}
      value2={value2}
      />

      <button onClick={()=>
        {
          setTodos([...todos,value,value2]);
          setValue("");
          setValue2("");
        }}>Add</button>

      {todos.map((todo,index)=> (
       <Todo key={index} todo={todo} todos={todos} setTodos ={setTodos} index={index}/>
      ))}

     </div>
  );
}

export default App;
