import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4} from 'uuid'
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
function App() {
  const [tab, setTab] = useState([{task:"Ahmed",id:uuidv4()},{task:"Ksia",id:uuidv4()},{task:"Houcem",id:uuidv4()},{task:"Mariem",id:uuidv4()}]);
  const [input, setInput] = useState("");
  // const [showEdit,setShowEdit] = useState(false);
  const [todoediting, setTodoediting] = useState(null);
  const [editingtext, seteditingtext] = useState("");

  const addNewTab=(e)=>{
    setTab([...tab,{task:input,id:uuidv4()}]);
  }
  function deleteTodo(id) {
    let updatedTodos = tab.filter((el) => el.id !== id);
    setTab(updatedTodos);
  }
  function submitEdits(id) {
    const updatedTodos = [...tab].map((todo) => {
      if (todo.id === id) {
        todo.task = editingtext;
      }
      return todo;
    });
    setTab(updatedTodos);
    setTodoediting(null);
  }

  return (
    <div className="container">
      <div className="header">Todo App</div>
      <br></br>
      <div>
       <div className="common"><input type="text"  placeholder="Enter task" onChange={(e)=>setInput(e.target.value)}/><div><button className="add" onClick={addNewTab} >ADD</button></div></div> 
       <div className="tableau">
       <br></br>
       <div className="todos">
       {/* {showEdit ? <h1>Hello!</h1> :<> {tab.map(el=>
        <div className="tabs">
          <div><h3>{el.task}</h3></div>
          <div><button className="delete" onClick={() => deleteTodo(el.id)} ><RiDeleteBin6Line/></button>
          <button className="edit" onClick={()=>setShowEdit(true)}><AiFillEdit/></button>
        </div>
        </div>
        
          )}</>} */}
          {tab.map(el=>
        <div className="tabs">
          {todoediting===el.id ? 
          (<input
          type="text"
          onChange={(e)=>seteditingtext(e.target.value)}
          />) 
          :
          (<div><h3>{el.task}</h3></div>)}
          
          <div className="buttons">
          {el.id === todoediting ? (
            <button className="edit" onClick={() => submitEdits(el.id)}><MdOutlineDone/></button>
            ) : (
              <div>
              <button className="edit" onClick={()=>setTodoediting(el.id)}><AiFillEdit/></button>
              <button className="delete" onClick={() => deleteTodo(el.id)} ><RiDeleteBin6Line/></button>
              </div>
            )}
          
          
          
          
          
        </div>
        </div>
        
          )}
          </div>
      
      </div>




     </div>
    </div>
  );
}
export default App;
