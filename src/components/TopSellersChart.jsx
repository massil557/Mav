import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const TopSellersChart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/top-sellers')
      .then((res) => setData(res.data))
      .catch((err) => console.error('Failed to fetch data:', err))
  }, [])

  return (
    <div className="bg-white rounded-2xl p-4 w-full h-[400px]">
      <h2 className="text-xl font-bold mb-4">Top 6 Best-Selling Products</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#4f46e5" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TopSellersChart
