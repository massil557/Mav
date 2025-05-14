import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const StockBarChart = () => {
  const [productStocks, setProductStocks] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/stock')
      .then((res) => setProductStocks(res.data))
      .catch((err) => console.error('Failed to fetch data:', err))
  }, [])

  return (
    <div className="bg-white  rounded-2xl p-4 w-full">
      <h2 className="text-xl font-bold mb-4">Product Stock Levels</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={productStocks}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalStock" fill="#4f46e5" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StockBarChart
