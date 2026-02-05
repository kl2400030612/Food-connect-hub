import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import './Layout.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getRoleName = (role) => {
    const roles = {
      admin: 'Administrator',
      donor: 'Food Donor',
      recipient: 'Recipient Organization',
      analyst: 'Data Analyst'
    };
    return roles[role] || role;
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Food Waste Platform</h2>
      </div>
      
      <div className="navbar-user">
        <div className="user-info">
          <User size={20} />
          <div>
            <div className="user-name">{user?.name}</div>
            <div className="user-role">{getRoleName(user?.role)}</div>
          </div>
        </div>
        <button onClick={handleLogout} className="logout-button">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
