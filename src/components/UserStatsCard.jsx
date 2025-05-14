import { useEffect, useState } from 'react'
import axios from 'axios'

const UserStatsCard = () => {
  const [stats, setStats] = useState({ users: 0, magazines: 0 })

  useEffect(() => {
    axios
      .get('http://localhost:3000/user-stats')
      .then((res) => setStats(res.data))
      .catch((err) => console.error('Failed to fetch user stats:', err))
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4 h-[200px]">
      <div className="bg-blue-100 text-blue-800 p-4 rounded-2xl shadow-md text-center width-[100px]">
        <h2 className="text-lg font-semibold">Clients</h2>
        <p className="text-3xl">{stats.users}</p>
      </div>
      <div className="bg-purple-100 text-purple-800 p-4 rounded-2xl shadow-md text-center width-[100px]">
        <h2 className="text-lg font-semibold">Magazines</h2>
        <p className="text-3xl">{stats.magazines}</p>
      </div>
    </div>
  )
}

export default UserStatsCard
