import { NavLink } from 'react-router-dom'
import { headerMenuData } from './data/headerMenuData'

const Header = () => {
    return (
        <header>
            {headerMenuData.map((menuItem) => <NavLink key={menuItem.path} to={menuItem.path}>{menuItem.title}</NavLink>)}
        </header>
    )
}

export default Header