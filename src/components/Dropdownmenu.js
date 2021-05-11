import React from 'react'
import { Link } from 'react-router-dom'
const Dropdownmenu = ({ isOpen, toggle }) => {
    return (
        <div
            className={isOpen ? 'grid grid-rowq-4 text-center items-center bg-secondary text-white' : 'hidden'}
            onClick={toggle}
        >
            <Link className="p-4" to="/">Home</Link>
            <Link className="p-4" to="/leclub">Le club</Link>
            <Link className="p-4" to="/equipes">Nos équipes</Link>
            <Link className="p-4" to="/boutique">Boutique</Link>
            <Link className="p-4" to="/licences">Licences</Link>
            <Link className="p-4" to="/contact">Contact</Link>
        </div>
    )
}

export default Dropdownmenu
