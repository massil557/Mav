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
      <div className="min-h=[100vh] min-w-[100vw] ">
        <div className="m-auto w-full mb-[50px] flex flex-col gap-4 justify-center bgc items-center">
          <img
            src={user?.imagePath[0]}
            alt="profile_picture"
            className="h-[100px] shadow-lg rounded-[50%]   p-[2px] mt-[80px] "
          />

          <p className=" text-center font-poppins-semibold text-xl ">
            {user.username}
          </p>
        </div>
        <div className="m-auto w-full flex justify-center items-center">
          <CostumeButton
            black={true}
            hg={'40px'}
            w={'200px'}
            text={'Add product'}
            styles={'mt-[30px] text-xl'}
            handel={() => {
              navigate('/InsertProduct')
            }}
          />
        </div>
        <div className="m-auto w-full flex gap-[80px] justify-center text-2xl items-center mt-[50px]">
          <span
            className="font-poppins-regular  cursor-pointer relative group "
            onClick={() => {
              useToggle({ products: true, favorites: false, historic: false })
            }}
          >
            Products
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            <div
              className={toggle.products ? 'border-black border-[1px]' : ''}
            ></div>
          </span>
          <span
            className="font-poppins-regular  cursor-pointer relative group "
            onClick={() =>
              useToggle({
                products: false,
                favorites: true,
                historic: false,
              })
            }
          >
            Favorites
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            <div
              className={toggle.favorites ? 'border-black border-[1px]' : ''}
            ></div>
          </span>
          <span
            className="font-poppins-regular  cursor-pointer relative group "
            onClick={() => {
              useToggle({ products: false, favorites: false, historic: true })
            }}
          >
            Historic
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            <div
              className={toggle.historic ? 'border-black border-[1px]' : ''}
            ></div>
          </span>
        </div>
        <div className="w-[90vw] m-auto mt-[30px] grid grid-cols-6">
          {toggle.products && <ProductComponent user={user} />}
          {toggle.favorites && <FavoriteComponent user={user} />}
          {toggle.historic && <HistoricComponent />}
        </div>
      </div>
    )
  )
}

export default Magazine
