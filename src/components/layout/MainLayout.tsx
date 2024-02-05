import { Outlet } from 'react-router-dom'
import '../../styles/mainlayout.scss'
import Header from './header'
import Navbar from './navbar'

const MainLayout = () => {
    return <section className="container__mainlayout">
        <Header/>
        <section className='container__mainlayout__content'>
            <section className='container__mainlayout__content__nav'>
                <Navbar/>
            </section>
            <section className='main__content'>
                <Outlet/>
            </section>
        </section>
    </section>
}
export default MainLayout