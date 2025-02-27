import Links from './Links'
import { cart, logo, user } from '../../assets'
import SearchInput from './SearchInput'
import CostumeButton from './CostumeButton'
export const Navbar = () => {
  return (
    <nav className="grid grid-cols-2 gap-8 h-[50px] mb-9 min-w-[1080px]		">
      <div className="grid grid-cols-[1.4fr_3fr] gap-4">
        <div className=" m-auto ml-6   ">
          <img
            src={logo}
            alt="name"
            className="w-full h-full object-cover cursor-pointer	"
          />
        </div>
        <Links />
      </div>

      <div className="m-auto  grid grid-cols-[2fr_1fr] w-full gap-4">
        <SearchInput />
        <div className="w-full  grid grid-cols-[2fr_1fr_1fr]">
          <CostumeButton text="login" />
          <img src={user} alt="user" className="h-6 m-auto  cursor-pointer" />
          <img src={cart} alt="cart" className="h-6 m-auto  cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
