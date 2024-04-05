import React, { useState } from 'react'

const Todolist = () => {
    const[todo,setTodo]=useState([])
    const[input,setInput]=useState('')

    function handelchange(e){
        setInput(e.target.value)
    }
    function handelsbmit(e){
        e.preventDefault()
        setTodo([...todo,input])
        setInput('')
    }
    function handeldelete(e){
        const newtodo=[...todo]
        newtodo.splice(e,1)
        setTodo(newtodo)
    }


  return (
    <div>
        <h1>Todolist</h1>
        <form action="">
            <input type="text" value={input} onChange={handelchange}/>
            <button onClick={handelsbmit}>Add todo</button>
        </form>
        <ul>
            {todo.map((t,i)=>{
               return <li key={i}>
                    {t}
                    <button onClick={handeldelete}>Delete</button>
                </li>
})}
        </ul>
    </div>
  )
}

export default Todolist