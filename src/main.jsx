import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './index.css';
import './assets/main.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import ViewBook from './pages/ViewBook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Navigate to={"/home"} />} />
      <Route path={"/home"} index element={<App />} />
      <Route path={"/view/:id"} element={<ViewBook />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)
