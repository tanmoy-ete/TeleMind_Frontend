import { Outlet } from 'react-router-dom';
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
    </div>
  );
}

export default App;