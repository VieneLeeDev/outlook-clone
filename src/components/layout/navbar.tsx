import '../../styles/navbar.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return <section className="container__navbar">
        <div className='container__navbar__linkbox'>
            <span className='container__navbar__linkbox__title'>Allure DeSign System</span>
            <div className='container__navbar__linkbox__listlink'>
                <Link to="/" className='container__navbar__linkbox__listlink__mainlink'>Introduction</Link>
                <Link to="design-principle" className='container__navbar__linkbox__listlink__mainlink'>Design principle</Link>
                <Link to="https://xd.adobe.com/view/34543319-c6da-4dd9-be05-fe7b01ae133b-6107/" className='container__navbar__linkbox__listlink__mainlink'>Design standard</Link>
                <Link to="change-log" className='container__navbar__linkbox__listlink__mainlink'>Change log</Link>
            </div>
        </div> 
        <div className='container__navbar__linkbox'>
            <span className='container__navbar__linkbox__title'>Basic</span>
            <div className='container__navbar__linkbox__listlink'>
                <Link to="button" className='container__navbar__linkbox__listlink__mainlink'>Button</Link>
                <Link to="icon_gallery" className='container__navbar__linkbox__listlink__mainlink'>Icon Gallery</Link>
                <Link to="icon" className='container__navbar__linkbox__listlink__mainlink'>Icon</Link>
                <Link to="common-i18n-terms" className='container__navbar__linkbox__listlink__mainlink'>Common I18N Terms</Link>
                <Link to="common-product" className='container__navbar__linkbox__listlink__mainlink'>Common Product</Link>
                <Link to="typography" className='container__navbar__linkbox__listlink__mainlink'>Typography</Link>
            </div>
        </div> 
        <div className='container__navbar__linkbox'>
            <span className='container__navbar__linkbox__title'>Navigation</span>
            <div className='container__navbar__linkbox__listlink'>
                <Link to="breadcrumb" className='container__navbar__linkbox__listlink__mainlink'>Breadcrumb</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Navigation Menu</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Tab</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Tree</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Wizard</Link>
            </div>
        </div> 
        <div className='container__navbar__linkbox'>
            <span className='container__navbar__linkbox__title'>Form</span>
            <div className='container__navbar__linkbox__listlink'>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>AutoComplete</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Avatar</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Checkbox</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>DatePicker</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Expander</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>FileUploader</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Input</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Rich textbox</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Radio button</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Select</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Switch</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>TimePicker</Link>
            </div>
        </div> 
        <div className='container__navbar__linkbox'>
            <span className='container__navbar__linkbox__title'>Data</span>
            <div className='container__navbar__linkbox__listlink'>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Calendar</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Carousel</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Filters</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Pagination</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Table</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Tooltips</Link>
            </div>
        </div> 
        <div className='container__navbar__linkbox'>
            <span className='container__navbar__linkbox__title'>Feedback</span>
            <div className='container__navbar__linkbox__listlink'>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Message</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Notification</Link>
            </div>
        </div>
        <div className='container__navbar__linkbox'>
            <span className='container__navbar__linkbox__title'>Others</span>
            <div className='container__navbar__linkbox__listlink'>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Dialog</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Modal</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Loading</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Panel</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Popover</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Progress</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Waffle</Link>
                <Link to="#" className='container__navbar__linkbox__listlink__mainlink'>Activity timeline</Link>
            </div>
        </div>   
    </section>
}
export default Navbar