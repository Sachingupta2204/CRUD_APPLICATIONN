import React from 'react';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar';
import AllUsers from './component/AllUsers';
import AddUsers from './component/AddUsers';
import EditUsers from './component/EditUsers';

function App() {
  return (       
    <Router>
      <div className="App"> 
        <Navbar/>                 
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/all' element={<AllUsers/>}/>
          <Route exact path='/add' element={<AddUsers/>}/>
          <Route exact path='/edit/:id' element={<EditUsers/>}/>
        </Routes>     
      </div>
    </Router>
  );
}

export default App;
