import TopSellersChart from './TopSellersChart'
import TopRatedProducts from './TopRatedProducts'
import MostReportedProducts from './MostReportedProducts'
import StockBarChart from './StockBarChart'
import UserStatsCard from './UserStatsCard'
const AdminDashBoard = () => {
  return (
    <div className="grid grid-rows-4">
      <TopSellersChart />
      <div className="grid grid-cols-2">
        <TopRatedProducts />
        <MostReportedProducts />
      </div>
      <StockBarChart />
      <UserStatsCard />
    </div>
  )
}

export default AdminDashBoard
