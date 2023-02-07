import React from 'react'
import { useState } from 'react'


export default function AddTodo(props) {
    // State vars for form input
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!name || !desc) {
            alert("Title of Desc cannot be empty");
        }
        else {
        props.addTodo(name , desc);
        setName("");
        setDesc("");
        }
    }

    return (
        <div className="container mt-3" onSubmit={submit}>
            <h3>Add Todo</h3>
            <hr/>
            <form>
                <div className="mb-3">
                    <label className="form-label">Todo Title</label>
                    <input type="text" value={name} onChange={ (e) => {setName(e.target.value)}} className="form-control" placeholder="Title" id="title"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={ (e) => {setDesc(e.target.value)} } className="form-control" placeholder="Description" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}
