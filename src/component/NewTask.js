import React from 'react'

function NewTask({ title, index, onDelete, onEdit }) {
    console.log(index)
    return (
        <div className="mainlist">
            <div className='list'>
                <h4>{title}</h4>
                <button onClick={() => onEdit(title)} ><i className='fa-solid fa-pen'></i></button>
                <button onClick={() => onDelete(index)}><i className='fa-solid fa-trash'></i></button>
            </div>
            <div className="date">
                <p>{new Date().toDateString()}</p>
            </div>
        </div>
    )
}

export default NewTask