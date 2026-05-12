import { useState } from 'react'
import { Layout } from '../../components/layout'
import { Card, Badge, Button } from '../../components/common'
import { ordersData, statusList } from '../../data'
import styles from './Orders.module.css'

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredOrders = ordersData.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'All' || order.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const itemsPerPage = 10
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage)

  const getStatusBadgeType = (status) => {
    const statusMap = {
      'Delivered': 'delivered',
      'Pending': 'pending',
      'Preparing': 'preparing',
      'Cancelled': 'cancelled',
    }
    return statusMap[status] || 'default'
  }

  return (
    <Layout title="Orders" subtitle="Manage and track all orders">
      <Card>
        {/* Search and Filters */}
        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search by order ID or customer..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterButtons}>
            {['All', ...statusList].map((status) => (
              <Button
                key={status}
                variant={filterStatus === status ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => {
                  setFilterStatus(status)
                  setCurrentPage(1)
                }}
              >
                {status}
              </Button>
            ))}
          </div>
        </div>

        {/* Orders Table */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order, index) => (
              <tr key={index} className={index % 2 === 0 ? styles.altRow : ''}>
                <td className={styles.orderId}>{order.id}</td>
                <td>{order.customer}</td>
                <td className={styles.itemsCell}>{order.items}</td>
                <td className={styles.totalCell}>{order.total}</td>
                <td>
                  <Badge status={getStatusBadgeType(order.status)}>
                    {order.status}
                  </Badge>
                </td>
                <td className={styles.timeCell}>{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className={styles.pagination}>
          <Button
            variant="ghost"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ← Previous
          </Button>

          <div className={styles.pageInfo}>
            Page {currentPage} of {totalPages || 1}
          </div>

          <Button
            variant="ghost"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next →
          </Button>
        </div>
      </Card>
    </Layout>
  )
}

export default Orders
