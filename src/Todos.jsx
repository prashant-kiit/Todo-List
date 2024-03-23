import EditPopUp from "./EditPopUp"

function Todos({
    event,
    OnEventChange, }) {
    console.log('Todos Refreshed')
    // const [event2, setEvent2] = useState('INACTIVE')

    OnEventChange('RECEIVED')
    console.log(event)

    const todosString = localStorage.getItem('todoList')
    const todosArray = JSON.parse(todosString)
    console.log('Current Todos Array')
    console.log(todosArray)

    const changeIsTodoDone = (index) => {
        const todosString = localStorage.getItem('todoList')
        const todosArray = JSON.parse(todosString)
        console.log('Old Todos Array')
        console.log(todosArray)
        let tempIsTodoDone = todosArray[index].isTodoDone_
        todosArray[index].isTodoDone_ = !tempIsTodoDone
        console.log('New Todos Array')
        console.log(todosArray)
        const newtodosString = JSON.stringify(todosArray)
        localStorage.setItem('todoList', newtodosString)
    }

    const deleteTodo = (index) => {
        const todosString = localStorage.getItem('todoList')
        const todosArray = JSON.parse(todosString)
        todosArray.splice(index, 1)
        const newtodosString = JSON.stringify(todosArray)
        localStorage.setItem('todoList', newtodosString)
    }

    const TodosJSX = todosArray.map((todoObject) => {
        console.log('Current Todo in .map()')
        console.log(todoObject)
        // const [isTodoDone, setIsTodoDone] = useState(todoObject.isTodoDone_)
        // all todos should be unique
        // use useId() hook
        const index = todosArray.indexOf(todoObject)
        return (
            <li key={"<li>" + index}
                className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <label htmlFor={"<input>" + index}
                    className="mb-4 text-1/2 font-extrabold leading-none tracking-tight text-gray-900">
                    {(index + 1) + ' . ' + todoObject.todoName_}
                </label>
                {'\t'}
                <input id={"<input>" + index} type="checkbox"
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    checked={todoObject.isTodoDone_}
                    onChange={() => {
                        // setIsTodoDone(!isTodoDone)
                        changeIsTodoDone(index)
                        globalThis.location.reload(false)
                        // setEvent2('ISTODODONE SET')
                    }}
                />
                {'\t'}
                <EditPopUp id = {"<EditPopUp>" + index}
                index = {index}/>
                {'\t'}
                <button id={"<button>" + index}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => {
                        deleteTodo(index)
                        globalThis.location.reload(false)
                        // setEvent2('DELETETODO SET')
                    }}>
                    Delete
                </button>
            </li>
        )
    })
    return TodosJSX
}

export default Todos