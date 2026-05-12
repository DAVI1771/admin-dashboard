import { Layout } from '../../components/layout'
import { Card, Badge } from '../../components/common'
import { RevenueLineChart } from '../../components/charts'
import { dashboardStats, recentOrders, topSellingItems, revenueData } from '../../data'
import styles from './Dashboard.module.css'

const Dashboard = () => {
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
    <Layout title="Overview" subtitle="Restaurant performance at a glance">
      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        {dashboardStats.map((stat, index) => (
          <Card key={index} className={styles.statCard}>
            <div className={styles.statContent}>
              <div className={styles.statIcon} style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div>
                <p className={styles.statLabel}>{stat.label}</p>
                <h3 className={styles.statValue}>{stat.value}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts and Tables Section */}
      <div className={styles.mainGrid}>
        {/* Recent Orders */}
        <Card title="Recent Orders" className={styles.section}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className={index % 2 === 0 ? styles.altRow : ''}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td className={styles.itemsCell}>{order.items}</td>
                  <td className={styles.priceCell}>{order.total}</td>
                  <td>
                    <Badge status={getStatusBadgeType(order.status)}>
                      {order.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Top Selling Items */}
        <Card title="Top Selling Items" className={styles.section}>
          <div className={styles.itemsList}>
            {topSellingItems.map((item, index) => (
              <div key={index} className={styles.itemRow}>
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemSales}>{item.sales} sold</p>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Revenue Chart */}
      <div className={styles.chartSection}>
        <RevenueLineChart data={revenueData} title="Revenue (Last 7 Days)" />
      </div>
    </Layout>
  )
}

export default Dashboard
