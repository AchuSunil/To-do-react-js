
import './App.css'
import {useState} from 'react'


function App() {
  const [toDosList,setToDosList] = useState([])
  const [toDoInput,setToDoInput] = useState('')
  
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Just Make Your To-Do List 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDoInput} onChange={(e)=>setToDoInput(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          setToDosList([...toDosList,{id:Date.now(),text:toDoInput,status:false}])
          setToDoInput('')
          }}
          className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDosList.map((obj)=>{

          
         return( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setToDosList(toDosList.filter(obj2=>{
                if(obj2.id === obj.id){
                  obj2.status = e.target.checked
                }
                return obj2
              }))
            }} type="checkbox" name='' id='' />
            <p>{obj.text}</p>
          </div>
          <div className="right">
           <i onClick={(e)=>{
                setToDosList(toDosList.filter(obj2 => {
                  let temp;
                  if (obj2.id !== obj.id){
                    temp = obj2
                  }
                  return temp;
                }));
              }} className="fas fa-times"></i>
          </div>
        </div>)
      })
        }
        {toDosList.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
        })}
        </div>
        </div>
  );
}

export default App;
