import { useState } from 'react';
import Navbar from '../Layout/Navbar';
import { 
  Package, Plus, Clock, CheckCircle, MapPin, 
  TrendingUp, Calendar, Apple
} from 'lucide-react';
import '../Layout/Layout.css';
import './Donor.css';

const DonorDashboard = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [donations, setDonations] = useState([
    { id: 1, item: 'Fresh Vegetables', quantity: '50kg', status: 'active', date: '2026-01-28', recipient: 'Pending', location: 'Downtown' },
    { id: 2, item: 'Bread & Bakery', quantity: '100 items', status: 'completed', date: '2026-01-27', recipient: 'Food Bank Central', location: 'North Side' },
    { id: 3, item: 'Dairy Products', quantity: '30kg', status: 'in-transit', date: '2026-01-27', recipient: 'Community Kitchen', location: 'East End' },
    { id: 4, item: 'Canned Goods', quantity: '200 items', status: 'completed', date: '2026-01-26', recipient: 'Shelter House', location: 'South Bay' }
  ]);

  const [stats, setStats] = useState({
    totalDonations: 42,
    activeDonations: 8,
    foodSaved: '1,234kg',
    impactScore: 95
  });

  const [formData, setFormData] = useState({
    itemName: '',
    category: 'vegetables',
    quantity: '',
    unit: 'kg',
    expiryDate: '',
    pickupLocation: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newDonation = {
      id: Date.now(),
      item: formData.itemName,
      quantity: `${formData.quantity} ${formData.unit}`,
      status: 'active',
      date: new Date().toISOString().split('T')[0],
      recipient: 'Pending',
      location: formData.pickupLocation
    };
    
    setDonations([newDonation, ...donations]);
    
    setStats(prev => ({
      ...prev,
      totalDonations: prev.totalDonations + 1,
      activeDonations: prev.activeDonations + 1
    }));
    
    setShowAddForm(false);
    setFormData({
      itemName: '',
      category: 'vegetables',
      quantity: '',
      unit: 'kg',
      expiryDate: '',
      pickupLocation: '',
      description: ''
    });
    
    alert('✅ Donation listed successfully!');
  };

  const getStatusColor = (status) => {
    const colors = {
      active: '#2196f3',
      completed: '#4caf50',
      'in-transit': '#ff9800',
      pending: '#9e9e9e'
    };
    return colors[status] || '#666';
  };

  const getStatusLabel = (status) => {
    const labels = {
      active: 'Available',
      completed: 'Completed',
      'in-transit': 'In Transit',
      pending: 'Pending'
    };
    return labels[status] || status;
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>Donor Dashboard</h1>
            <p>List surplus food and track your donation impact</p>
          </div>
          <button 
            className="add-donation-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            <Plus size={20} />
            List New Donation
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#e3f2fd' }}>
              <Package size={24} color="#2196f3" />
            </div>
            <div className="stat-label">Total Donations</div>
            <div className="stat-value">{stats.totalDonations}</div>
            <div className="stat-change positive">
              <TrendingUp size={14} />
              All time
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fff3e0' }}>
              <Clock size={24} color="#ff9800" />
            </div>
            <div className="stat-label">Active Listings</div>
            <div className="stat-value">{stats.activeDonations}</div>
            <div className="stat-change">Awaiting pickup</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#e8f5e9' }}>
              <Apple size={24} color="#4caf50" />
            </div>
            <div className="stat-label">Food Saved</div>
            <div className="stat-value">{stats.foodSaved}</div>
            <div className="stat-change positive">
              <TrendingUp size={14} />
              This month
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#f3e5f5' }}>
              <TrendingUp size={24} color="#9c27b0" />
            </div>
            <div className="stat-label">Impact Score</div>
            <div className="stat-value">{stats.impactScore}</div>
            <div className="stat-change positive">
              <TrendingUp size={14} />
              Excellent
            </div>
          </div>
        </div>

        {showAddForm && (
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h3>List New Donation</h3>
            </div>
            <form onSubmit={handleSubmit} className="donation-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Item Name</label>
                  <input
                    type="text"
                    value={formData.itemName}
                    onChange={(e) => setFormData({...formData, itemName: e.target.value})}
                    placeholder="e.g., Fresh Vegetables"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="dairy">Dairy Products</option>
                    <option value="bakery">Bakery</option>
                    <option value="canned">Canned Goods</option>
                    <option value="prepared">Prepared Food</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    placeholder="Enter quantity"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Unit</label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({...formData, unit: e.target.value})}
                  >
                    <option value="kg">Kilograms</option>
                    <option value="items">Items</option>
                    <option value="liters">Liters</option>
                    <option value="boxes">Boxes</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Pickup Location</label>
                <input
                  type="text"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                  placeholder="Enter pickup address"
                  required
                />
              </div>

              <div className="form-group">
                <label>Description (Optional)</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Add any additional details..."
                  rows="3"
                />
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setShowAddForm(false)} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <Plus size={18} />
                  List Donation
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="card">
          <div className="card-header">
            <h3>My Donations</h3>
            <Package size={20} color="#666" />
          </div>
          <div className="donations-list">
            {donations.map(donation => (
              <div key={donation.id} className="donation-item">
                <div className="donation-main">
                  <div className="donation-icon">
                    <Package size={24} color={getStatusColor(donation.status)} />
                  </div>
                  <div className="donation-info">
                    <div className="donation-name">{donation.item}</div>
                    <div className="donation-meta">
                      <span className="meta-item">
                        <Calendar size={14} />
                        {donation.date}
                      </span>
                      <span className="meta-item">
                        <MapPin size={14} />
                        {donation.location}
                      </span>
                    </div>
                  </div>
                  <div className="donation-quantity">{donation.quantity}</div>
                  <div 
                    className="donation-status"
                    style={{ 
                      background: `${getStatusColor(donation.status)}20`,
                      color: getStatusColor(donation.status)
                    }}
                  >
                    {getStatusLabel(donation.status)}
                  </div>
                </div>
                <div className="donation-recipient">
                  {donation.recipient !== 'Pending' ? (
                    <>
                      <CheckCircle size={16} color="#4caf50" />
                      Recipient: {donation.recipient}
                    </>
                  ) : (
                    <>
                      <Clock size={16} color="#ff9800" />
                      Waiting for recipient
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
