import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import { AlbumApp } from './AlbumApp';
import { UsersApp } from './UsersApp';
import { NavBar } from './NavBar';
import { PostApp } from './PostApp';
import { CommentApp } from './CommentApp';
import { PhotosApp } from './PhotosApp';
import { TodosApp } from './TodosApp';



export const App = () => {

  return (
    <Router>
      <NavBar/>
     <Routes>
         <Route path="/users" element= {<UsersApp/>} />
         <Route path="/album" element= {<AlbumApp/>} />
         <Route path="/post" element= {<PostApp/>} />
         <Route path="/comment" element= {<CommentApp/>}/>
         <Route path="/photo" element= {<PhotosApp/>}/>
         <Route path="/todos" element= {<TodosApp/>}/>
     </Routes>
    </Router>
  );
}
