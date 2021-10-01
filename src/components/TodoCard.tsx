import { TodoProps } from "../types"

export const TodoCard = ({todo: {task, isCompleted,id},handleDeleteTodo,handleCompleteCheck}: TodoProps)=>(
    <div className={'flex w-96 p-4 mb-2 justify-between items-center '+(isCompleted ? "bg-gray-400" : "bg-green-300")}>
        <p className={"ml-2 text-xl font-sans font-medium "+(isCompleted ?'text-white line-through':'text-grey-700')}>{task}</p>
        <div className={'flex space-x-2 justify-between items-center '}>
            <button className={' h-7 bg-red-800 flex justify-center items-center'} onClick={()=>handleDeleteTodo(id)}>
                <span className={'w-7 '}>X</span>
            </button>
            <input type="checkbox" checked={isCompleted} onChange={()=>handleCompleteCheck(id)} className="active:shadow-none form-checkbox h-7 w-7" />
        </div>
    </div>
)