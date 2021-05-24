import '../style.css'

const TodoContainer = ({task, student, id, handleDelete }) => {
    return (
        <div>
            <p><span>To do: </span>{task}</p>
            <p><span>By: </span>{student}</p>
            <button className="btn" onClick={() => handleDelete(id) }>Delete task</button>
        </div>
    )
}

export default TodoContainer