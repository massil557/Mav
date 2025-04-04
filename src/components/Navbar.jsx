import Links from './Links'
import { cart, logo, user1 } from '../../assets'
import SearchInput from './SearchInput'
import CostumeButton from './CostumeButton'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../GlobalProvider'
import { useContext, useEffect } from 'react'
import axios from 'axios'
export const Navbar = () => {
  const { setUser } = useContext(GlobalContext)
  const navigate = useNavigate()
  const loginFunc = () => {
    navigate('/login')
  }
  const LogoutFunc = async () => {
    const token = localStorage.getItem('refreshToken')
    try {
      await axios.post(
        'http://localhost:3000/api/logout',
        { token },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      localStorage.removeItem('user')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      setUser(null)
      navigate('/')
    } catch (error) {
      console.log(
        `we had an error stttttttttatuuuuuuus ${error.response.status}`
      )
      if (error.response.status === 403) {
        let accessToken1
        try {
          const token = localStorage.getItem('refreshToken')
          const response = await axios.post('http://localhost:3000/token', {
            token,
          })
          console.log(response)
          const { accessToken } = response.data
          accessToken1 = accessToken
        } catch (error) {
          console.log(`this dude's error ${error}`)
        }

        try {
          const accessToken = accessToken1
          await axios.post(
            'http://localhost:3000/api/logout',
            { token },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          setUser(null)
          localStorage.removeItem('user')
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
        } catch (error) {
          console.log(`bruhhh ${error}`)
        }
      }
    } finally {
    }
  }
  const { user } = useContext(GlobalContext)
  console.log(user)

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])
  return (
    <nav className="grid grid-cols-2 gap-8 h-[50px] mb-9 min-w-[1080px]	fixed mb-[200px] z-1  bg-white ">
      <div className="grid grid-cols-[1.4fr_3fr] gap-4">
        <div className=" m-auto ml-6   ">
          <Link to="/">
            <img
              src={logo}
              alt="name"
              className="w-full h-full object-cover cursor-pointer	"
            />
          </Link>
        </div>
        <Links />
      </div>

      <div className="m-auto  grid grid-cols-[2fr_1fr] w-full gap-4">
        <SearchInput />
        <div className="w-full  grid grid-cols-[2fr_1fr_1fr]">
          <CostumeButton
            text={user ? 'Logout' : 'Login'}
            w="100px"
            black={true}
            handel={user ? LogoutFunc : loginFunc}
          />
          {user ? (
            <img
              src={user.imagePath[0]}
              className="rounded-[50%] m-auto h-[25px] cursor-pointer border border-black-5"
              onClick={() => {
                if (user.role === 'magazine') {
                  navigate('/Magazine')
                } else {
                  if (user.role === 'client') {
                    navigate('/Client')
                  } else {
                    if (user.role === 'admin') {
                      navigate('/Admin')
                    }
                  }
                }
              }}
            />
          ) : (
            <img
              src={user1}
              alt="user"
              className="h-6 m-auto  cursor-pointer"
            />
          )}
          <img src={cart} alt="cart" className="h-6 m-auto  cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
