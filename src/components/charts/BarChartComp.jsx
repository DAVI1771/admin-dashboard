import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '../common'
import styles from './charts.module.css'

export const BarChartComp = ({ data, title = 'Weekly Sales' }) => {
  return (
    <Card title={title} className={styles.chartCard}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="var(--text-light)" />
          <YAxis stroke="var(--text-light)" />
          <Tooltip />
          <Bar dataKey="value" fill="var(--primary-accent)" radius={[6,6,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
