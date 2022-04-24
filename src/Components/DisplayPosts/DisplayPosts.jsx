

const DisplayPosts = (props) => {
    return (
        <div>
        <table>
          {props.parentPosts.map((posts, index) => {
              return (
                  <ul key={index} className="border-box">
                <div>
                  <li>{posts.date}</li>
                  <li>
                    <h3>{posts.name}</h3>
                  </li>
                  <li>{posts.comment}</li>
                  {/* <Buttons /> */}
                </div>
              </ul>
            );
        })}
        </table>
        </div>
      );
    };



    
 
export default DisplayPosts;