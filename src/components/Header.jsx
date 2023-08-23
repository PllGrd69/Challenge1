import Logo from '../assets/images/logo.svg'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
   <header className="flex place-content-between items-center mb-8">
    <img src={Logo} alt='Logo'/>

    <NavBar />
   </header>
  )
}