import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { Package, Search, Filter, ArrowLeft, Calendar, MapPin, User, Clock } from 'lucide-react';
import '../Layout/Layout.css';
import './Admin.css';

const ViewAllDonations = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const [donations] = useState([
    { id: 1, item: 'Fresh Vegetables Mix', donor: 'Green Grocery', category: 'Vegetables', quantity: '50kg', status: 'available', location: 'New York, NY', date: '2026-01-28', expiry: '2026-01-30' },
    { id: 2, item: 'Bread and Pastries', donor: 'Restaurant Hub', category: 'Bakery', quantity: '30 items', status: 'claimed', location: 'Phoenix, AZ', date: '2026-01-27', expiry: '2026-01-29', claimedBy: 'Food Bank Central' },
    { id: 3, item: 'Canned Goods', donor: 'Farm Fresh', category: 'Canned', quantity: '100 cans', status: 'available', location: 'Chicago, IL', date: '2026-01-26', expiry: '2026-12-31' },
    { id: 4, item: 'Fresh Fruits', donor: 'Organic Market', category: 'Fruits', quantity: '40kg', status: 'completed', location: 'San Diego, CA', date: '2026-01-25', expiry: '2026-01-28', claimedBy: 'Community Kitchen' },
    { id: 5, item: 'Dairy Products', donor: 'Green Grocery', category: 'Dairy', quantity: '25 units', status: 'available', location: 'New York, NY', date: '2026-01-28', expiry: '2026-02-01' },
    { id: 6, item: 'Rice and Grains', donor: 'Farm Fresh', category: 'Grains', quantity: '75kg', status: 'claimed', location: 'Chicago, IL', date: '2026-01-27', expiry: '2026-06-30', claimedBy: 'Local Shelter' },
    { id: 7, item: 'Fresh Meat', donor: 'Restaurant Hub', category: 'Meat', quantity: '20kg', status: 'available', location: 'Phoenix, AZ', date: '2026-01-28', expiry: '2026-01-29' },
    { id: 8, item: 'Prepared Meals', donor: 'Restaurant Hub', category: 'Prepared', quantity: '50 meals', status: 'completed', location: 'Phoenix, AZ', date: '2026-01-26', expiry: '2026-01-27', claimedBy: 'Community Kitchen' },
  ]);

  const filteredDonations = donations.filter(donation => {
    const matchesSearch = donation.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         donation.donor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         donation.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || donation.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || donation.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'available': return '#4caf50';
      case 'claimed': return '#ff9800';
      case 'completed': return '#2196f3';
      default: return '#666';
    }
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
          <h1><Package size={32} /> All Donations</h1>
          <p>Monitor and manage all donation listings</p>
        </div>

        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="stat-card">
            <div className="stat-label">Total Donations</div>
            <div className="stat-value">{donations.length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Available</div>
            <div className="stat-value" style={{ color: '#4caf50' }}>
              {donations.filter(d => d.status === 'available').length}
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Claimed</div>
            <div className="stat-value" style={{ color: '#ff9800' }}>
              {donations.filter(d => d.status === 'claimed').length}
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Completed</div>
            <div className="stat-value" style={{ color: '#2196f3' }}>
              {donations.filter(d => d.status === 'completed').length}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="filters-section">
            <div className="search-box" style={{ flex: 2 }}>
              <Search size={20} color="#666" />
              <input
                type="text"
                placeholder="Search donations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-select">
              <Filter size={20} color="#666" />
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="claimed">Claimed</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="filter-select">
              <Filter size={20} color="#666" />
              <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Bakery">Bakery</option>
                <option value="Dairy">Dairy</option>
                <option value="Meat">Meat</option>
                <option value="Grains">Grains</option>
                <option value="Canned">Canned</option>
                <option value="Prepared">Prepared Meals</option>
              </select>
            </div>
          </div>
        </div>

        <div className="donations-list">
          {filteredDonations.map(donation => (
            <div key={donation.id} className="donation-card-full">
              <div className="donation-main">
                <div className="donation-icon-large">
                  <Package size={28} color={getStatusColor(donation.status)} />
                </div>
                <div className="donation-info-full">
                  <div className="donation-header-full">
                    <h3>{donation.item}</h3>
                    <span 
                      className="status-badge" 
                      style={{ background: `${getStatusColor(donation.status)}20`, color: getStatusColor(donation.status) }}
                    >
                      {donation.status}
                    </span>
                  </div>
                  <div className="donation-meta">
                    <span className="category-tag">{donation.category}</span>
                    <span className="quantity-tag">Qty: {donation.quantity}</span>
                  </div>
                </div>
              </div>

              <div className="donation-details-grid">
                <div className="detail-item">
                  <User size={16} color="#666" />
                  <div>
                    <div className="detail-label">Donor</div>
                    <div className="detail-value">{donation.donor}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <MapPin size={16} color="#666" />
                  <div>
                    <div className="detail-label">Location</div>
                    <div className="detail-value">{donation.location}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <Calendar size={16} color="#666" />
                  <div>
                    <div className="detail-label">Listed Date</div>
                    <div className="detail-value">{donation.date}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <Clock size={16} color="#666" />
                  <div>
                    <div className="detail-label">Expiry Date</div>
                    <div className="detail-value">{donation.expiry}</div>
                  </div>
                </div>
              </div>

              {donation.claimedBy && (
                <div className="claimed-info">
                  <strong>Claimed by:</strong> {donation.claimedBy}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredDonations.length === 0 && (
          <div className="empty-state">
            <Package size={48} color="#ccc" />
            <h3>No donations found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllDonations;
