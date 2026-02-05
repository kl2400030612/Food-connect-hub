import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { 
  Users, Package, TrendingUp, AlertCircle, 
  CheckCircle, XCircle, Settings, FileText, BarChart3
} from 'lucide-react';
import '../Layout/Layout.css';
import './Admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeUsers, setActiveUsers] = useState(1247);
  const [totalDonations] = useState(3456);
  const [activeDonors] = useState(234);
  const [pendingApprovals, setPendingApprovals] = useState(12);

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'donation', user: 'Fresh Market', action: 'Listed 50kg of vegetables', time: '5 mins ago', status: 'active' },
    { id: 2, type: 'recipient', user: 'Food Bank Central', action: 'Requested 100kg food items', time: '15 mins ago', status: 'pending' },
    { id: 3, type: 'donor', user: 'Restaurant Hub', action: 'Completed donation', time: '1 hour ago', status: 'completed' },
    { id: 4, type: 'user', user: 'New Donor', action: 'Registration pending approval', time: '2 hours ago', status: 'pending' },
    { id: 5, type: 'analyst', user: 'Data Team', action: 'Generated monthly report', time: '3 hours ago', status: 'completed' }
  ]);

  const [pendingUsers, setPendingUsers] = useState([
    { id: 1, name: 'Green Grocery', type: 'Food Donor', email: 'green@grocery.com', date: '2026-01-28' },
    { id: 2, name: 'Community Kitchen', type: 'Recipient', email: 'contact@community.org', date: '2026-01-27' },
    { id: 3, name: 'Farm Fresh', type: 'Food Donor', email: 'info@farmfresh.com', date: '2026-01-27' }
  ]);

  const handleApprove = (id) => {
    const user = pendingUsers.find(u => u.id === id);
    if (user) {
      setPendingUsers(pendingUsers.filter(u => u.id !== id));
      setPendingApprovals(prev => prev - 1);
      setActiveUsers(prev => prev + 1);
      
      const newActivity = {
        id: Date.now(),
        type: 'approval',
        user: user.name,
        action: `Approved as ${user.type}`,
        time: 'Just now',
        status: 'completed'
      };
      setRecentActivity([newActivity, ...recentActivity]);
      
      alert(`✅ ${user.name} has been approved successfully!`);
    }
  };

  const handleReject = (id) => {
    const user = pendingUsers.find(u => u.id === id);
    if (user) {
      setPendingUsers(pendingUsers.filter(u => u.id !== id));
      setPendingApprovals(prev => prev - 1);
      
      const newActivity = {
        id: Date.now(),
        type: 'rejection',
        user: user.name,
        action: 'Registration rejected',
        time: 'Just now',
        status: 'completed'
      };
      setRecentActivity([newActivity, ...recentActivity]);
      
      alert(`❌ ${user.name} has been rejected.`);
    }
  };

  const handleManageUsers = () => {
    navigate('/admin/users');
  };

  const handleViewDonations = () => {
    navigate('/admin/donations');
  };

  const handleContentManagement = () => {
    navigate('/admin/content');
  };

  const handlePlatformSettings = () => {
    navigate('/admin/settings');
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Manage platform operations and oversee user interactions</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#e3f2fd' }}>
              <Users size={24} color="#2196f3" />
            </div>
            <div className="stat-label">Active Users</div>
            <div className="stat-value">{activeUsers.toLocaleString()}</div>
            <div className="stat-change positive">
              <TrendingUp size={14} />
              +12% from last month
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#e8f5e9' }}>
              <Package size={24} color="#4caf50" />
            </div>
            <div className="stat-label">Total Donations</div>
            <div className="stat-value">{totalDonations.toLocaleString()}</div>
            <div className="stat-change positive">
              <TrendingUp size={14} />
              +8% this week
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fff3e0' }}>
              <BarChart3 size={24} color="#ff9800" />
            </div>
            <div className="stat-label">Active Donors</div>
            <div className="stat-value">{activeDonors}</div>
            <div className="stat-change positive">
              <TrendingUp size={14} />
              +15 this month
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fce4ec' }}>
              <AlertCircle size={24} color="#e91e63" />
            </div>
            <div className="stat-label">Pending Approvals</div>
            <div className="stat-value">{pendingApprovals}</div>
            <div className="stat-change">Requires attention</div>
          </div>
        </div>

        <div className="content-grid">
          <div className="card">
            <div className="card-header">
              <h3>Recent Activity</h3>
              <FileText size={20} color="#666" />
            </div>
            <div className="card-content">
              {recentActivity.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    {activity.status === 'completed' && <CheckCircle size={18} color="#4caf50" />}
                    {activity.status === 'pending' && <AlertCircle size={18} color="#ff9800" />}
                    {activity.status === 'active' && <TrendingUp size={18} color="#2196f3" />}
                  </div>
                  <div className="activity-details">
                    <div className="activity-user">{activity.user}</div>
                    <div className="activity-action">{activity.action}</div>
                  </div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Pending Approvals</h3>
              <Settings size={20} color="#666" />
            </div>
            <div className="card-content">
              {pendingUsers.map(user => (
                <div key={user.id} className="approval-item">
                  <div className="approval-info">
                    <div className="approval-name">{user.name}</div>
                    <div className="approval-type">{user.type}</div>
                    <div className="approval-email">{user.email}</div>
                  </div>
                  <div className="approval-actions">
                    <button 
                      className="approve-btn"
                      onClick={() => handleApprove(user.id)}
                    >
                      <CheckCircle size={16} />
                      Approve
                    </button>
                    <button 
                      className="reject-btn"
                      onClick={() => handleReject(user.id)}
                    >
                      <XCircle size={16} />
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: '20px' }}>
          <div className="card-header">
            <h3>Platform Management</h3>
          </div>
          <div className="admin-actions">
            <button className="admin-action-btn" onClick={handleManageUsers}>
              <Users size={20} />
              Manage Users
            </button>
            <button className="admin-action-btn" onClick={handleViewDonations}>
              <Package size={20} />
              View All Donations
            </button>
            <button className="admin-action-btn" onClick={handleContentManagement}>
              <FileText size={20} />
              Content Management
            </button>
            <button className="admin-action-btn" onClick={handlePlatformSettings}>
              <Settings size={20} />
              Platform Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
