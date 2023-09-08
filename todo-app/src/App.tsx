import { useEffect, useState, useCallback } from 'react';
import { todo } from './types';
import AllTodos from './components/AllTodos';
import ActiveTodos from './components/ActiveTodos';
import CompleteTodos from './components/CompletedTodos';
import { v4 as uuidv4 } from 'uuid';
import todoData from '../todoData'  
 
 
function App() { 
  const [adding, setAdding] = useState(false)
  const generateId: string = uuidv4();
  const [tab, setTab] = useState(0);
  const [todos, setTodos] = useState<todo[]>(todoData); 
  const [todo, setTodo] = useState('');

  async function getAllTodos() {  
    setTodos(todoData) 
  }

  useEffect(() => {
    getAllTodos()
  }, [])
 
  const handleTodo = useCallback(async(todo: todo) => {
       
    setTodos(prev => (
      prev.flatMap(todoo => {
      if(todoo.id == todo.id ){
          return {
            ...todoo,
            completed: !todoo.completed
          }
        }else{
          return todoo
        }
      })
    ))  
  }, []);

  const handleDelete = async(id: number | string) => { 
    setTodos(prev => (prev.filter(todoo => todoo.id != id))) 
  }

  const handleDeleteAll = async() => {  
    setTodos(prev => (prev.filter(todo => todo.completed == false))); 
  } 
 

  return (
    <> 
      <main>
        <h1 className="text-[#333] text-center text-[36px] mt-[32px] font-bold leading-normal tracking-[-1.62px] not-italic ">#todo</h1>
        <nav className="nav relative">
          <button onClick={() => setTab(0)} className={`nav__button ${tab == 0 && "bottom__underline"} hover:bottom__underline`}>All</button>
          <button onClick={() => setTab(1)} className={`nav__button ${tab == 1 && "bottom__underline"} hover:bottom__underline`}>Active</button>
          <button onClick={() => setTab(2)} className={`nav__button ${tab == 2 && "bottom__underline"} hover:bottom__underline`}>Completed</button> 
        </nav>

        <div className='max-w-[608px] mx-auto mt-[18px]'>
          <div className='flex w-full mb-5 gap-x-[25px] '>
            <input 
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              type='text'
              placeholder='add details'
              className='w-[476px] px-[20px] py-[10px] border-[#BDBDBD] border-[1px] rounded-[12px]'
            />
            <button 
              className='bg-[#2F80ED] disabled:bg-[#1d559e98] px-[20px] py-[10px] text-white rounded-[12px] w-[109px] text-[14px] font-semibold'
              onClick={async() => { 
                setAdding(true)
                const newTodo = {
                  "todo": todo,
                  "id": generateId,
                  "completed": false
                }

                setTodos(prev => ([newTodo, ...prev]))
                setTodo("");
                setAdding(false)
              }}
              disabled={adding || !todo}
            >
              {adding ? "Adding" : "Add"}
            </button>
          </div>
 
          {tab == 0 ? 
            <AllTodos todos={todos} handleTodo={handleTodo} /> : 
            tab == 1 ?
            <ActiveTodos handleTodo={handleTodo} todos={todos.filter(todo => todo.completed == false)} /> :
            <CompleteTodos 
              handleTodo={handleTodo} 
              todos={todos.filter(todo => todo.completed == true)} 
              handleDelete={handleDelete}  
              handleDeleteAll={handleDeleteAll}
            /> 
          }
        </div>
      </main>
    </>
  )
}

export default App
