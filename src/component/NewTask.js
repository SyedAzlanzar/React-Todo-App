import React, { useState } from 'react'
import Swal from 'sweetalert2'


function NewTask({ index, onDelete, status, todo }) {
  
    const [title1, setTitle] = useState(todo.title)
    const [status1, setStatus] = useState(status)
    const [btn, setBtn] = useState(false)


    const editTask = (todo) => {
        (async () => {

            const { value: text } = await Swal.fire({
              input: 'text',
              inputLabel: 'Message',
              inputPlaceholder: 'Type your message here...',
              inputAttributes: {
                'aria-label': 'Type your message here'
              },
              showCancelButton: true
            })
            
            if (text) {
        setTitle( todo.title = text )

            }
            
            })()
        }


    

    const completed = (index) => {
        setStatus(true)
        setBtn(btn => !btn)
    }
    let toggleBtn = btn ? 'active' : ''
    return (
        <div className="mainlist">
            <div className='list'>
                <h4 className={toggleBtn}>{title1}</h4>
                <button onClick={() => editTask(todo)} ><i className='fa-solid fa-pen'></i></button>
                <button onClick={() => onDelete(index)}><i className='fa-solid fa-trash'></i></button>
                <button onClick={completed} ><i className='fa-solid fa-check'></i></button>
            </div>
            <div className="date">
                <p>{new Date().toDateString()}</p>
            </div>
        </div>
    )
}

export default NewTask