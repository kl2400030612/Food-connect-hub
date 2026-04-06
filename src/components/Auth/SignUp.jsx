import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { User, Lock, LogIn, Check, X } from 'lucide-react';
import './Auth.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('donor');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Password validation rules
  const passwordRules = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*]/.test(password),
  };

  const isPasswordValid = Object.values(passwordRules).every(rule => rule);
  const passwordsMatch = password === confirmPassword && password.length > 0;
  const isFormValid = email && isPasswordValid && passwordsMatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid) return;

    // Sign up the user
    login(email, password, role);
    
    // Navigate based on role
    const routes = {
      admin: '/admin',
      donor: '/donor',
      recipient: '/recipient',
      analyst: '/analyst'
    };
    
    navigate(routes[role] || '/');
  };

  const ValidationRule = ({ met, label }) => (
    <div className="validation-rule">
      {met ? (
        <Check size={16} className="validation-icon valid" />
      ) : (
        <X size={16} className="validation-icon invalid" />
      )}
      <span className={met ? 'valid-text' : 'invalid-text'}>{label}</span>
    </div>
  );

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Create Account</h1>
          <p>Join the Movement to Reduce Food Wastage</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">
              <User size={18} />
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <Lock size={18} />
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                required
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            
            {password && (
              <div className="validation-rules">
                <ValidationRule 
                  met={passwordRules.minLength} 
                  label="At least 8 characters" 
                />
                <ValidationRule 
                  met={passwordRules.hasUpperCase} 
                  label="At least 1 uppercase letter (A-Z)" 
                />
                <ValidationRule 
                  met={passwordRules.hasLowerCase} 
                  label="At least 1 lowercase letter (a-z)" 
                />
                <ValidationRule 
                  met={passwordRules.hasNumber} 
                  label="At least 1 number (0-9)" 
                />
                <ValidationRule 
                  met={passwordRules.hasSpecialChar} 
                  label="At least 1 special character (!@#$%^&*)" 
                />
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              <Lock size={18} />
              Confirm Password
            </label>
            <div className="password-input-wrapper">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                required
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            
            {confirmPassword && !passwordsMatch && (
              <div className="error-message">
                <X size={16} />
                Passwords do not match
              </div>
            )}
            {confirmPassword && passwordsMatch && (
              <div className="success-message">
                <Check size={16} />
                Passwords match
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="role">Select Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="donor">Food Donor</option>
              <option value="recipient">Recipient Organization</option>
              <option value="analyst">Data Analyst</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="login-button"
            disabled={!isFormValid}
          >
            <LogIn size={18} />
            Create Account
          </button>

          <div className="signup-link">
            <p>Already have an account? <a href="/login">Sign In</a></p>
          </div>
        </form>

        <div className="login-footer">
          <p>Your password must meet all security requirements</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
