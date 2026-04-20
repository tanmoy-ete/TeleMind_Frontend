import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useLanguage } from './context/LanguageContext';


function App() {
  const { language } = useLanguage();

  return (
    <div className="app" dir={language === 'bn' ? 'rtl' : 'ltr'}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;