import { NavLink } from 'react-router-dom'
import ToggleButton from './ToggleButton'

const Navbar = () => {
  return (
    <nav className='flex justify-between container px-8 items-center'>
     <h2 className='hidden sm:flex text-xl font-bold font-Righteous text-ORANGE'>Buchverwaltung</h2>
     <ul className='flex gap-4 font-bold'>
        <li><NavLink to="/book">Buch</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
     </ul>
     <section>
        <ToggleButton />
     </section>
    </nav>
  )
}

export default Navbar
