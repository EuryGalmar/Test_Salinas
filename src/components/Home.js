import React from 'react'
import { NavLink } from 'react-router-dom';


export const Home = () => {
  return (
    <header className='header'>
        <nav>
            <ul>
                <li>
                    <NavLink to="/employees" className={({isActive}) => isActive ? "active" : ""}>Employe</NavLink>
                </li>
                <li>
                    <NavLink to="/upload"className={({isActive}) => isActive ? "active" : ""}>Upload</NavLink>
                </li>
            </ul>
        </nav>

    </header>
  )
}
