import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Card } from '../common'
import styles from './charts.module.css'

export const RevenueLineChart = ({ data, title = 'Revenue' }) => {
  return (
    <Card title={title} className={styles.chartCard}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="var(--text-light)" />
          <YAxis stroke="var(--text-light)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--bg-white)',
              border: '1px solid var(--border-light)',
              borderRadius: '6px',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--primary-accent)"
            dot={{ fill: 'var(--primary-accent)', r: 5 }}
            activeDot={{ r: 7 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
