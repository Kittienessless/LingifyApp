import React from 'react';
import './App.css';
 import { StartPage } from 'pages/startPage';
 import {
  Route,
  Routes
} from 'react-router-dom';
import { HeaderWidget } from 'widgets/header';
import { FooterWidget } from 'widgets/footer';
  function App() {

  return (
    <div>
      <HeaderWidget/>
      <Routes>
        <Route>
          <Route path='/' element={<StartPage/>} />
          
        </Route>
      </Routes>
      <FooterWidget/>
    </div>
   
  );
}

export default App;
