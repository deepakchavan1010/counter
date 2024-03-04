import React from 'react'
import "./todo.css"
import { FormEntries } from './FormEntries'
const TodoMain = () => {
    return (

        <div className='todo_main '>
            <div className="container todo_main_container my-5 ">
                <div className="sub_container  text-white">
                    <h4 className='text-center'>My Todos</h4>
                    <FormEntries />
                </div>
            </div>
        </div>

    )
}


export default TodoMain