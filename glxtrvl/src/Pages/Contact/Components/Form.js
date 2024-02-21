import React from 'react'

const Form = () => {
    return (
        <>
            <h1 className='heading'>Form</h1>
            <form className='form'>
                <div className='field'>
                    <p>Name</p>
                    <input type="text" />
                </div>
                <div className='field'>
                    <p>Email</p>
                    <input type="text" />
                </div>
                <div className='field'>
                    <p>Phone</p>
                    <input type="text" />
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form