import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../GlobalProvider'
import CostumeButton from '../components/CostumeButton'
import { ProductComponent } from '../components/ProductComponent'
import { FavoriteComponent } from '../components/FavoriteComponent'
import { HistoricComponent } from '../components/HistoricComponent'
import { useNavigate } from 'react-router-dom'
const Magazine = () => {
  const navigate = useNavigate()
  const [toggle, useToggle] = useState({
    products: false,
    favorites: false,
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
      <div className="min-h=[100vh] min-w-[100vw]">
        <div className="m-auto w-full flex justify-center items-center">
          <img
            src={user?.imagePath[0]}
            alt="profile_picture"
            className="h-[100px] rounded-[15px] border border-black-[10px] p-[2px] mt-[80px] "
          />
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
        <div className="m-auto w-full flex justify-center text-2xl items-center mt-[50px]">
          <span
            className="font-poppins-regular cursor-pointer"
            onClick={() => {
              useToggle({ products: true, favorites: false, historic: false })
            }}
          >
            Products
          </span>
          <span
            className="font-poppins-regular ml-[100px] mr-[100px] cursor-pointer"
            onClick={() =>
              useToggle({
                products: false,
                favorites: true,
                historic: false,
              })
            }
          >
            Favorites
          </span>
          <span
            className="font-poppins-regular cursor-pointer"
            onClick={() => {
              useToggle({ products: false, favorites: false, historic: true })
            }}
          >
            Historic
          </span>
        </div>
        <div className="w-[90vw] m-auto mt-[30px] grid grid-cols-6">
          {toggle.products && <ProductComponent />}
          {toggle.favorites && <FavoriteComponent />}
          {toggle.historic && <HistoricComponent />}
        </div>
      </div>
    )
  )
}

export default Magazine
