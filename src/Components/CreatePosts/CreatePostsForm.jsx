import React, { useState } from 'react';


const CreatePostsForm = (props) => {

    const [date] = useState(new Date().toLocaleDateString());
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            date: date,
            name: name,
            comment: comment,
        }
        props.CreatePostsFormProperty(newEntry)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <textarea
            input type= 'text'  
            value={name} onChange={(event) => setName(event.target.value)} 
            />

            <label>Post</label>
            <textarea
            input type= 'text'  
            value={comment} onChange={(event) => setComment(event.target.value)} 
            />

            <button type='submit'>Add</button>
               
        </form>
     );
}
 
export default CreatePostsForm;