import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePostsForm from './Components/CreatePosts/CreatePostsForm';



function App() {

  const [entries, setEntries] = useState

  return (
    <div>
      <DisplayPosts parentPosts={entries} /> 
      <CreatePostsForm /> 
    </div>

  );
}

export default App;
