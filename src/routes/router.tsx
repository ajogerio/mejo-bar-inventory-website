import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../features/login/LoginPage';
import Dashboard from '../features/dashboard/Dashboard';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
