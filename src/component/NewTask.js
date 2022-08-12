import React, { useState } from 'react'
import Swal from 'sweetalert2'


function NewTask({ title, index, onDelete, status }) {
    const [title1, setTitle] = useState(title)
    const [status1, setStatus] = useState(status)
    const [btn, setBtn] = useState(false)

    const editTask = (index) => {
        (async () => {

            const { value: text } = await Swal.fire({
                input: 'text',
                inputLabel: 'Message',
                inputPlaceholder: 'enter task to update...',
                showCancelButton: true
            })
            if (text) {
                setTitle(text)
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
                <button onClick={() => editTask()} ><i className='fa-solid fa-pen'></i></button>
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