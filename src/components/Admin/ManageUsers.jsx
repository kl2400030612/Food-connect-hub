import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { Users, Search, Filter, Edit2, Trash2, Shield, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import '../Layout/Layout.css';
import './Admin.css';

const ManageUsers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const [users] = useState([
    { id: 1, name: 'Green Grocery', role: 'Food Donor', email: 'green@grocery.com', phone: '+1-234-567-8901', location: 'New York, NY', status: 'active', joinDate: '2025-12-15', donations: 45 },
    { id: 2, name: 'Community Kitchen', role: 'Recipient', email: 'contact@community.org', phone: '+1-234-567-8902', location: 'Los Angeles, CA', status: 'active', joinDate: '2025-11-20', requests: 32 },
    { id: 3, name: 'Farm Fresh', role: 'Food Donor', email: 'info@farmfresh.com', phone: '+1-234-567-8903', location: 'Chicago, IL', status: 'active', joinDate: '2026-01-10', donations: 12 },
    { id: 4, name: 'Food Bank Central', role: 'Recipient', email: 'admin@foodbank.org', phone: '+1-234-567-8904', location: 'Houston, TX', status: 'active', joinDate: '2025-10-05', requests: 67 },
    { id: 5, name: 'Restaurant Hub', role: 'Food Donor', email: 'contact@resthub.com', phone: '+1-234-567-8905', location: 'Phoenix, AZ', status: 'active', joinDate: '2025-09-12', donations: 89 },
    { id: 6, name: 'Local Shelter', role: 'Recipient', email: 'help@shelter.org', phone: '+1-234-567-8906', location: 'Philadelphia, PA', status: 'inactive', joinDate: '2025-08-22', requests: 15 },
    { id: 7, name: 'Data Insights Team', role: 'Data Analyst', email: 'data@insights.com', phone: '+1-234-567-8907', location: 'San Antonio, TX', status: 'active', joinDate: '2025-12-01', reports: 23 },
    { id: 8, name: 'Organic Market', role: 'Food Donor', email: 'info@organic.com', phone: '+1-234-567-8908', location: 'San Diego, CA', status: 'active', joinDate: '2026-01-05', donations: 8 },
  ]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleEdit = (userId) => {
    alert(`✏️ Editing user #${userId}\n\nThis would open an edit form to modify user details.`);
  };

  const handleDelete = (userId) => {
    const confirmed = window.confirm('Are you sure you want to delete this user? This action cannot be undone.');
    if (confirmed) {
      alert(`🗑️ User #${userId} has been deleted.`);
    }
  };

  const handleChangeRole = (userId) => {
    alert(`🔄 Change Role for user #${userId}\n\nSelect new role:\n• Admin\n• Food Donor\n• Recipient\n• Data Analyst`);
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <button className="back-btn" onClick={() => navigate('/admin')}>
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>
          <h1><Users size={32} /> Manage Users</h1>
          <p>View and manage all platform users</p>
        </div>

        <div className="card">
          <div className="filters-section">
            <div className="search-box" style={{ flex: 2 }}>
              <Search size={20} color="#666" />
              <input
                type="text"
                placeholder="Search by name, email, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-select" style={{ flex: 1 }}>
              <Filter size={20} color="#666" />
              <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
                <option value="all">All Roles</option>
                <option value="Food Donor">Food Donors</option>
                <option value="Recipient">Recipients</option>
                <option value="Data Analyst">Data Analysts</option>
              </select>
            </div>
          </div>
        </div>

        <div className="users-grid">
          {filteredUsers.map(user => (
            <div key={user.id} className="user-card">
              <div className="user-header">
                <div className="user-avatar">
                  {user.name.charAt(0)}
                </div>
                <div className="user-info">
                  <h3>{user.name}</h3>
                  <span className={`role-badge ${user.role.toLowerCase().replace(' ', '-')}`}>
                    {user.role}
                  </span>
                </div>
                <span className={`status-badge ${user.status}`}>
                  {user.status}
                </span>
              </div>

              <div className="user-details">
                <div className="user-detail-item">
                  <Mail size={16} color="#666" />
                  <span>{user.email}</span>
                </div>
                <div className="user-detail-item">
                  <Phone size={16} color="#666" />
                  <span>{user.phone}</span>
                </div>
                <div className="user-detail-item">
                  <MapPin size={16} color="#666" />
                  <span>{user.location}</span>
                </div>
              </div>

              <div className="user-stats">
                <div className="user-stat">
                  <div className="user-stat-label">Joined</div>
                  <div className="user-stat-value">{user.joinDate}</div>
                </div>
                <div className="user-stat">
                  <div className="user-stat-label">
                    {user.role === 'Food Donor' ? 'Donations' : 
                     user.role === 'Recipient' ? 'Requests' : 'Reports'}
                  </div>
                  <div className="user-stat-value">
                    {user.donations || user.requests || user.reports || 0}
                  </div>
                </div>
              </div>

              <div className="user-actions">
                <button className="user-action-btn edit" onClick={() => handleEdit(user.id)}>
                  <Edit2 size={16} />
                  Edit
                </button>
                <button className="user-action-btn role" onClick={() => handleChangeRole(user.id)}>
                  <Shield size={16} />
                  Role
                </button>
                <button className="user-action-btn delete" onClick={() => handleDelete(user.id)}>
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="empty-state">
            <Users size={48} color="#ccc" />
            <h3>No users found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
