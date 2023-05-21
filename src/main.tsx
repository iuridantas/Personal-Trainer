import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import GlobalStyle from './styles/global';
import { Footer } from './components/footer';
import { Contact } from './pages/contact';
import Service from './pages/servicesProvided';
import { AboutMe } from './pages/aboutMe';
import { OnlineConsulting } from './pages/onlineConsulting';
import { Home } from './pages/home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/serviços" element={<Service />} />
      <Route path="/sobre-mim" element={<AboutMe />} />
      <Route path="/consultoria-online" element={<OnlineConsulting />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
);