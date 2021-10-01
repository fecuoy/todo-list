import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../types'
import { AddTodo } from './Add'
import{db} from '../firebase'
import{  TodoCard } from './TodoCard'

export const Todos = ()=>{
    const [todos, setTodos] = useState<Todo[]>()
    const [task, setTask] = useState("")
    
    useEffect(() => {
        db.get().then((data)=>{
            const initTodo = data.docs.map((todo)=>{
                const dataTodo : Todo = {
                    id:todo.get('id'),
                    isCompleted:todo.get('isCompleted'),
                    task:todo.get('task'),
                    
                }
                
                return(
                    dataTodo
                )
            })
            setTodos(initTodo)
        })
        
        return () => {
            
        }
    }, [])

    //Delete
    const handleDeleteTodo =(id: string)=>{
        const updateTodos = todos?.filter((todo) => todo.id != id)
        db.doc(id).delete()
        setTodos(updateTodos)

    }

    //CheckBox changer
    const handleCompleteCheck = (id:string)=>{
        
        const updateTodos = todos?.map( (todo)=>{
            if(todo.id == id){
                 db.doc(id).update({isCompleted: !todo.isCompleted})
                
            return{
                ...todo,
                isCompleted:!todo.isCompleted
            }}
            return todo
            
        })
        
       
        
        setTodos(updateTodos)
        
         
    }


    //ChangeInpute new addTodo
    const handleChange = (e:ChangeEvent)=>{
        const {value} = e.target as HTMLInputElement
        setTask(value)
    }


    //add New Todo 
    const handleAddTodo= (todo:Todo)=>{
        const updatedTodos = [...todos!,todo]
        setTodos(updatedTodos)
        setTask("")
        db.doc(todo.id).set(todo)
    }

    //handle submiteTodo form
    const handleSubmitTodo=(e:FormEvent)=>{
        e.preventDefault()
        const todo : Todo = {
            id: uuidv4(),
            task:task,
            isCompleted:false
        }
        task.trim() && handleAddTodo(todo)
    }
    

    return(
        <section className={"w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center "}>
            <div className={"mb-8"}>
                <AddTodo task={task} handleChange={handleChange} handleSubmitTodo={handleSubmitTodo} />
            </div>
            <div className={"h-10"}>
                {todos!== undefined && todos.map((todo)=>(
                <TodoCard key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompleteCheck={handleCompleteCheck}/>
            ))}
            </div>
        </section>
    )

}