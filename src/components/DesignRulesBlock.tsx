import '../styles/designRulesBlock.scss'
interface DesignRulesBlockProps {
    title: string,
    icon: string,
    children: string
}
const DesignRulesBlock = ({title,icon,children}:DesignRulesBlockProps) => {
    return <section className='container__design__rule'>
        <div className='container__design__rule__icon'>
            <img src={icon} alt='icon design rules'/>
        </div>
        <div className='container__design__rule__content'>
            <span className='container__design__rule__content__titlerules'>{title}</span>
            <span className='container__design__rule__content__maincontent'>{children}</span>
        </div>
    </section>
}
export default DesignRulesBlock