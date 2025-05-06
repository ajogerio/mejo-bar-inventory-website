import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../features/login/LoginPage';
import Dashboard from '../features/dashboard/Dashboard';
import InventoryPage from '../features/inventory/InventoryPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
    </Router>
  );
}
