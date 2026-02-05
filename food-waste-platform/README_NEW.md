# Food Waste Platform - FSAD-PS09

A comprehensive web platform designed to reduce food wastage and improve food security by connecting food donors with recipient organizations, providing analytics, and enabling efficient food resource management.

## 🎯 Project Overview

This platform addresses the critical issues of food waste and food insecurity by creating a digital ecosystem where:
- **Food Donors** can easily list surplus food
- **Recipient Organizations** can request and receive donations
- **Data Analysts** can track trends and measure impact
- **Admins** can manage the platform and ensure data accuracy

## ✨ Features

### 🔐 Multi-Role Authentication System
- Secure login with role-based access control
- Four distinct user roles with tailored dashboards
- Protected routes for authorized access

### 👨‍💼 Admin Dashboard
- Platform-wide statistics and metrics
- User management and approval system
- Real-time activity monitoring
- Content moderation tools
- Comprehensive user analytics

### 🎁 Food Donor Interface
- Easy donation listing with detailed forms
- Real-time tracking of donation status
- Impact metrics (food saved, meals provided)
- Donation history and analytics
- Category-based food classification
- Expiry date management

### 🏢 Recipient Organization Dashboard
- Browse available food donations
- Advanced search and filtering by category
- Request management system
- Logistics coordination tools
- Track delivery status
- Impact reporting (people served, food received)

### 📊 Data Analyst Dashboard
- Comprehensive data visualization with Recharts
- Monthly trend analysis
- Food category distribution (Pie charts)
- Donor and recipient performance rankings
- Impact metrics (CO2 reduction, cost savings)
- Exportable reports
- Key insights and recommendations

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.2.0** - Modern UI library
- **Vite 7.2.4** - Fast build tool and dev server

### Routing & State Management
- **React Router DOM** - Client-side routing
- **React Context API** - Global state management

### Data Visualization
- **Recharts** - Responsive chart library for analytics
- Line charts for trend analysis
- Bar charts for comparisons
- Pie charts for distribution

### UI Components & Icons
- **Lucide React** - Beautiful icon library
- Custom CSS with modern design patterns
- Responsive grid layouts
- Gradient backgrounds and animations

### Date Management
- **date-fns** - Modern date utility library

## 📁 Project Structure

```
food-waste-platform/
├── src/
│   ├── components/
│   │   ├── Admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── Admin.css
│   │   ├── Analyst/
│   │   │   ├── AnalystDashboard.jsx
│   │   │   └── Analyst.css
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Auth.css
│   │   ├── Donor/
│   │   │   ├── DonorDashboard.jsx
│   │   │   └── Donor.css
│   │   ├── Landing/
│   │   │   ├── Landing.jsx
│   │   │   └── Landing.css
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Layout.css
│   │   ├── ProtectedRoute/
│   │   │   └── ProtectedRoute.jsx
│   │   └── Recipient/
│   │       ├── RecipientDashboard.jsx
│   │       └── Recipient.css
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd food-waste-platform
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 👥 User Roles & Access

### Admin
**Demo Login:**
- Select "Admin" role
- Use any email/password (demo mode)

**Capabilities:**
- Manage all users and content
- Approve/reject new registrations
- View platform-wide analytics
- Monitor all activities

### Food Donor
**Demo Login:**
- Select "Food Donor" role
- Use any email/password (demo mode)

**Capabilities:**
- List new food donations
- Track donation status
- View personal impact metrics
- Manage donation history

### Recipient Organization
**Demo Login:**
- Select "Recipient Organization" role
- Use any email/password (demo mode)

**Capabilities:**
- Browse available donations
- Request food items
- Track delivery status
- View impact on people served

### Data Analyst
**Demo Login:**
- Select "Data Analyst" role
- Use any email/password (demo mode)

**Capabilities:**
- Access comprehensive analytics
- Generate reports
- View trend analysis
- Export data

## 🎨 Key Features Explained

### Authentication System
- Built with React Context API
- Persistent sessions with localStorage
- Role-based route protection
- Automatic redirection based on user role

### Donation Management
- Comprehensive form validation
- Category classification (vegetables, fruits, dairy, bakery, canned, prepared, other)
- Quantity and unit tracking
- Expiry date monitoring
- Location-based information

### Analytics Dashboard
- Real-time data visualization
- Multiple chart types (Line, Bar, Pie)
- Trend analysis over time
- Performance rankings
- Impact metrics calculation

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive components
- Touch-friendly interfaces

## 🌟 Design Highlights

### Modern UI/UX
- Clean, professional interface
- Gradient color schemes
- Smooth animations and transitions
- Intuitive navigation
- Accessibility considerations

### Color Palette
- Primary: #667eea to #764ba2 (Purple gradient)
- Success: #4caf50 (Green)
- Warning: #ff9800 (Orange)
- Error: #f44336 (Red)
- Info: #2196f3 (Blue)

## 📊 Data Features

### Statistics Tracked
- Total donations and active listings
- Food saved (weight in kg)
- People served
- Impact scores
- CO2 reduction
- Cost savings

### Analytics Visualizations
- Monthly donation trends (Line charts)
- Category distribution (Pie charts)
- Comparative analysis (Bar charts)
- Top donor/recipient rankings
- Impact metrics over time

## 🔒 Security Features

- Protected routes with authentication
- Role-based access control
- Secure session management
- Input validation
- XSS protection considerations

## 🚀 Future Enhancements

- Real-time notifications
- In-app messaging between donors and recipients
- Map integration for location tracking
- Mobile app (React Native)
- Email notifications
- Advanced filtering and search
- Multi-language support
- Integration with food banks APIs
- Blockchain for donation tracking
- AI-powered matching algorithm
- Photo uploads for donations
- Rating and review system

## 📝 Current Implementation

### Demo Mode Features
- Mock authentication system
- Static demo data for all dashboards
- Simulated user interactions
- Local storage for session persistence

### Ready for Backend Integration
The frontend is structured to easily integrate with a backend API:
- Centralized API calls ready to be implemented
- Consistent data models
- Error handling structure in place
- Loading states prepared

## 🤝 Contributing

This is an educational project demonstrating food waste management platform capabilities.

## 📞 Support

For questions about this project, please refer to the code comments and documentation.

---

**Built with ❤️ to reduce food waste and improve food security**

## 🎯 Project Requirements Met

✅ Admin role - Manage platform content and oversee interactions  
✅ Food Donor role - List surplus food and track impact  
✅ Recipient Organization role - Request donations and manage logistics  
✅ Data Analyst role - Track trends and generate reports  
✅ Modern React with Vite  
✅ Responsive design  
✅ Role-based authentication  
✅ Data visualization and analytics  
✅ Comprehensive user interfaces for all roles
