import { useState } from "react"
import Todo from "./todo"
import './todoApp.css'

export default function TodoApp () {
     const [title, setTitle] = useState ('Escribe tu primer tarea del dia aquí')
     const [todos, setTodos] = useState([])
    
     function handleChange(event) {
    const value= event.target.value
    setTitle(value)
     }
     function handleSubmit (e) {
        e.preventDefault()

        const newTodo={
            id:crypto.randomUUID(),
            title:title,
            completed:false,
        } 
        const temp = [ ... todos]
        temp.unshift(newTodo)

        setTodos(temp)
        setTitle('')
     }

     function handleUpdate(id, value){
        const temp = [ ... todos]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTodos (temp)

     }
     
     function handleDelete (id) {
        const temp = todos.filter(item => item.id !== id)
        setTodos(temp)
        
         
     }

    return (
    <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit} >
                <input className="todoinput" onChange={handleChange} value={title} />
                <input className="buttonCreate"  onClick={handleSubmit} type="submit" value="create todo" />
            </form>

            <div className="todosContainer">
                {todos.map((item) => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                      
                    ))}
            </div>
        </div>
    )
}