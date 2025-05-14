import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../GlobalProvider'
import CostumeButton from '../components/CostumeButton'
import { FavoriteComponent } from '../components/FavoriteComponent'
import { HistoricComponent } from '../components/HistoricComponent'
import ProductComponent from '../components/ProductComponent'
import { useNavigate } from 'react-router-dom'
const Magazine = () => {
  const navigate = useNavigate()
  const [toggle, useToggle] = useState({
    products: false,
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
        <div className="overflow-x-hidden scrollbar-hide w-full  ">
          <div className="h-screen z-10 overflow-x-hidden scrollbar-hide  w-full">
            <img
              src={user?.imagePath[0]}
              alt="profile_picture"
              className="h-[70px] shadow-lg rounded-[50%] fixed  ml-3 p-[2px] mt-[40px] mb-2 "
              onClick={() => {
                navigate('/InsertProduct')
              }}
            />

            <p className=" w-full ml-4 font-poppins-semibold fixed top-[120px] text-xl ">
              {user.username}
            </p>
            <div className=" fixed top-[160px] mt-[50px] ml-3 ">
              <div
                className="font-poppins-regular w-full m-auto  cursor-pointer relative mb-5 "
                onClick={() => {
                  useToggle({
                    products: true,
                    favorites: false,
                    historic: false,
                  })
                }}
              >
                Products
                {/* <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              <div
                className={toggle.products ? 'border-black border-[1px]' : ''}
              ></div> */}
              </div>
              <div
                className="font-poppins-regular w-full   m-auto  cursor-pointer relative mb-5 "
                onClick={() =>
                  useToggle({
                    products: false,
                    favorites: true,
                    historic: false,
                  })
                }
              >
                Favorites
                {/* <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              <div
                className={toggle.favorites ? 'border-black border-[1px]' : ''}
              ></div> */}
              </div>
              <div
                className="font-poppins-regular w-full  m-auto  cursor-pointer relative "
                onClick={() => {
                  useToggle({
                    products: false,
                    favorites: false,
                    historic: true,
                  })
                }}
              >
                Historic
                {/* <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              <div
                className={toggle.historic ? 'border-black border-[1px]' : ''}
              ></div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  h-full  overflow-x-hidden">
          {toggle.products && <ProductComponent user={user} />}
          {toggle.favorites && <FavoriteComponent user={user} />}
          {toggle.historic && <HistoricComponent />}
        </div>
      </div>
    )
  )
}

export default Magazine
