import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import GlobalStyle from './styles/global';
import { Footer } from './components/footer';
import { Contact } from './pages/contact';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
);
