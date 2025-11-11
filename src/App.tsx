import { useState, useEffect } from 'react';
import { LoginPage } from './components/LoginPage';
import { MainApp } from './components/MainApp';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('kfe_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (userData: { name: string; email: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('kfe_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('kfe_user');
    localStorage.removeItem('kfe_loyaltyPoints');
    localStorage.removeItem('kfe_cart');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <MainApp user={user} onLogout={handleLogout} />;
}
