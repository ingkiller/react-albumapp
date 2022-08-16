import React, { useState, useEffect} from 'react';

export const CommentApp = () => {
  const [comment, setComment] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setComment(result);
          },
          
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
        <div className = "Aplicación min-vh-100 d-flex Justify-content-center align-items-center" >
          <ul className="list-group list-group-flush">
              {comment.map(({id, name,email}) => (
                <li className="list-group-item" key={id}>
                    <div className="ms-2 me-auto" role="alert">                      
                      <div className = "fw-bold" > {id} </div>
                          {name}
                          {email}
                    </div>
                </li>
               ))}
            </ul>
        </div>
     </>
      );
    }
  }