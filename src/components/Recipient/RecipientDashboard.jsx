import { useState } from 'react';
import Navbar from '../Layout/Navbar';
import { 
  Package, Search, MapPin, Calendar, 
  TrendingUp, Truck, CheckCircle, Clock
} from 'lucide-react';
import '../Layout/Layout.css';
import './Recipient.css';

const RecipientDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [stats, setStats] = useState({
    totalReceived: 156,
    activeRequests: 5,
    peopleServed: 2840,
    monthlyImpact: '892kg'
  });

  const [availableDonations, setAvailableDonations] = useState([
    { 
      id: 1, 
      item: 'Fresh Vegetables Mix', 
      donor: 'Green Grocery', 
      quantity: '50kg', 
      category: 'vegetables',
      location: 'Downtown', 
      distance: '2.3 km',
      expiryDate: '2026-01-30',
      available: true 
    },
    { 
      id: 2, 
      item: 'Assorted Bread & Pastries', 
      donor: 'Bakery Corner', 
      quantity: '80 items', 
      category: 'bakery',
      location: 'North Side', 
      distance: '4.1 km',
      expiryDate: '2026-01-29',
      available: true 
    },
    { 
      id: 3, 
      item: 'Dairy Products', 
      donor: 'Farm Fresh', 
      quantity: '30kg', 
      category: 'dairy',
      location: 'West End', 
      distance: '5.7 km',
      expiryDate: '2026-02-02',
      available: true 
    },
    { 
      id: 4, 
      item: 'Canned Goods', 
      donor: 'Supermarket Hub', 
      quantity: '150 items', 
      category: 'canned',
      location: 'East End', 
      distance: '3.2 km',
      expiryDate: '2026-06-15',
      available: true 
    }
  ]);

  const [myRequests, setMyRequests] = useState([
    { 
      id: 1, 
      item: 'Fresh Vegetables', 
      donor: 'Fresh Market', 
      quantity: '45kg', 
      status: 'in-transit',
      requestDate: '2026-01-27',
      estimatedDelivery: '2026-01-28'
    },
    { 
      id: 2, 
      item: 'Prepared Meals', 
      donor: 'Restaurant Hub', 
      quantity: '100 portions', 
      status: 'confirmed',
      requestDate: '2026-01-28',
      estimatedDelivery: '2026-01-29'
    },
    { 
      id: 3, 
      item: 'Bread Products', 
      donor: 'Bakery Corner', 
      quantity: '60 items', 
      status: 'completed',
      requestDate: '2026-01-26',
      deliveryDate: '2026-01-27'
    }
  ]);

  const handleRequestDonation = (donationId) => {
    const donation = availableDonations.find(d => d.id === donationId);
    if (donation) {
      const newRequest = {
        id: Date.now(),
        item: donation.item,
        donor: donation.donor,
        quantity: donation.quantity,
        status: 'confirmed',
        requestDate: new Date().toISOString().split('T')[0],
        estimatedDelivery: new Date(Date.now() + 86400000).toISOString().split('T')[0]
      };
      
      setMyRequests([newRequest, ...myRequests]);
      setAvailableDonations(availableDonations.filter(d => d.id !== donationId));
      
      setStats(prev => ({
        ...prev,
        activeRequests: prev.activeRequests + 1
      }));
      
      alert(`✅ Request sent successfully! ${donation.donor} will be notified.`);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'in-transit': '#ff9800',
      confirmed: '#2196f3',
      completed: '#4caf50',
      pending: '#9e9e9e'
    };
    return colors[status] || '#666';
  };

  const getStatusLabel = (status) => {
    const labels = {
      'in-transit': 'In Transit',
      confirmed: 'Confirmed',
      completed: 'Completed',
      pending: 'Pending'
    };
    return labels[status] || status;
  };

  const filteredDonations = availableDonations.filter(donation => {
    const matchesSearch = donation.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         donation.donor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || donation.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>Recipient Dashboard</h1>
            <p>Request food donations and manage logistics</p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#e8f5e9' }}>
              <Package size={24} color="#4caf50" />
            </div>
            <div className="stat-label">Total Received</div>
            <div className="stat-value">{stats.totalReceived}</div>
            <div className="stat-change positive">
              <TrendingUp size={14} />
              All time
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#e3f2fd' }}>
              <Clock size={24} color="#2196f3" />
            </div>
            <div className="stat-label">Active Requests</div>
            <div className="stat-value">{stats.activeRequests}</div>
            <div className="stat-change">In progress</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#f3e5f5' }}>
              <TrendingUp size={24} color="#9c27b0" />
            </div>
            <div className="stat-label">People Served</div>
            <div className="stat-value">{stats.peopleServed.toLocaleString()}</div>
            <div className="stat-change positive">
              <TrendingUp size={14} />
              This month
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fff3e0' }}>
              <Truck size={24} color="#ff9800" />
            </div>
            <div className="stat-label">Monthly Impact</div>
            <div className="stat-value">{stats.monthlyImpact}</div>
            <div className="stat-change positive">
              <TrendingUp size={14} />
              Food distributed
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: '20px' }}>
          <div className="card-header">
            <h3>Available Donations</h3>
            <Search size={20} color="#666" />
          </div>
          
          <div className="search-filters">
            <div className="search-bar">
              <Search size={18} color="#999" />
              <input
                type="text"
                placeholder="Search by item or donor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-filter"
            >
              <option value="all">All Categories</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="canned">Canned Goods</option>
            </select>
          </div>

          <div className="donations-grid">
            {filteredDonations.map(donation => (
              <div key={donation.id} className="donation-card">
                <div className="donation-card-header">
                  <Package size={24} color="#667eea" />
                  <span className="donation-category">{donation.category}</span>
                </div>
                
                <h4>{donation.item}</h4>
                <div className="donation-donor">by {donation.donor}</div>
                
                <div className="donation-details">
                  <div className="detail-item">
                    <Package size={16} />
                    {donation.quantity}
                  </div>
                  <div className="detail-item">
                    <MapPin size={16} />
                    {donation.location} ({donation.distance})
                  </div>
                  <div className="detail-item">
                    <Calendar size={16} />
                    Best before: {new Date(donation.expiryDate).toLocaleDateString()}
                  </div>
                </div>
                
                <button 
                  className="request-btn"
                  onClick={() => handleRequestDonation(donation.id)}
                >
                  Request Donation
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>My Requests</h3>
            <Truck size={20} color="#666" />
          </div>
          <div className="requests-list">
            {myRequests.map(request => (
              <div key={request.id} className="request-item">
                <div className="request-main">
                  <div className="request-icon">
                    {request.status === 'completed' ? (
                      <CheckCircle size={24} color="#4caf50" />
                    ) : request.status === 'in-transit' ? (
                      <Truck size={24} color="#ff9800" />
                    ) : (
                      <Clock size={24} color="#2196f3" />
                    )}
                  </div>
                  <div className="request-info">
                    <div className="request-name">{request.item}</div>
                    <div className="request-donor">From: {request.donor}</div>
                    <div className="request-meta">
                      <span>Quantity: {request.quantity}</span>
                      <span>Requested: {request.requestDate}</span>
                    </div>
                  </div>
                  <div 
                    className="request-status"
                    style={{ 
                      background: `${getStatusColor(request.status)}20`,
                      color: getStatusColor(request.status)
                    }}
                  >
                    {getStatusLabel(request.status)}
                  </div>
                </div>
                <div className="request-delivery">
                  {request.status === 'completed' ? (
                    `Delivered: ${request.deliveryDate}`
                  ) : (
                    `Expected: ${request.estimatedDelivery}`
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

export default RecipientDashboard;
