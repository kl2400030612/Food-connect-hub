import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { Settings, ArrowLeft, Save, Globe, Mail, Shield, Database, Bell, Clock } from 'lucide-react';
import '../Layout/Layout.css';
import './Admin.css';

const PlatformSettings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general');

  const [generalSettings, setGeneralSettings] = useState({
    platformName: 'Food Waste Platform',
    platformEmail: 'admin@foodwaste.com',
    platformPhone: '+1-800-FOOD-AID',
    timezone: 'America/New_York',
    language: 'English',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    donationAlerts: true,
    approvalAlerts: true,
    weeklyReports: true,
  });

  const [donationSettings, setDonationSettings] = useState({
    minDonationQty: '5',
    maxDonationQty: '1000',
    expiryWarningDays: '3',
    autoApproveEnabled: false,
    requireVerification: true,
  });

  const handleSaveGeneral = () => {
    alert('✅ General settings saved successfully!');
  };

  const handleSaveNotifications = () => {
    alert('✅ Notification settings saved successfully!');
  };

  const handleSaveDonations = () => {
    alert('✅ Donation settings saved successfully!');
  };

  const handleBackupData = () => {
    alert('💾 Creating platform backup...\n\nThis would export all platform data including:\n• User accounts\n• Donations\n• Transactions\n• Reports\n\nBackup will be downloaded as a ZIP file.');
  };

  const handleRestoreData = () => {
    alert('📥 Restore Platform Data\n\nThis would allow you to upload a backup file and restore the platform to a previous state.\n\n⚠️ Warning: This will overwrite current data!');
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
          <h1><Settings size={32} /> Platform Settings</h1>
          <p>Configure platform settings and preferences</p>
        </div>

        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            <Globe size={18} />
            General
          </button>
          <button 
            className={`tab-btn ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={18} />
            Notifications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'donations' ? 'active' : ''}`}
            onClick={() => setActiveTab('donations')}
          >
            <Clock size={18} />
            Donations
          </button>
          <button 
            className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Shield size={18} />
            Security
          </button>
          <button 
            className={`tab-btn ${activeTab === 'backup' ? 'active' : ''}`}
            onClick={() => setActiveTab('backup')}
          >
            <Database size={18} />
            Backup
          </button>
        </div>

        {activeTab === 'general' && (
          <div className="settings-section">
            <h2>General Settings</h2>
            <div className="settings-form">
              <div className="form-group">
                <label>Platform Name</label>
                <input
                  type="text"
                  value={generalSettings.platformName}
                  onChange={(e) => setGeneralSettings({...generalSettings, platformName: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Platform Email</label>
                <input
                  type="email"
                  value={generalSettings.platformEmail}
                  onChange={(e) => setGeneralSettings({...generalSettings, platformEmail: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Contact Phone</label>
                <input
                  type="tel"
                  value={generalSettings.platformPhone}
                  onChange={(e) => setGeneralSettings({...generalSettings, platformPhone: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Timezone</label>
                <select
                  value={generalSettings.timezone}
                  onChange={(e) => setGeneralSettings({...generalSettings, timezone: e.target.value})}
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Default Language</label>
                <select
                  value={generalSettings.language}
                  onChange={(e) => setGeneralSettings({...generalSettings, language: e.target.value})}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>
              <button className="save-btn" onClick={handleSaveGeneral}>
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="settings-section">
            <h2>Notification Settings</h2>
            <div className="settings-form">
              <div className="toggle-group">
                <div className="toggle-item">
                  <div>
                    <strong>Email Notifications</strong>
                    <p>Receive notifications via email</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notificationSettings.emailNotifications}
                      onChange={(e) => setNotificationSettings({...notificationSettings, emailNotifications: e.target.checked})}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div>
                    <strong>SMS Notifications</strong>
                    <p>Receive notifications via SMS</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notificationSettings.smsNotifications}
                      onChange={(e) => setNotificationSettings({...notificationSettings, smsNotifications: e.target.checked})}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div>
                    <strong>New Donation Alerts</strong>
                    <p>Get notified when new donations are listed</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notificationSettings.donationAlerts}
                      onChange={(e) => setNotificationSettings({...notificationSettings, donationAlerts: e.target.checked})}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div>
                    <strong>Approval Alerts</strong>
                    <p>Get notified about pending user approvals</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notificationSettings.approvalAlerts}
                      onChange={(e) => setNotificationSettings({...notificationSettings, approvalAlerts: e.target.checked})}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div>
                    <strong>Weekly Reports</strong>
                    <p>Receive weekly summary reports</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notificationSettings.weeklyReports}
                      onChange={(e) => setNotificationSettings({...notificationSettings, weeklyReports: e.target.checked})}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              <button className="save-btn" onClick={handleSaveNotifications}>
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        )}

        {activeTab === 'donations' && (
          <div className="settings-section">
            <h2>Donation Settings</h2>
            <div className="settings-form">
              <div className="form-group">
                <label>Minimum Donation Quantity (kg)</label>
                <input
                  type="number"
                  value={donationSettings.minDonationQty}
                  onChange={(e) => setDonationSettings({...donationSettings, minDonationQty: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Maximum Donation Quantity (kg)</label>
                <input
                  type="number"
                  value={donationSettings.maxDonationQty}
                  onChange={(e) => setDonationSettings({...donationSettings, maxDonationQty: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Expiry Warning (Days Before)</label>
                <input
                  type="number"
                  value={donationSettings.expiryWarningDays}
                  onChange={(e) => setDonationSettings({...donationSettings, expiryWarningDays: e.target.value})}
                />
              </div>
              <div className="toggle-group">
                <div className="toggle-item">
                  <div>
                    <strong>Auto-Approve Donations</strong>
                    <p>Automatically approve new donation listings</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={donationSettings.autoApproveEnabled}
                      onChange={(e) => setDonationSettings({...donationSettings, autoApproveEnabled: e.target.checked})}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div>
                    <strong>Require Donor Verification</strong>
                    <p>Donors must verify their identity before listing</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={donationSettings.requireVerification}
                      onChange={(e) => setDonationSettings({...donationSettings, requireVerification: e.target.checked})}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              <button className="save-btn" onClick={handleSaveDonations}>
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="settings-section">
            <h2>Security Settings</h2>
            <div className="security-info">
              <div className="info-card">
                <Shield size={32} color="#4caf50" />
                <h3>Two-Factor Authentication</h3>
                <p>Add an extra layer of security to admin accounts</p>
                <button className="secondary-btn">Enable 2FA</button>
              </div>
              <div className="info-card">
                <Shield size={32} color="#2196f3" />
                <h3>Session Timeout</h3>
                <p>Auto-logout after 30 minutes of inactivity</p>
                <button className="secondary-btn">Configure</button>
              </div>
              <div className="info-card">
                <Shield size={32} color="#ff9800" />
                <h3>Password Policy</h3>
                <p>Set password requirements and expiration rules</p>
                <button className="secondary-btn">Manage</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'backup' && (
          <div className="settings-section">
            <h2>Backup & Restore</h2>
            <div className="backup-actions">
              <div className="backup-card">
                <Database size={48} color="#2196f3" />
                <h3>Backup Platform Data</h3>
                <p>Create a complete backup of all platform data including users, donations, and reports</p>
                <button className="primary-btn" onClick={handleBackupData}>
                  Create Backup
                </button>
                <div className="backup-info">
                  <small>Last backup: 2026-01-27 at 3:00 AM</small>
                </div>
              </div>
              <div className="backup-card">
                <Database size={48} color="#ff9800" />
                <h3>Restore Platform Data</h3>
                <p>Restore platform data from a previous backup file. This will overwrite current data.</p>
                <button className="secondary-btn" onClick={handleRestoreData}>
                  Restore Data
                </button>
                <div className="backup-info">
                  <small className="warning">⚠️ Use with caution - This action cannot be undone</small>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformSettings;
