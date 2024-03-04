import React from 'react'
import { MyButton } from './MyButton'

export const List = (props) => {
    function deleteHandler(id) {
        props.setData(props.data.filter((ele, index) => {
            return id !== index
        }))
    }
    if (props.data?.length === 0) return null
    
    return (
        <div className='list mt-3 row p-2'>

            {props.data.map((ele, index) => {
                return <div key={index} className='row'>

                    <div className="col-12 col-md-8">
                        <h3 style={{ color: "#FF9900" }} className='m-0'>{ele?.name}</h3>
                        <p>{ele?.description}</p>
                    </div>

                    <div className="col-12 col-md-4 d-flex justify-content-end align-items-center gap-2">
                        <MyButton title="Complete" color="cyan" />

                        <div onClick={() => deleteHandler(index)}>
                            <MyButton title="Delete" color="warning-light" />
                        </div>

                    </div>

                </div>
            })}
        </div>
    )
}