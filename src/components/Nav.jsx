import { Link } from "react-router-dom"
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'

const Nav = () => {
  return (
<header  className='padding-x py-8 absolute z-10 w-full'>
  <nav className='flex justify-between items-center max-container' >
    <Link to='/'>
      <img src={headerLogo} alt="Logo"
      width={130}
      height={29} />
    </Link>

    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden' >
{ navLinks.map((items) =>(
  <li key={items.label}>
    <Link to={items.href}
    className='font-montserrat leading-normal text-lg text-slate-gray'>
      {items.label}
    </Link>
  </li>
) )}

    </ul>
    <div className='hidden max-lg:block'>
      <img src={hamburger} alt="Hamburger"
      width={25}
      height={25} />
    </div>

  </nav>
</header>  )
}

export default Nav