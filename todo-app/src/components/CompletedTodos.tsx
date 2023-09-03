  
import { todo } from '../types'

interface props  {
    todos: todo[]
    handleTodo: (todo: todo) => void
    handleDelete: (id: number | string) => void
    handleDeleteAll: (todos: todo[]) => void
}

const CompleteTodos = ({todos, handleTodo, handleDelete, handleDeleteAll}: props) => {  

    return (
        <>
            {todos?.map((todo, i) => (
                <div key={i} className={`flex my-2 justify-between ${todo.completed ? 'text-gray-300 hover:shadow-sm line-through' : 'hover:shadow-lg'} shadow-sm  cursor-pointer py-5  rounded-lg px-[20px]`} >
                    <div className='flex gap-x-4'>
                        <input 
                            checked={todo.completed} 
                            name={todo.todo} 
                            className='accent-[#2F80ED] cursor-pointer' 
                            type='checkbox'  
                            onChange={() => handleTodo(todo)}
                        />
                        <p className='text-lg'>
                            {todo.todo}
                        </p>
                    </div>
                    <button

                        onClick={() => handleDelete(todo.id)}
                        className='rounded-full hover:bg-[#EB5757] p-2 group z-50'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#BDBDBD" className="w-6 h-6 group-hover:stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg> 
                    </button>
                </div>
            ))}
            <div className='flex justify-end '>
                <button 
                    onClick={() => handleDeleteAll(todos)}
                    disabled={todos?.length ? false : true} 
                    className={`disabled:bg-[#704242] disabled:cursor-not-allowed bg-[#EB5757] rounded-[4px] w-[124px] items-center flex justify-center py-[12px] mt-[34px] gap-x-[3px]`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFF" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg> 
                    <span className='text-white'>Delete All</span>
                </button>                
            </div>
        </>
    )
}

export default CompleteTodos
