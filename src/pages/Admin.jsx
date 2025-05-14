import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../GlobalProvider'
import { FavoriteComponent } from '../components/FavoriteComponent'
import { HistoricComponent } from '../components/HistoricComponent'
import NewProducts from '../components/NewProducts'
import { useNavigate } from 'react-router-dom'
import NewMagazine from '../components/NewMagazine'
import ReportedProducts from '../components/ReportedProducts'
import AdminDashBoard from '../components/AdminDashBoard'
const Admin = () => {
  const navigate = useNavigate()

  const [toggle, useToggle] = useState({
    newProducts: false,
    newMagazines: false,
    ReportedProducts: false,
    ReportedMagazines: false,
    favorites: false,
    historic: false,
    AdminDashBoard: true,
  })
  const { user, setUser } = useContext(GlobalContext)

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])

  return (
    user && (
      <div className="min-h-[100vh] w-[99vw]  overflow-x-hidden  grid grid-cols-[1fr_4fr]  relative overflow-x-hidden	">
        <div className="overflow-x-hidden scrollbar-hide">
          <div className="h-screen z-10 overflow-x-hidden scrollbar-hide  w-full">
            <img
              src={user?.imagePath[0]}
              alt="profile_picture"
              className="h-[70px] shadow-lg rounded-[50%] fixed  ml-3 p-[2px] mt-[40px] mb-2 "
            />

            <p className="w-full ml-4 font-poppins-semibold fixed top-[120px] text-xl ">
              {user.username}
            </p>
            <div className="m-auto w-full  fixed top-[160px] mt-[50px]">
              <div
                className="font-poppins-regular w-full ml-3 mb-5 cursor-pointer relative group "
                onClick={() =>
                  useToggle({
                    newProducts: false,
                    newMagazines: false,
                    ReportedProducts: false,
                    ReportedMagazines: false,
                    favorites: false,
                    historic: false,
                    AdminDashBoard: true,
                  })
                }
              >
                DashBoard
              </div>

              <div
                className="font-poppins-regular w-full ml-3 mb-5 cursor-pointer relative group "
                onClick={() =>
                  useToggle({
                    newProducts: true,
                    newMagazines: false,
                    ReportedProducts: false,
                    ReportedMagazines: false,
                    favorites: false,
                    historic: false,
                    AdminDashBoard: false,
                  })
                }
              >
                New Products
              </div>

              <div
                className="font-poppins-regular w-full ml-3 mb-5  cursor-pointer relative group "
                onClick={() => {
                  useToggle({
                    newProducts: false,
                    newMagazines: true,
                    ReportedProducts: false,
                    ReportedMagazines: false,
                    favorites: false,
                    historic: false,
                    AdminDashBoard: false,
                  })
                }}
              >
                New Magazines
              </div>

              <div
                className="font-poppins-regular w-full ml-3 mb-5  text-sm cursor-pointer relative group "
                onClick={() =>
                  useToggle({
                    newProducts: false,
                    newMagazines: false,
                    ReportedProducts: true,
                    ReportedMagazines: false,
                    favorites: false,
                    historic: false,
                    AdminDashBoard: false,
                  })
                }
              >
                Reported Products
              </div>

              <div
                className="font-poppins-regular w-full  ml-3 mb-5  text-[13px] cursor-pointer relative group "
                onClick={() =>
                  useToggle({
                    newProducts: false,
                    newMagazines: false,
                    ReportedProducts: false,
                    ReportedMagazines: true,
                    favorites: false,
                    historic: false,
                    AdminDashBoard: false,
                  })
                }
              >
                Reported Magazines
              </div>

              <div
                className="font-poppins-regular w-full ml-3 mb-5  cursor-pointer relative group  "
                onClick={() =>
                  useToggle({
                    newProducts: false,
                    newMagazines: false,
                    ReportedProducts: false,
                    ReportedMagazines: false,
                    favorites: true,
                    historic: false,
                    AdminDashBoard: false,
                  })
                }
              >
                Favorites
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  h-full  overflow-x-hidden">
          {toggle.newProducts && <NewProducts />}
          {toggle.favorites && <FavoriteComponent user={user} />}
          {toggle.historic && <HistoricComponent />}
          {toggle.newMagazines && <NewMagazine />}
          {toggle.ReportedProducts && <ReportedProducts />}
          {toggle.AdminDashBoard && <AdminDashBoard />}
        </div>
      </div>
    )
  )
}

export default Admin
