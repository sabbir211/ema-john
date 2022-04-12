import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './components/order/Order';
import Inventory from './components/inventory/Inventory';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/home' element={<Shop />}></Route>
        <Route path='/order' element={<Order />}></Route>
        
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
