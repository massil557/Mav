import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../GlobalProvider'
import { FavoriteComponent } from '../components/FavoriteComponent'
import { HistoricComponent } from '../components/HistoricComponent'
const Client = () => {
  const [toggle, useToggle] = useState({
    favorites: true,
    historic: false,
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
          <img
            src={user?.imagePath[0]}
            alt="profile_picture"
            className="h-[70px] shadow-lg rounded-[50%] fixed  ml-3 p-[2px] mt-[40px] mb-2  "
          />

          <p className=" w-full ml-4 font-poppins-semibold fixed top-[120px] text-xl">
            {user.username}
          </p>
          <div className="m-auto w-full  fixed top-[160px] mt-[50px]">
            <div
              className="font-poppins-regular w-full ml-3 mb-5 cursor-pointer relative group  "
              onClick={() =>
                useToggle({
                  favorites: true,
                  historic: false,
                })
              }
            >
              Favorites
            </div>
            <div
              className="font-poppins-regular w-full ml-3 mb-5 cursor-pointer relative group "
              onClick={() => {
                useToggle({ products: false, favorites: false, historic: true })
              }}
            >
              Historic
            </div>
          </div>
        </div>

        <div className="w-full  h-full  overflow-x-hidden">
          {toggle.favorites && <FavoriteComponent user={user} />}
          {toggle.historic && <HistoricComponent />}
        </div>
      </div>
    )
  )
}

export default Client
