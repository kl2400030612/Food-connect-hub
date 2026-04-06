# Food Waste Platform - Technical Implementation Details

## 🏗️ Architecture Overview

### Component Architecture
```
App (Router + AuthProvider)
├── Landing Page (Public)
├── Login (Public)
└── Protected Routes
    ├── Admin Dashboard
    ├── Donor Dashboard
    ├── Recipient Dashboard
    └── Analyst Dashboard
```

### State Management Flow
```
AuthContext (Global)
├── User State
├── Login Function
├── Logout Function
└── Loading State
    ↓
Protected Routes (Check Auth)
    ↓
Role-Specific Dashboards
```

## 📦 Component Breakdown

### 1. Authentication System

**Files:**
- `src/contexts/AuthContext.jsx` - Global auth state
- `src/components/Auth/Login.jsx` - Login interface
- `src/components/ProtectedRoute/ProtectedRoute.jsx` - Route protection

**Implementation:**
```javascript
// Authentication Context provides:
- user object (id, email, role, name)
- isAuthenticated boolean
- login(email, password, role) function
- logout() function
- loading state for async operations

// Protected Route checks:
1. If user is authenticated
2. If user has required role
3. Redirects appropriately if not authorized
```

**Features:**
- ✅ Persistent sessions (localStorage)
- ✅ Role-based access control
- ✅ Automatic redirection
- ✅ Loading states

### 2. Admin Dashboard

**File:** `src/components/Admin/AdminDashboard.jsx`

**Key Features:**
- Platform statistics (4 stat cards)
- Recent activity feed
- Pending user approvals
- Management action buttons

**Data Displayed:**
```javascript
Stats:
- Active Users: 1,247
- Total Donations: 3,456
- Active Donors: 234
- Pending Approvals: 12

Recent Activity:
- Last 5 platform activities
- Status indicators (active, pending, completed)
- Timestamps

Pending Approvals:
- New user registrations
- Approve/Reject actions
```

**UI Components:**
- Stat cards with icons and trends
- Activity timeline
- Approval cards with action buttons
- Management action grid

### 3. Food Donor Dashboard

**File:** `src/components/Donor/DonorDashboard.jsx`

**Key Features:**
- Add new donation form
- Donation listing with status
- Impact metrics
- Donation tracking

**Form Fields:**
```javascript
Donation Form:
- Item Name (text)
- Category (select: vegetables, fruits, dairy, bakery, canned, prepared, other)
- Quantity (number)
- Unit (select: kg, items, liters, boxes)
- Expiry Date (date picker)
- Pickup Location (text)
- Description (textarea, optional)
```

**Status Types:**
- Active (Available for pickup)
- In-Transit (Being delivered)
- Completed (Successfully donated)
- Pending (Awaiting recipient)

**Metrics Tracked:**
- Total donations count
- Active listings
- Food saved (kg)
- Impact score (0-100)

### 4. Recipient Organization Dashboard

**File:** `src/components/Recipient/RecipientDashboard.jsx`

**Key Features:**
- Browse available donations
- Search and filter system
- Request donation functionality
- Track request status

**Search & Filter:**
```javascript
Search:
- Text search across item names and donors
- Real-time filtering

Filter:
- Category dropdown (all, vegetables, fruits, dairy, bakery, canned)
- Applied to filtered results
```

**Donation Card Info:**
- Item name and category
- Donor name
- Quantity and unit
- Location and distance
- Expiry date
- Request button

**Request Status:**
- In-Transit (being delivered)
- Confirmed (scheduled)
- Completed (received)
- Pending (awaiting confirmation)

### 5. Data Analyst Dashboard

**File:** `src/components/Analyst/AnalystDashboard.jsx`

**Key Features:**
- Interactive data visualizations
- Multiple chart types
- Performance rankings
- Export functionality

**Charts Implemented:**

1. **Line Chart - Donation Trends**
```javascript
Data Points:
- Month (Jul - Jan)
- Number of donations
- Total weight (kg)

Features:
- Dual Y-axis
- Hover tooltips
- Legend
- Grid lines
```

2. **Pie Chart - Category Distribution**
```javascript
Categories:
- Vegetables: 342 (green)
- Bakery: 289 (orange)
- Dairy: 186 (blue)
- Prepared Food: 234 (purple)
- Canned Goods: 156 (red)
- Fruits: 198 (yellow)

Features:
- Percentage labels
- Color-coded segments
- Interactive tooltips
```

3. **Bar Chart - Monthly Comparison**
```javascript
Metrics:
- Donations count
- Weight (kg)

Features:
- Side-by-side bars
- Color distinction
- Hover details
```

**Rankings:**
- Top 5 Donors (by donation count and weight)
- Top 5 Recipients (by received count and people served)
- Position badges (🥇🥈🥉)

**Impact Metrics:**
- Food Saved: 12,456kg
- Meals Provided: 24,892
- CO2 Reduced: 3.2 tons
- Cost Savings: $45,678

### 6. Landing Page

**File:** `src/components/Landing/Landing.jsx`

**Sections:**
1. Hero with call-to-action
2. Statistics showcase
3. Features grid
4. Roles explanation
5. Final CTA
6. Footer

**Animations:**
- Floating cards (keyframe animation)
- Hover effects
- Smooth transitions
- Gradient backgrounds

## 🎨 Styling System

### CSS Architecture

**Global Styles:**
- `src/index.css` - Base resets and typography
- `src/App.css` - App-wide utilities

**Component Styles:**
- Each component has its own CSS file
- BEM-like naming convention
- Scoped to component

**Layout System:**
- `src/components/Layout/Layout.css` - Shared layout styles
- Grid-based responsive design
- Flexbox for alignment

### Color System

```css
/* Primary Colors */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--primary-color: #667eea;

/* Status Colors */
--success: #4caf50;
--warning: #ff9800;
--error: #f44336;
--info: #2196f3;
--purple: #9c27b0;

/* Neutral Colors */
--bg-light: #f5f5f5;
--bg-card: #ffffff;
--text-primary: #333;
--text-secondary: #666;
--text-light: #999;
--border: #e0e0e0;
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
@media (max-width: 768px) {
  /* Mobile styles */
}

/* Grid Systems */
.stats-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.content-grid {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
```

## 🔄 Routing System

**Routes Configuration:**
```javascript
/                    → Landing Page (Public)
/login              → Login Page (Public)
/admin              → Admin Dashboard (Protected: admin only)
/donor              → Donor Dashboard (Protected: donor only)
/recipient          → Recipient Dashboard (Protected: recipient only)
/analyst            → Analyst Dashboard (Protected: analyst only)
/*                  → Redirect to /
```

**Protection Logic:**
1. Check if user is authenticated
2. Check if user has required role
3. If not authenticated → redirect to /login
4. If wrong role → redirect to user's dashboard
5. If authorized → render component

## 📊 Data Flow

### Login Flow
```
User submits form
    ↓
AuthContext.login()
    ↓
Store user in state + localStorage
    ↓
Navigate to role-specific dashboard
```

### Logout Flow
```
User clicks logout
    ↓
AuthContext.logout()
    ↓
Clear state + localStorage
    ↓
Navigate to /login
```

### Protected Route Flow
```
Access protected route
    ↓
ProtectedRoute checks auth
    ↓
If not authenticated → /login
    ↓
If wrong role → correct dashboard
    ↓
If authorized → render component
```

## 🎯 Key Design Patterns

### 1. Context API Pattern
```javascript
// Create context
const AuthContext = createContext();

// Provider component
<AuthProvider>
  {children}
</AuthProvider>

// Consumer hook
const { user, login, logout } = useAuth();
```

### 2. Protected Route Pattern
```javascript
<ProtectedRoute allowedRoles={['admin']}>
  <AdminDashboard />
</ProtectedRoute>
```

### 3. Component Composition
```javascript
// Reusable components
<Navbar />
<StatCard icon={...} label={...} value={...} />
<Card header={...} content={...} />
```

### 4. Form Handling
```javascript
// Controlled components
const [formData, setFormData] = useState({...});

// Update handler
onChange={(e) => setFormData({
  ...formData, 
  [field]: e.target.value
})}

// Submit handler
onSubmit={(e) => {
  e.preventDefault();
  // Process form
}}
```

## 🚀 Performance Optimizations

### Implemented:
- ✅ Code splitting with lazy loading (ready for implementation)
- ✅ Efficient re-renders with proper state management
- ✅ CSS optimizations (no heavy animations)
- ✅ Minimal dependencies
- ✅ Vite for fast dev and build

### Future Optimizations:
- React.memo for expensive components
- useMemo for computed values
- useCallback for function props
- Virtual scrolling for long lists
- Image optimization
- Bundle size optimization

## 🔐 Security Considerations

### Current Implementation:
- Role-based access control
- Protected routes
- Input validation (basic)
- XSS prevention (React escapes by default)

### Production Requirements:
- JWT authentication
- HTTPS only
- CSRF protection
- Rate limiting
- Input sanitization
- SQL injection prevention (backend)
- Password hashing (backend)
- Secure session management

## 📱 Responsive Design Strategy

### Breakpoints:
- Desktop: > 768px (Full grid layouts)
- Tablet: 768px (Adjusted grids)
- Mobile: < 768px (Stacked layouts)

### Responsive Techniques:
```css
/* Flexible grids */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* Flexbox wrapping */
flex-wrap: wrap;

/* Media queries */
@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
```

## 🧪 Testing Strategy (For Production)

### Unit Tests:
- Component rendering
- User interactions
- State management
- Utility functions

### Integration Tests:
- Authentication flow
- Form submissions
- Navigation
- Data fetching

### E2E Tests:
- Complete user journeys
- Cross-role interactions
- Error scenarios

## 📚 Dependencies Explained

```json
{
  "react": "^19.2.0",           // UI library
  "react-dom": "^19.2.0",       // DOM rendering
  "react-router-dom": "^6.x",   // Routing
  "recharts": "^2.x",           // Charts
  "lucide-react": "^0.x",       // Icons
  "date-fns": "^3.x"            // Date utilities
}
```

## 🎓 Code Quality

### Best Practices Used:
- ✅ Component modularity
- ✅ Separation of concerns
- ✅ Consistent naming conventions
- ✅ DRY principle
- ✅ Semantic HTML
- ✅ Accessible UI elements
- ✅ Clean code structure
- ✅ Comments where needed

### Code Organization:
```
src/
├── components/        # Feature-based organization
│   ├── Admin/        # Related files together
│   │   ├── AdminDashboard.jsx
│   │   └── Admin.css
│   └── ...
├── contexts/         # Global state
└── assets/           # Static files
```

## 🔄 Future Backend Integration

### API Endpoints Needed:

**Authentication:**
```
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/register
GET  /api/auth/me
```

**Donations:**
```
GET    /api/donations
POST   /api/donations
GET    /api/donations/:id
PUT    /api/donations/:id
DELETE /api/donations/:id
```

**Requests:**
```
GET  /api/requests
POST /api/requests
PUT  /api/requests/:id
```

**Analytics:**
```
GET /api/analytics/trends
GET /api/analytics/categories
GET /api/analytics/rankings
GET /api/analytics/impact
```

**Admin:**
```
GET    /api/admin/users
PUT    /api/admin/users/:id/approve
DELETE /api/admin/users/:id
GET    /api/admin/activity
```

### Data Models Needed:

**User:**
```javascript
{
  id: string,
  email: string,
  password: string (hashed),
  role: enum('admin', 'donor', 'recipient', 'analyst'),
  name: string,
  organization: string,
  location: object,
  status: enum('pending', 'approved', 'rejected'),
  createdAt: date,
  updatedAt: date
}
```

**Donation:**
```javascript
{
  id: string,
  donorId: string,
  itemName: string,
  category: string,
  quantity: number,
  unit: string,
  expiryDate: date,
  location: string,
  description: string,
  status: enum('active', 'in-transit', 'completed', 'cancelled'),
  recipientId: string | null,
  createdAt: date,
  updatedAt: date
}
```

**Request:**
```javascript
{
  id: string,
  donationId: string,
  recipientId: string,
  status: enum('pending', 'confirmed', 'in-transit', 'completed'),
  estimatedDelivery: date,
  actualDelivery: date | null,
  notes: string,
  createdAt: date,
  updatedAt: date
}
```

---

**This technical document provides a comprehensive overview of the implementation for developers and maintainers.**
