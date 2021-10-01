import { useDispatch } from "react-redux"
import { ReactComponent as PlusIcon } from "../assets/plus.svg"
import { AddTodoProps, Todo } from "../types"
import { FormEvent } from "react"



 export const AddTodo= ({task,handleChange,handleSubmitTodo}:AddTodoProps)=>{
     


    //  const onSubmit = (e:FormEvent)=>{
    //      e.preventDefault
    //      dispatch(addTodo("tzetzett"))
    //  }
    
    return(
    <form onSubmit={handleSubmitTodo} className={"flex justify-between w-full"}>
        <input type="text" name="task" value={task} onChange={handleChange} className={"flex-1 rounded shadow p-2 text-grey-dark"}/>
        <button type="submit" aria-label="Add Todo" >
            <PlusIcon/>
        </button>
    </form>
 )}