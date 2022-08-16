import React, { useState, useEffect} from 'react';

export const TodosApp = () => {
  const [todos, setTodos] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setTodos(result);
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
                {todos.map(({id, title}) => (
                  <li className="list-group-item" key={id}>
                      <div className="ms-2 me-auto" role="alert">                      
                        <div className = "fw-bold" > {id} </div>
                            {title}
                      </div>
                    </li>
                ))}
            </ul>
          </div>
     </>
      );
    }
  }