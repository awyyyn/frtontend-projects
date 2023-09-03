 
import { todo } from '../types'

interface props  {
    todos?: todo[]
    handleTodo: (todo: todo) => void
}

const AllTodos = ({todos, handleTodo}: props) => { 


    return (
        <>
            {todos?.map((todo, i) => (
                <div onClick={() => handleTodo(todo)} key={i} className={`flex my-2 ${todo.completed ? 'text-gray-300 hover:shadow-sm line-through' : 'hover:shadow-lg'} shadow-sm  cursor-pointer py-5 gap-x-4 rounded-lg px-[20px]`} >
                <input 
                    checked={todo.completed} 
                    name={todo.todo} 
                    className='accent-[#2F80ED] cursor-pointer' 
                    type='checkbox'  
                    onChange={() => {() => handleTodo(todo)}}
                />
                <p className='text-lg'>
                    {todo.todo}
                </p>
                </div>
            ))}
        </>
    )
}

export default AllTodos
