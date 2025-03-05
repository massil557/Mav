import Links from './Links'
import { cart, logo, user } from '../../assets'
import SearchInput from './SearchInput'
import CostumeButton from './CostumeButton'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className="grid grid-cols-2 gap-8 h-[50px] mb-9 min-w-[1080px]	fixed mb-[200px] z-1 bg-white ">
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
          <CostumeButton text="login" w="100px" black={true} />
          <img src={user} alt="user" className="h-6 m-auto  cursor-pointer" />
          <img src={cart} alt="cart" className="h-6 m-auto  cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
