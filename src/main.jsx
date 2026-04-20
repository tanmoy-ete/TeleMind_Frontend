import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../style.css";
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Privacy from './pages/Privacy.jsx';
import User from './pages/User.jsx';
import Consult from './pages/consult.jsx';
import ConfirmAppointment from './pages/ConfirmAppointment.jsx';
import GrowthReport from './pages/GrowthReport.jsx';
import Faq from './pages/faq.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="user" element={<User />} />
            <Route path="consult" element={<Consult />} />
            <Route path="confirm-appointment" element={<ConfirmAppointment />} />
            <Route path="growthreport" element={<GrowthReport />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);