# Restaurant Admin Dashboard

A modern, professional restaurant management admin dashboard built with React, featuring real-time analytics, order management, menu administration, and interactive data visualizations.

## Features

### 📊 Dashboard Overview
- **4 Stat Cards** displaying key metrics:
  - Total Revenue: $24,500
  - Orders Today: 142
  - New Customers: 38
  - Active Tables: 12/20
- **Recent Orders Table** showing last 5 orders with status badges
- **Top Selling Items** with progress bar visualization
- **7-Day Revenue Chart** using Recharts line graph

### 📋 Orders Management
- Searchable orders table with comprehensive filtering
- Status filters: Pending, Preparing, Delivered, Cancelled
- Color-coded status badges for quick identification
- Pagination UI (10 items per page)
- Order details including ID, customer, items, total, status, time

### 🍽️ Menu Management
- Grid-based menu item cards with image placeholders
- **Category Filters**: All, Starters, Mains, Desserts, Drinks
- **Add/Edit/Delete functionality** with modal form
- Item details: name, price, category, description
- Modal form for creating and editing menu items
- Responsive card layout

### 📈 Analytics Dashboard
- **Revenue Line Chart** (30-day trend) with interactive tooltips
- **Orders by Category Pie Chart** with color coding
- **Weekly Sales Bar Chart** with performance data
- **Analytics Stat Cards**:
  - Best Day: Saturday
  - Average Order Value: $32.50
  - Top Category: Pizzas
  - Total Customers: 1,240

### 🔐 Login Page
- Minimal, centered card design
- Restaurant logo placeholder
- Email and password input fields
- Navigation to dashboard (no auth validation)

### 🎨 Layout & Navigation
- **Responsive Sidebar** with collapsible navigation
- Dark sidebar (#1a1a2e) with active route highlighting
- Hamburger menu toggle on mobile
- **Header** with page title and user info
- Smooth animations and transitions
- Mobile-responsive design

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Routing**: React Router DOM 6.20.0
- **Charts**: Recharts 2.10.3
- **Styling**: CSS Modules (no external CSS framework)
- **Font**: Poppins from Google Fonts

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx
│   ├── charts/           # Recharts visualizations
│   │   ├── RevenueLineChart.jsx
│   │   ├── PieChartComp.jsx
│   │   └── BarChartComp.jsx
│   └── layout/           # Layout components
│       ├── Sidebar.jsx
│       ├── Header.jsx
│       └── Layout.jsx
├── pages/               # Page components
│   ├── Login/
│   ├── Dashboard/
│   ├── Orders/
│   ├── Menu/
│   └── Analytics/
├── context/            # React context
│   └── AppContext.jsx
├── data/               # Hardcoded data
│   ├── dashboardData.js
│   ├── ordersData.js
│   ├── menuData.js
│   └── analyticsData.js
├── styles/            # Global styles
│   └── global.css
├── App.jsx            # Root component with routing
└── main.jsx           # Entry point
```

## Color Palette

- **Primary Dark**: #1a1a2e (Sidebar)
- **Primary Accent**: #e94560 (Red)
- **Secondary Accent**: #f5a623 (Gold)
- **Text Dark**: #333333
- **Text Light**: #666666
- **Background White**: #ffffff
- **Background Light**: #f5f5f5
- **Border Light**: #e0e0e0

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DAVI1771/admin-dashboard.git
cd admin-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Pages Overview

### 1. Login Page (`/login`)
- Centered card with pizza emoji
- Email and password inputs
- Login button navigates to dashboard
- Clean, minimal design

### 2. Dashboard (`/dashboard`)
- 4 stat cards with key metrics
- Recent orders table with status badges
- Top selling items with progress bars
- 7-day revenue line chart
- Responsive grid layout

### 3. Orders (`/orders`)
- Full orders table with all details
- Search by order ID or customer name
- Filter by status (All, Pending, Preparing, Delivered, Cancelled)
- Pagination support
- Color-coded status badges

### 4. Menu (`/menu`)
- Grid of menu item cards
- Filter by category
- Add New Item modal
- Edit and Delete buttons
- Item details: name, price, category, description

### 5. Analytics (`/analytics`)
- 30-day revenue trend chart
- Orders by category pie chart
- Weekly sales bar chart
- Key metrics stat cards
- Interactive Recharts visualizations

## Design Features

- ✅ **Pure CSS Modules** - No external CSS frameworks
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Accessible** - ARIA labels and semantic HTML
- ✅ **Smooth Animations** - 0.3s transitions throughout
- ✅ **Color-Coded Status** - Visual indicators for order status
- ✅ **Professional Typography** - Poppins font family
- ✅ **Hover Effects** - Interactive feedback on all elements
- ✅ **Sidebar Collapse** - Expandable navigation with smooth animation

## Hardcoded Data

All data is stored as constants in the `/data` folder:
- Dashboard stats and recent orders
- Menu items with categories
- Orders with status information
- Analytics metrics for 30 days

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend API integration
- Real authentication
- Database persistence
- Real-time order updates
- Export reports to PDF/CSV
- Dark mode toggle
- Multi-language support

## License

This project is open source and available under the MIT License.

## Author

Built as a modern restaurant admin dashboard demonstration with React and Recharts.

---

**Status**: ✅ Complete and fully functional

All pages built and tested:
- ✅ Login Page with navigation
- ✅ Dashboard with charts and tables
- ✅ Orders page with filters and search
- ✅ Menu management with modal
- ✅ Analytics with multiple charts
- ✅ Responsive design on all breakpoints
- ✅ Sidebar collapse on mobile

