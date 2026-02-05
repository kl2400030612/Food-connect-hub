import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Landing from './components/Landing/Landing';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Admin/AdminDashboard';
import ManageUsers from './components/Admin/ManageUsers';
import ViewAllDonations from './components/Admin/ViewAllDonations';
import ContentManagement from './components/Admin/ContentManagement';
import PlatformSettings from './components/Admin/PlatformSettings';
import DonorDashboard from './components/Donor/DonorDashboard';
import RecipientDashboard from './components/Recipient/RecipientDashboard';
import AnalystDashboard from './components/Analyst/AnalystDashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/admin/users" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ManageUsers />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/admin/donations" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ViewAllDonations />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/admin/content" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ContentManagement />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/admin/settings" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <PlatformSettings />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/donor" 
            element={
              <ProtectedRoute allowedRoles={['donor']}>
                <DonorDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/recipient" 
            element={
              <ProtectedRoute allowedRoles={['recipient']}>
                <RecipientDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/analyst" 
            element={
              <ProtectedRoute allowedRoles={['analyst']}>
                <AnalystDashboard />
              </ProtectedRoute>
            } 
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
