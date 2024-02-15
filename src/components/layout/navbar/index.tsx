import { routes } from '../../../routers'
import './navbar.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return <section className="container__navbar">
        {routes.map((item,index) => (
            <div key={index} className='container__navbar__linkbox'>
            <span className='container__navbar__linkbox__title'>{item.parent}</span>
            {item.children.map((link,index) => <div key={index} className='container__navbar__linkbox__listlink'>
                <Link to={link.path} className='container__navbar__linkbox__listlink__mainlink'>{link.name}</Link>
            </div>
            )}
        </div> 
        ))}
    </section>
}
export default Navbar