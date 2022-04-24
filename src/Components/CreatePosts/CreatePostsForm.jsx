import React, { useState } from 'react';


const CreatePostsForm = (props) => {

    const [date, setDate] = useState(0)
    const [name, setName] = ("")
    const [comment, setComment] = useState("")

    return ( 
        <form>
            <label>Name</label>
            <input type= 'text' className='form-contol' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type= 'text' className='form-control' value={comment} onChange={(event) => setComment(event.target.value)} />
               
        </form>
     );
}
 
export default CreatePostsForm;