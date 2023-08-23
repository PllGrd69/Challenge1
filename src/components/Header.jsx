import Logo from '../assets/images/logo.svg'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
   <header className="bg-red-300 flex place-content-between items-center">
    <img src={Logo} alt='Logo'/>

    <NavBar />
   </header>
  )
}