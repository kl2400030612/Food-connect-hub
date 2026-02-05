import { useState } from 'react';
import Navbar from '../Layout/Navbar';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  TrendingUp, Download, Calendar, BarChart3,
  PieChart as PieChartIcon, Activity
} from 'lucide-react';
import '../Layout/Layout.css';
import './Analyst.css';

const AnalystDashboard = () => {
  const [dateRange, setDateRange] = useState('month');

  const [monthlyTrends] = useState([
    { month: 'Jul', donations: 45, weight: 892 },
    { month: 'Aug', donations: 52, weight: 1034 },
    { month: 'Sep', donations: 48, weight: 956 },
    { month: 'Oct', donations: 61, weight: 1245 },
    { month: 'Nov', donations: 58, weight: 1156 },
    { month: 'Dec', donations: 67, weight: 1389 },
    { month: 'Jan', donations: 73, weight: 1523 }
  ]);

  const [categoryData] = useState([
    { name: 'Vegetables', value: 342, color: '#4caf50' },
    { name: 'Bakery', value: 289, color: '#ff9800' },
    { name: 'Dairy', value: 186, color: '#2196f3' },
    { name: 'Prepared Food', value: 234, color: '#9c27b0' },
    { name: 'Canned Goods', value: 156, color: '#f44336' },
    { name: 'Fruits', value: 198, color: '#ffeb3b' }
  ]);

  const [impactData] = useState([
    { metric: 'Food Saved', value: '12,456kg', change: '+18%', color: '#4caf50' },
    { metric: 'Meals Provided', value: '24,892', change: '+22%', color: '#2196f3' },
    { metric: 'CO2 Reduced', value: '3.2 tons', change: '+15%', color: '#9c27b0' },
    { metric: 'Cost Savings', value: '$45,678', change: '+12%', color: '#ff9800' }
  ]);

  const [topDonors] = useState([
    { name: 'Fresh Market', donations: 145, weight: '2,893kg' },
    { name: 'Green Grocery', donations: 132, weight: '2,645kg' },
    { name: 'Restaurant Hub', donations: 128, weight: '2,456kg' },
    { name: 'Bakery Corner', donations: 118, weight: '2,234kg' },
    { name: 'Farm Fresh', donations: 105, weight: '2,098kg' }
  ]);

  const [topRecipients] = useState([
    { name: 'Food Bank Central', received: 234, people: 4680 },
    { name: 'Community Kitchen', received: 198, people: 3960 },
    { name: 'Shelter House', received: 167, people: 3340 },
    { name: 'Hope Center', received: 145, people: 2900 },
    { name: 'Charity Foundation', received: 123, people: 2460 }
  ]);

  const handleExportReport = () => {
    const reportData = `
===========================================
FOOD WASTE PLATFORM - ANALYTICS REPORT
===========================================
Generated: ${new Date().toLocaleString()}
Date Range: ${dateRange}

-------------------------------------------
IMPACT METRICS
-------------------------------------------
Food Saved: 12,456kg (+18%)
Meals Provided: 24,892 (+22%)
CO2 Reduced: 3.2 tons (+15%)
Cost Savings: $45,678 (+12%)

-------------------------------------------
TOP DONORS
-------------------------------------------
1. Fresh Market - 145 donations (2,893kg)
2. Green Grocery - 132 donations (2,645kg)
3. Restaurant Hub - 128 donations (2,456kg)
4. Bakery Corner - 118 donations (2,234kg)
5. Farm Fresh - 105 donations (2,098kg)

-------------------------------------------
TOP RECIPIENTS
-------------------------------------------
1. Food Bank Central - 234 received (4,680 people)
2. Community Kitchen - 198 received (3,960 people)
3. Shelter House - 167 received (3,340 people)
4. Hope Center - 145 received (2,900 people)
5. Charity Foundation - 123 received (2,460 people)

-------------------------------------------
CATEGORY DISTRIBUTION
-------------------------------------------
Vegetables: 342 donations
Bakery: 289 donations
Dairy: 186 donations
Prepared Food: 234 donations
Canned Goods: 156 donations
Fruits: 198 donations

===========================================
END OF REPORT
===========================================
    `;
    
    const blob = new Blob([reportData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `food-waste-report-${dateRange}-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    alert('✅ Report exported successfully!');
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>Data Analyst Dashboard</h1>
            <p>Track trends, analyze data, and generate insights</p>
          </div>
          <div className="header-actions">
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="date-range-select"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
            <button className="export-btn" onClick={handleExportReport}>
              <Download size={18} />
              Export Report
            </button>
          </div>
        </div>

        <div className="impact-grid">
          {impactData.map((item, index) => (
            <div key={index} className="impact-card">
              <div className="impact-label">{item.metric}</div>
              <div className="impact-value">{item.value}</div>
              <div className="impact-change" style={{ color: item.color }}>
                <TrendingUp size={14} />
                {item.change} vs last period
              </div>
            </div>
          ))}
        </div>

        <div className="content-grid">
          <div className="card chart-card">
            <div className="card-header">
              <h3>Donation Trends</h3>
              <Activity size={20} color="#666" />
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="donations" 
                    stroke="#667eea" 
                    strokeWidth={3}
                    name="Number of Donations"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="#4caf50" 
                    strokeWidth={3}
                    name="Weight (kg)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card chart-card">
            <div className="card-header">
              <h3>Food Categories Distribution</h3>
              <PieChartIcon size={20} color="#666" />
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card chart-card">
          <div className="card-header">
            <h3>Monthly Comparison</h3>
            <BarChart3 size={20} color="#666" />
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="donations" fill="#667eea" name="Donations" />
                <Bar dataKey="weight" fill="#4caf50" name="Weight (kg)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="content-grid">
          <div className="card">
            <div className="card-header">
              <h3>Top Donors</h3>
              <TrendingUp size={20} color="#666" />
            </div>
            <div className="ranking-list">
              {topDonors.map((donor, index) => (
                <div key={index} className="ranking-item">
                  <div className="ranking-position">{index + 1}</div>
                  <div className="ranking-info">
                    <div className="ranking-name">{donor.name}</div>
                    <div className="ranking-stats">
                      {donor.donations} donations • {donor.weight}
                    </div>
                  </div>
                  <div className="ranking-badge">
                    {index === 0 && '🥇'}
                    {index === 1 && '🥈'}
                    {index === 2 && '🥉'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Top Recipients</h3>
              <TrendingUp size={20} color="#666" />
            </div>
            <div className="ranking-list">
              {topRecipients.map((recipient, index) => (
                <div key={index} className="ranking-item">
                  <div className="ranking-position">{index + 1}</div>
                  <div className="ranking-info">
                    <div className="ranking-name">{recipient.name}</div>
                    <div className="ranking-stats">
                      {recipient.received} received • {recipient.people.toLocaleString()} people served
                    </div>
                  </div>
                  <div className="ranking-badge">
                    {index === 0 && '🥇'}
                    {index === 1 && '🥈'}
                    {index === 2 && '🥉'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Key Insights</h3>
          </div>
          <div className="insights-grid">
            <div className="insight-item">
              <div className="insight-icon" style={{ background: '#e8f5e9' }}>
                <TrendingUp size={24} color="#4caf50" />
              </div>
              <div className="insight-content">
                <h4>Growing Participation</h4>
                <p>Donor engagement increased by 23% compared to last month, with 15 new donors joining the platform.</p>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon" style={{ background: '#e3f2fd' }}>
                <Activity size={24} color="#2196f3" />
              </div>
              <div className="insight-content">
                <h4>Peak Donation Times</h4>
                <p>Most donations occur between 4-7 PM on weekdays, suggesting optimal coordination times for recipients.</p>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon" style={{ background: '#fff3e0' }}>
                <BarChart3 size={24} color="#ff9800" />
              </div>
              <div className="insight-content">
                <h4>Category Trends</h4>
                <p>Vegetable donations show highest volume but shortest shelf life, requiring faster matching with recipients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystDashboard;
