import { routes } from '../../../routers'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation()
    return <section className="container__navbar">
        {routes.map((parentRoutes,index) => (
            <div key={index} className='container__navbar__linkbox'>
            <span className='container__navbar__linkbox__title'>{parentRoutes.parent}</span>
            {parentRoutes.children.map((link,index) => <div key={index} className='container__navbar__linkbox__listlink'>
                <Link to={link.path} className={`container__navbar__linkbox__listlink__mainlink ${location.pathname === `/${link.path}` ? 'link--active' : ''}`}>{link.name}</Link>
            </div>
            )}
        </div> 
        ))}
    </section>
}
export default Navbar