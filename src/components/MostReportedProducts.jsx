import { useEffect, useState } from 'react'
import axios from 'axios'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const MostReportedDoughnutChart = () => {
  const [mostReported, setMostReported] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/most-reported')
      .then((res) => setMostReported(res.data))
      .catch((err) => console.error('Failed to fetch data:', err))
  }, [])

  // Prepare data for Pie Chart (signalCount distribution)
  const data = mostReported.map((product) => ({
    name: product.name,
    value: product.signalCount, // Represents number of reports
  }))

  // Colors for each slice
  const COLORS = ['#FF8042', '#FFBB28', '#00C49F', '#0088FE', '#FF5555']

  return (
    <div className="bg-white  rounded-2xl p-4 w-full">
      <h2 className="text-xl font-bold mb-4">Most Reported Products</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
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

export default MostReportedDoughnutChart
