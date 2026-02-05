# Quick Start Guide - Food Waste Platform

## 🚀 Running the Application

The application is now running at: **http://localhost:5173/**

## 📝 How to Use

### 1. Landing Page
- Open http://localhost:5173/ in your browser
- You'll see the landing page with platform overview
- Click "Get Started" or "Sign In" to proceed to login

### 2. Login
- Select your desired role from the dropdown:
  - **Admin** - For platform management
  - **Food Donor** - To list food donations
  - **Recipient Organization** - To request food
  - **Data Analyst** - To view analytics
- Enter any email and password (demo mode)
- Click "Sign In"

### 3. Explore Each Dashboard

#### 👨‍💼 Admin Dashboard
**Features:**
- View platform statistics (users, donations, approvals)
- Monitor recent activity
- Approve/reject pending user registrations
- Access platform management tools

**Try:**
- Check the stats cards showing active users and donations
- Review pending approvals
- See recent activity feed

#### 🎁 Food Donor Dashboard
**Features:**
- List new food donations
- Track donation status
- View impact metrics

**Try:**
1. Click "List New Donation"
2. Fill in the form:
   - Item name (e.g., "Fresh Vegetables")
   - Category (vegetables, fruits, dairy, etc.)
   - Quantity and unit
   - Expiry date
   - Pickup location
   - Description (optional)
3. Click "List Donation"
4. View your donations in the list below

#### 🏢 Recipient Organization Dashboard
**Features:**
- Browse available donations
- Search and filter by category
- Request donations
- Track delivery status

**Try:**
1. Use the search bar to find specific items
2. Filter by category (vegetables, bakery, dairy, etc.)
3. Click "Request Donation" on available items
4. Check "My Requests" section for status updates

#### 📊 Data Analyst Dashboard
**Features:**
- View comprehensive analytics
- Interactive charts (line, bar, pie)
- Top performer rankings
- Export reports

**Try:**
1. Change date range (Last Week, Month, Quarter, Year)
2. Explore different charts:
   - Donation trends over time
   - Food category distribution
   - Monthly comparisons
3. Check top donors and recipients
4. Read key insights
5. Click "Export Report"

## 🎯 Demo Credentials

Use any of these example emails (or make up your own):
- admin@foodwaste.com
- donor@restaurant.com
- recipient@foodbank.org
- analyst@platform.com

Password: any text (demo mode doesn't validate)

## 🔄 Switching Between Roles

To test different roles:
1. Click "Logout" in the top navigation
2. Return to login page
3. Select a different role
4. Login with any credentials
5. Explore the new dashboard

## 📱 Features to Test

### Navigation
- ✅ Landing page with smooth animations
- ✅ Role-based login
- ✅ Protected routes (try accessing /admin without logging in)
- ✅ Automatic redirection based on role
- ✅ Logout functionality

### Data Visualization
- ✅ Line charts for trends
- ✅ Pie charts for distribution
- ✅ Bar charts for comparisons
- ✅ Interactive tooltips on hover
- ✅ Responsive charts

### Forms & Interactions
- ✅ Add donation form with validation
- ✅ Search and filter functionality
- ✅ Request/approve actions
- ✅ Date range selection
- ✅ Export functionality

### Responsive Design
- ✅ Desktop view (>768px)
- ✅ Tablet view (768px)
- ✅ Mobile view (<768px)
- Resize browser to test responsiveness

## 🎨 UI Elements to Notice

### Design Features
- Gradient backgrounds (purple to pink)
- Smooth hover animations
- Card-based layouts
- Color-coded status indicators
- Icon integration throughout
- Floating animation on landing page

### Color Meanings
- 🟦 Blue (#2196f3) - Information, Active
- 🟩 Green (#4caf50) - Success, Completed
- 🟧 Orange (#ff9800) - Warning, In-Transit
- 🟥 Red (#f44336) - Error, Rejected
- 🟪 Purple (#667eea) - Primary actions, Branding

## 📊 Sample Data Included

The platform includes demo data for:
- 12+ pending approvals
- 40+ donations across categories
- 1,247 active users
- 24,892 meals provided
- Trend data for 7 months
- Top 5 donors and recipients

## 🛠️ Development Tips

### Making Changes
1. Edit any file in `src/` directory
2. Vite will automatically reload (Hot Module Replacement)
3. Check browser console for any errors

### Project Structure
```
src/
├── components/     # All React components
├── contexts/       # Global state management
├── App.jsx        # Main app with routing
└── main.jsx       # App entry point
```

### Key Files to Explore
- `App.jsx` - Main routing configuration
- `AuthContext.jsx` - Authentication logic
- `*Dashboard.jsx` - Each role's interface
- `Landing.jsx` - Marketing homepage

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Clear Cache
If seeing old content:
```bash
npm run build
npm run preview
```

### Dependencies Issues
Reinstall packages:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🎓 Learning Points

This project demonstrates:
- ✅ React 19 with modern hooks
- ✅ Context API for state management
- ✅ React Router for navigation
- ✅ Recharts for data visualization
- ✅ Component composition
- ✅ Protected routes
- ✅ Form handling
- ✅ Responsive CSS
- ✅ Modern ES6+ JavaScript

## 📈 Next Steps

To extend this project:
1. Add backend API integration
2. Implement real authentication (JWT)
3. Add database (MongoDB, PostgreSQL)
4. Include image uploads
5. Add real-time notifications
6. Integrate maps API
7. Add email notifications
8. Implement search with Elasticsearch
9. Add unit tests (Jest, React Testing Library)
10. Deploy to production (Vercel, Netlify)

## 💡 Tips for Demo/Presentation

1. **Start with Landing Page** - Show the overview
2. **Login as Different Roles** - Demonstrate role-based access
3. **Show Key Features** - Focus on unique aspects of each role
4. **Highlight Analytics** - Data visualization is impressive
5. **Demonstrate Responsiveness** - Resize browser
6. **Explain Impact** - Connect features to real-world problem

## 🌟 Highlight These Features

When presenting:
- ✨ Beautiful, modern UI
- ✨ Role-based dashboards
- ✨ Interactive charts and visualizations
- ✨ Complete CRUD operations
- ✨ Responsive design
- ✨ Real-world problem solving

---

**Enjoy exploring the Food Waste Platform! 🎉**
