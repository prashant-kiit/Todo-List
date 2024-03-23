import { useState } from 'react'
import Popup from 'reactjs-popup'

function EditPopUp({
    index, }) {
    const [newTodoName, setNewTodoName] = useState('')

    const saveNewTodoName = () => {
        const todosString = localStorage.getItem('todoList')
        const todosArray = JSON.parse(todosString)
        console.log('Old Todos Array')
        console.log(todosArray)
        todosArray[index].todoName_ = newTodoName
        console.log('New Todos Array')
        console.log(todosArray)
        const newtodosString = JSON.stringify(todosArray)
        localStorage.setItem('todoList', newtodosString)
    }

    return (
        <div>
            <Popup trigger=
                {<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold border border-black-800 py-1 px-4 rounded">
                    Edit
                </button>}
                modal nested>
                {
                    close => (
                        <div className="bg-blue-500 px-8 py-4 text-center shadow rounded-lg">
                            <label htmlFor="edit-todo-name" className="text-lg text-black font-bold">New Todo Name</label>
                            <br />
                            <input type="text" id="edit-todo-name" placeholder="Enter New Todo Name"
                                className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={newTodoName}
                                onChange={(e) => {
                                    setNewTodoName(e.target.value)
                                }}
                            />
                            <br />
                            <br />
                            <button className="bg-white hover:bg-blue-200 text-black font-bold border border-black-800 py-2 px-4 rounded"
                                onClick={() => {
                                    saveNewTodoName(newTodoName)
                                    globalThis.location.reload(false)
                                    close()
                                }}>
                                Save and Close
                            </button>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
}

export default EditPopUp