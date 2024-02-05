import "../../styles/pagestyle/designprinciple.scss"
import DesignRulesBlock from '../../components/DesignRulesBlock'
import Useful from '../../assets/cup.svg'
import Usable from '../../assets/like.svg'
import thunder from '../../assets/thunder.svg'
import Consistency from '../../assets/barista.svg'
import Accessible from '../../assets/accesible.svg'
import Collaborative from '../../assets/teacher.svg'
import Responsive from '../../assets/responsive.svg'
const DesignPrinciple = () => {
    return <section className="container__designprinciple"> 
        <article className='container__designprinciple__content__title'>
            <span className='container__designprinciple__content__title--maintitle'>Design principle</span>
        </article>
        <section className="container__designprinciple__maincontent">
            <DesignRulesBlock icon={Useful} title="Useful">Our users' content always comes first - make sure we're focusing the user's business goals and always be task driven.</DesignRulesBlock>
            <DesignRulesBlock icon={Usable} title="Usable">All the users can use it without difficulties. The content need to be clarity and easy to find. Functions need to be easy accessed and effecient.</DesignRulesBlock>
            <DesignRulesBlock icon={thunder} title="Efficiency">We choose to display UI elements only when they are needed, rather than make them available at all times.</DesignRulesBlock>
            <DesignRulesBlock icon={Consistency} title="Consistency">Create familiarity and strengthen intuition by applying the same solution to the same questions can eeduce the learning cost.</DesignRulesBlock>
            <DesignRulesBlock icon={Accessible} title="Useful">All page design meet accessibility requirements in terms of color contrast, navigation alternatives and more guidelines based on WCAG 2.0.</DesignRulesBlock>
            <DesignRulesBlock icon={Collaborative} title="Collaborative">We provides a wealth of teaching activities and enables teamwork.</DesignRulesBlock>
            <DesignRulesBlock icon={Responsive} title="Responsive">Use 8-pixel base unit allows components to scale consistently across all display sizes.</DesignRulesBlock>
        </section>
    </section>
}
export default DesignPrinciple

//rgb(50, 62, 77)