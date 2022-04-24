

const DisplayPosts = (props) => {
    return (  
        <div className = "page">
        <div>
          <header>
            <h1>Social<small className='text-muted'></small></h1>
          </header>
        </div>
        <div>
          <CreatePost addPost={addPost} />
        </div>
        <div>
          <DisplayPosts postEntries={post} />
        </div>
          
      
      </div>
    );
}
 
export default DisplayPosts;