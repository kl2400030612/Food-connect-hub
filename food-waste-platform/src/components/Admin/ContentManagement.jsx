import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { FileText, ArrowLeft, Edit2, Plus, Trash2, Eye, Bell, HelpCircle, FileCheck } from 'lucide-react';
import '../Layout/Layout.css';
import './Admin.css';

const ContentManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pages');

  const [pages] = useState([
    { id: 1, title: 'About Us', status: 'published', lastUpdated: '2026-01-20', views: 1234 },
    { id: 2, title: 'How It Works', status: 'published', lastUpdated: '2026-01-15', views: 2156 },
    { id: 3, title: 'Terms & Conditions', status: 'draft', lastUpdated: '2026-01-25', views: 0 },
    { id: 4, title: 'Privacy Policy', status: 'published', lastUpdated: '2026-01-10', views: 876 },
  ]);

  const [faqs] = useState([
    { id: 1, question: 'How do I donate food?', category: 'Donors', status: 'published', updated: '2026-01-22' },
    { id: 2, question: 'How do I request food?', category: 'Recipients', status: 'published', updated: '2026-01-22' },
    { id: 3, question: 'What food items can be donated?', category: 'Donors', status: 'published', updated: '2026-01-18' },
    { id: 4, question: 'How long does approval take?', category: 'General', status: 'draft', updated: '2026-01-26' },
  ]);

  const [announcements] = useState([
    { id: 1, title: 'Platform Update v2.0', type: 'info', active: true, created: '2026-01-25' },
    { id: 2, title: 'Holiday Hours', type: 'warning', active: true, created: '2026-01-20' },
    { id: 3, title: 'New Features Released', type: 'success', active: false, created: '2026-01-15' },
  ]);

  const handleEdit = (type, id) => {
    alert(`✏️ Editing ${type} #${id}\n\nThis would open an editor to modify the content.`);
  };

  const handleDelete = (type, id) => {
    const confirmed = window.confirm(`Are you sure you want to delete this ${type}?`);
    if (confirmed) {
      alert(`🗑️ ${type} #${id} has been deleted.`);
    }
  };

  const handleCreate = (type) => {
    alert(`➕ Create New ${type}\n\nThis would open a form to create new content.`);
  };

  const handlePreview = (id) => {
    alert(`👁️ Previewing content #${id}`);
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
          <h1><FileText size={32} /> Content Management</h1>
          <p>Manage platform content, pages, and announcements</p>
        </div>

        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'pages' ? 'active' : ''}`}
            onClick={() => setActiveTab('pages')}
          >
            <FileText size={18} />
            Pages
          </button>
          <button 
            className={`tab-btn ${activeTab === 'faqs' ? 'active' : ''}`}
            onClick={() => setActiveTab('faqs')}
          >
            <HelpCircle size={18} />
            FAQs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'announcements' ? 'active' : ''}`}
            onClick={() => setActiveTab('announcements')}
          >
            <Bell size={18} />
            Announcements
          </button>
        </div>

        {activeTab === 'pages' && (
          <div className="content-section">
            <div className="section-header">
              <h2>Informational Pages</h2>
              <button className="create-btn" onClick={() => handleCreate('Page')}>
                <Plus size={18} />
                Create New Page
              </button>
            </div>
            <div className="content-list">
              {pages.map(page => (
                <div key={page.id} className="content-item">
                  <div className="content-icon">
                    <FileText size={24} color="#2196f3" />
                  </div>
                  <div className="content-info">
                    <h3>{page.title}</h3>
                    <div className="content-meta">
                      <span className={`status-badge ${page.status}`}>{page.status}</span>
                      <span>Updated: {page.lastUpdated}</span>
                      <span>Views: {page.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="content-actions">
                    <button className="icon-btn" onClick={() => handlePreview(page.id)} title="Preview">
                      <Eye size={18} />
                    </button>
                    <button className="icon-btn" onClick={() => handleEdit('Page', page.id)} title="Edit">
                      <Edit2 size={18} />
                    </button>
                    <button className="icon-btn delete" onClick={() => handleDelete('Page', page.id)} title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'faqs' && (
          <div className="content-section">
            <div className="section-header">
              <h2>Frequently Asked Questions</h2>
              <button className="create-btn" onClick={() => handleCreate('FAQ')}>
                <Plus size={18} />
                Add New FAQ
              </button>
            </div>
            <div className="content-list">
              {faqs.map(faq => (
                <div key={faq.id} className="content-item">
                  <div className="content-icon">
                    <HelpCircle size={24} color="#ff9800" />
                  </div>
                  <div className="content-info">
                    <h3>{faq.question}</h3>
                    <div className="content-meta">
                      <span className="category-tag">{faq.category}</span>
                      <span className={`status-badge ${faq.status}`}>{faq.status}</span>
                      <span>Updated: {faq.updated}</span>
                    </div>
                  </div>
                  <div className="content-actions">
                    <button className="icon-btn" onClick={() => handleEdit('FAQ', faq.id)} title="Edit">
                      <Edit2 size={18} />
                    </button>
                    <button className="icon-btn delete" onClick={() => handleDelete('FAQ', faq.id)} title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'announcements' && (
          <div className="content-section">
            <div className="section-header">
              <h2>Platform Announcements</h2>
              <button className="create-btn" onClick={() => handleCreate('Announcement')}>
                <Plus size={18} />
                Create Announcement
              </button>
            </div>
            <div className="content-list">
              {announcements.map(announcement => (
                <div key={announcement.id} className="content-item">
                  <div className="content-icon">
                    <Bell size={24} color={announcement.type === 'success' ? '#4caf50' : announcement.type === 'warning' ? '#ff9800' : '#2196f3'} />
                  </div>
                  <div className="content-info">
                    <h3>{announcement.title}</h3>
                    <div className="content-meta">
                      <span className={`type-badge ${announcement.type}`}>{announcement.type}</span>
                      <span className={`status-badge ${announcement.active ? 'published' : 'draft'}`}>
                        {announcement.active ? 'Active' : 'Inactive'}
                      </span>
                      <span>Created: {announcement.created}</span>
                    </div>
                  </div>
                  <div className="content-actions">
                    <button className="icon-btn" onClick={() => handleEdit('Announcement', announcement.id)} title="Edit">
                      <Edit2 size={18} />
                    </button>
                    <button className="icon-btn delete" onClick={() => handleDelete('Announcement', announcement.id)} title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManagement;
