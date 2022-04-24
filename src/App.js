import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePostsForm from './Components/CreatePosts/CreatePostsForm';
import NavBar from './Components/NavBar/NavBar';



function App() {

  const [posts, setPost] = useState([
    {
      date: "4/23/2022",
      name: "Pascal P.",
      comment:
        "Why the hell do they call it rush hour when nothing is moving?",

    },
    {
      date: "4/24/2022",
      name: "Megan C.",
      comment: "They said don't give up on your dreams.....so i went back to sleep.",

    },
  ]);

  function addPost(newPost) {
    let tempPost = [...posts, newPost];

    setPost(tempPost);
  }
 

  return (
    <div> 
      <DisplayPosts parentPosts={posts} /> 
      <CreatePostsForm createPostsFormProperty={addPost} /> 
      <NavBar />
    
  
    </div>



    

  );
}

export default App;
