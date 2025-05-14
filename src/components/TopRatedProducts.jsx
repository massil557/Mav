import { useEffect, useState } from 'react'
import axios from 'axios'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const TopRatedPieChart = () => {
  const [topRated, setTopRated] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/top-rated')
      .then((res) => setTopRated(res.data))
      .catch((err) => console.error('Failed to fetch data:', err))
  }, [])

  // Prepare data for Pie Chart (rating distribution)
  const data = topRated.map((product) => ({
    name: product.name,
    value: product.rating, // You can map the rating or score
  }))

  // Colors for each slice
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5555']

  return (
    <div className="bg-white  rounded-2xl p-4 w-full">
      <h2 className="text-xl font-bold mb-4">Top Rated Products</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default TopRatedPieChart
