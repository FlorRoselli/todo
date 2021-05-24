import './App.css';
import './style.css'
import {useEffect, useState} from 'react'
import create from './services/create';
import read from './services/read';
import TodoContainer from './components/TodoContainer';
import CreateTodo from './components/CreateTodo';
import deleteTask from './services/delete';
import {setValue} from 'react-hook-form'


function App() {

  const [data, setData] = useState([])
  const [taskToCreate, setTaskToCreate] = useState(null)
  const [taskToDelete, setTaskToDelete] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
 


  useEffect(() => {
    read().then(data => {
      setData(data.todos)
    })
  }, [])

  useEffect(() => {
    if (taskToCreate) {
      setIsLoading(true)
      create(taskToCreate).then(
        res => {
        setData(prev => [res.data, ...prev])
        setIsLoading(false)
      }, 
      err => {
        console.error(err)
        setIsLoading(false)
      })
    }
  }, [taskToCreate])

  useEffect(() => {
    if (taskToDelete) {
      setIsLoading(true)
      deleteTask(taskToDelete).then(res => {
        setData(prev => {
          return prev.filter(value => value.id !== taskToDelete)
        })
        setIsLoading(false)
      },
      err => {
        console.error(err)
        setIsLoading(false)
      })
    }
  }, [taskToDelete])


  const handleCreate = values => {
    setTaskToCreate(values)
  }

  const handleDelete = id => {
    setTaskToDelete(id)
  }

  const list = data.map(todo => (
  <TodoContainer  
     task={todo.task} 
     student={todo.student} 
     key={todo.id} 
     id={todo.id}
     handleDelete={handleDelete}
     />
  ))

  return (
    <div className="App">
      <header className="App-header">
        <div className ="container">
        <p className="title">To Do</p>
        </div>
        <div className="row">
        { isLoading ? 'Please Wait' : (<>
          <CreateTodo 
            handleCreate={handleCreate}
          />
          <div className="list col-md-6 col-lg-4  aling-items-center min-h-100vh">
          <div className="tasks">
          <h3>Tasks</h3>
          </div>
          <div>
        {list}
        </div>
         </div>
          </>
        )}
        </div>
      </header>
    </div>
  );
}

export default App;
