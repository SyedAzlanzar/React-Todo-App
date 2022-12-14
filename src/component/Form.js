import React from 'react'
import Swal from 'sweetalert2'


function Form({ setInputText, inputText, todos, setTodos, userId }) {


    const inputTextHandler = (e) => {
        e.preventDefault()
        setInputText(e.target.value)

    }
    const submitTodoHandler = (e) => {
        e.preventDefault()

        if (inputText === '') {
            Swal.fire("Can't read empty input")
        }
        else {
            setTodos([
                ...todos, { title: inputText, status: false, id: Math.floor(Math.random() * 1000), userfilterid: userId }
            ])


        }

        setInputText('')
    }


    return (
        <form onSubmit={submitTodoHandler} className='myinput' action="">
            <input value={inputText} type="text" onChange={inputTextHandler} placeholder='enter text' />
            <button><i className='fa-solid fa-plus'></i></button>
        </form>
    )
}

export default Form