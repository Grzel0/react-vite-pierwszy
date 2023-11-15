import { useState } from "react"

const tasks = [
    {id:1, text:"zadanie 1"},
    {id:2, text:"zadanie 2"},
    {id:3, text:"zadanie 3"},
    {id:4, text:"zadanie 4"},
    {id:5, text:"zadanie 5"},
]


const ToDO = ()=>{
    const [todos, setToDos] = useState(tasks)

    const removeTaskHandler = (taskId) =>{
        const newTasks = todos.filter( (t) => t.id !== taskId)
        setToDos(newTasks)
    }
    function addTaskHandler(){
        let newTask={
            id: Math.random().toString().substring(),
            text: "Nowe zadanie do zrobienia"
        }
    }
    
    return(
        <>
        <h1>Jestem z komponentu ToDo</h1>
        <ul>
            {
                tasks.map( t =>(
                    <li style={ {color:"red", fontSize:"20px", marginBottom:"10px", backgroundColor:"blue"} }key={t.id}>
                        <span>
                            {t.text}
                        </span>
                        <button onClick={ () => removeTaskHandler(t.id)}>usuń zadanie</button>
                    </li>
                )) 
            }
        </ul>
        <button style={ {margin:"10px", backgroundColor:"red"} } onClick={addTaskHandler}>Dodaj nbowe zadanie</button>
        </>
    )
    
}

export default ToDO