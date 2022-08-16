import { Link} from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <h1 className="form-inline" role="form"> JSON </h1>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to ="/users" className= "nav-link" aria-current="page"> UsersApp </Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link to ="/album" className= "nav-link" aria-current="page"> AlbumApp </Link>  
                    </li>   
                    <li className="nav-item">
                      <Link to ="/post" className= "nav-link" aria-current="page"> PostApp </Link>  
                    </li>   

                    <li className="nav-item">
                      <Link to ="/comment" className= "nav-link" aria-current="page"> CommentApp </Link>  
                    </li>  

                    <li className="nav-item">
                      <Link to ="/photo" className= "nav-link" aria-current="page"> PhotosApp </Link>  
                    </li>  

                    <li className="nav-item">
                      <Link to ="/todos" className= "nav-link" aria-current="page"> TodosApp </Link>  
                    </li>  
                </ul>
            </div>  
          </nav> 
    </>
  );
}
