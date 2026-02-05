import { useNavigate } from 'react-router-dom';
import { 
  Leaf, TrendingUp, Users, BarChart3, 
  Package, Heart, Shield, Zap 
} from 'lucide-react';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Package size={32} />,
      title: 'Food Donation Management',
      description: 'Easily list surplus food and connect with those in need'
    },
    {
      icon: <Users size={32} />,
      title: 'Multi-Role Platform',
      description: 'Dedicated interfaces for donors, recipients, analysts, and admins'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Data Analytics',
      description: 'Track trends, measure impact, and optimize food distribution'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Impact Tracking',
      description: 'Monitor food saved, meals provided, and environmental benefits'
    }
  ];

  const stats = [
    { value: '12,456kg', label: 'Food Saved' },
    { value: '24,892', label: 'Meals Provided' },
    { value: '1,247', label: 'Active Users' },
    { value: '3.2 tons', label: 'CO2 Reduced' }
  ];

  return (
    <div className="landing-container">
      <header className="landing-header">
        <nav className="landing-nav">
          <div className="nav-brand">
            <Leaf size={32} color="#667eea" />
            <span>Food Waste Platform</span>
          </div>
          <button className="nav-login-btn" onClick={() => navigate('/login')}>
            Sign In
          </button>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={16} />
            Reducing Food Waste • Improving Food Security
          </div>
          <h1 className="hero-title">
            Transform Surplus Food Into
            <span className="gradient-text"> Hope & Impact</span>
          </h1>
          <p className="hero-description">
            Join our platform to reduce food waste, fight hunger, and make a positive environmental impact. 
            Connect donors with recipients, track your impact, and be part of the solution.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => navigate('/login')}>
              Get Started
              <Zap size={18} />
            </button>
            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">
            <Package size={24} color="#667eea" />
            <div>
              <div className="card-value">1,234kg</div>
              <div className="card-label">Food Donated Today</div>
            </div>
          </div>
          <div className="floating-card card-2">
            <Heart size={24} color="#f44336" />
            <div>
              <div className="card-value">2,840</div>
              <div className="card-label">People Helped</div>
            </div>
          </div>
          <div className="floating-card card-3">
            <TrendingUp size={24} color="#4caf50" />
            <div>
              <div className="card-value">+23%</div>
              <div className="card-label">Growth This Month</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Comprehensive Platform Features</h2>
          <p>Everything you need to manage food resources efficiently</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="roles-section">
        <div className="section-header">
          <h2>Built For Every Stakeholder</h2>
          <p>Tailored experiences for all platform users</p>
        </div>
        <div className="roles-grid">
          <div className="role-card">
            <div className="role-icon" style={{ background: '#e3f2fd' }}>
              <Shield size={32} color="#2196f3" />
            </div>
            <h3>Admin</h3>
            <p>Manage platform content, oversee user interactions, and ensure data accuracy</p>
            <ul>
              <li>User management & approvals</li>
              <li>Platform analytics</li>
              <li>Content moderation</li>
            </ul>
          </div>
          <div className="role-card">
            <div className="role-icon" style={{ background: '#e8f5e9' }}>
              <Package size={32} color="#4caf50" />
            </div>
            <h3>Food Donor</h3>
            <p>List surplus food, coordinate donations, and track your positive impact</p>
            <ul>
              <li>Easy donation listing</li>
              <li>Real-time tracking</li>
              <li>Impact metrics</li>
            </ul>
          </div>
          <div className="role-card">
            <div className="role-icon" style={{ background: '#fff3e0' }}>
              <Heart size={32} color="#ff9800" />
            </div>
            <h3>Recipient Organization</h3>
            <p>Request food donations, manage logistics, and distribute to those in need</p>
            <ul>
              <li>Browse available donations</li>
              <li>Request management</li>
              <li>Logistics coordination</li>
            </ul>
          </div>
          <div className="role-card">
            <div className="role-icon" style={{ background: '#f3e5f5' }}>
              <BarChart3 size={32} color="#9c27b0" />
            </div>
            <h3>Data Analyst</h3>
            <p>Track food waste trends, analyze data, and generate reports to improve efficiency</p>
            <ul>
              <li>Comprehensive analytics</li>
              <li>Trend visualization</li>
              <li>Custom reports</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>Join thousands of donors and recipients working together to reduce food waste</p>
          <button className="cta-button" onClick={() => navigate('/login')}>
            Get Started Now
            <Zap size={20} />
          </button>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Leaf size={28} color="#667eea" />
            <span>Food Waste Platform</span>
          </div>
          <p>© 2026 Food Waste Platform. Reducing waste, improving security.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
