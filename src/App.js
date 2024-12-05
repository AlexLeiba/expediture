import React from 'react';
import { Home } from './Pages/Home/Home';
import { AddExpenses } from './Pages/AddExpenses/AddExpenses';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-expense' element={<AddExpenses />} />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default App;
