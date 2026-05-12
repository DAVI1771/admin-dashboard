import { Layout } from '../../components/layout'
import { Card } from '../../components/common'
import { RevenueLineChart, PieChartComp, BarChartComp } from '../../components/charts'
import { revenueData30Days, ordersByCategory, categoryColors, weeklySalesData, analyticsStats } from '../../data'
import styles from './Analytics.module.css'

const Analytics = () => {
  return (
    <Layout title="Analytics" subtitle="Visualize your restaurant's data">
      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        {analyticsStats.map((stat, index) => (
          <Card key={index} className={styles.statCard}>
            <div className={styles.statContent}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div>
                <p className={styles.statLabel}>{stat.label}</p>
                <h3 className={styles.statValue}>{stat.value}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className={styles.chartsGrid}>
        <div className={styles.fullWidth}>
          <RevenueLineChart data={revenueData30Days} title="Revenue (Last 30 Days)" />
        </div>

        <div>
          <PieChartComp data={ordersByCategory} colors={categoryColors} title="Orders by Category" />
        </div>

        <div>
          <BarChartComp data={weeklySalesData} title="Weekly Sales" />
        </div>
      </div>
    </Layout>
  )
}

export default Analytics
