import { useForm } from "react-hook-form"
import "../style.css"

const CreateTodo = ({ handleCreate }) => {

    const { handleSubmit, register } = useForm()

    const onSubmit = values => {
        handleCreate(values)
    }

    return (
        <form className="col-md-6 col-lg-4  aling-items-center min-h-100vh"
          onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
            <h2>Create a new task</h2>
            <div className="task">
                <label htmlFor="task">Task: </label>
                <input 
                  type="text" 
                  id="task" 
                  placeholder=" Name of task"
                  {...register('task', { required: true })}
                />
            </div>
            <div className="student">
                <label htmlFor="student">Student: </label>
                <input 
                  type="text" 
                  id="student" 
                  placeholder=" Student Name"
                  {...register('student', { required: true })}
                />
            </div>
            <button className="btn-primary">New Task</button>
            </div>
        </form>
    )
}

export default CreateTodo