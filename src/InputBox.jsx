
function InputBox({
    todoName,
    OnTodoNameChange }) {

    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
                Todo List
            </h1>
            <input id="todo-input" type="text" placeholder="Enter the new todo"
                className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={todoName}
                onChange={(e) => {
                    OnTodoNameChange(e.target.value)
                }}
            />
        </>
    )
}

export default InputBox