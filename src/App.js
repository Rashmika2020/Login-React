import logo from './logo.svg';
import './App.css';
import Header from './ui/Header';
import Login from './ui/Login';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import UserList from './ui/UserList';

function App() {
  return (
    <Router>
    <div className="container">
      <Header/>
      <Routes>
      
        <Route path="/" element={<Login/>}/>
        <Route path="/userlist" element={<UserList/>}/>

       

      </Routes>
    </div>
    </Router>
  );
}

export default App;
