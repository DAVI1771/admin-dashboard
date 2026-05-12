import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Orders from './pages/Orders/Orders'
import Menu from './pages/Menu/Menu'
import Analytics from './pages/Analytics/Analytics'

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
