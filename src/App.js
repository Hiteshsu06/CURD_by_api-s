import './App.css';
import Login from './container/Login';
import Home from './container/Home';
import Registration from './container/Registration';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './container/Users';
import Resource from './container/Resource';
import Viewusers from './container/Viewusers';
import Viewresource from './container/Viewresource';
import Practice from './container/Practice';

function App() {
  let isLoggedIn = localStorage.getItem('token') ? true : false;
  if (!isLoggedIn && window.location.pathname !== '/') {
    window.location.href = '/';
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/viewusers/:id" element={<Viewusers />} />
        <Route path="/viewresource/:id" element={<Viewresource />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </div>
  );
}

export default App;
