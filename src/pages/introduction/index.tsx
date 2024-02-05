import '../../styles/pagestyle/introduction.scss'
import logo from '../../assets/logo.png'
import edge from '../../assets/edge.jpg'
import chrome from '../../assets/chrome.png'
import fox from '../../assets/fox.png'
import safari from '../../assets/safari.png'
import electron from '../../assets/electron.png'
import opera from '../../assets/opera.png'
import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
const Introduction = () => {
    const codeStringUsage = `import { ThemeProvider, getAllureTheme, Themes, Language } from '@gui/fluent-ui-allure';
import * as React from 'react';
const Content = () => {
return (
    <ThemeProvider theme={getAllureTheme(Themes.Cabolt, Language.EN)}>
        <div />
    </ThemeProvider>
);
};`
    return <section className='container__introduction'>
        <img className="logo_img" src={logo} alt='Website Logo'></img>
        <section className='container__introduction__content'>
            <article className='container__introduction__content__title'>
                <h2 className='container__introduction__content__title--maintitle'>Allure Design System</h2>
                <p className='container__introduction__content__title--descriptiontitle'>This Allure design system contains both style and interaction guideline which can be applied to the online products of AvePoint. It can help us to build a consistency user experience for AvePoint customers.</p>
            </article>
            <article className='container__introduction__content__title'>
                <h2 className='container__introduction__content__title--maintitle'>WCAG2.0 supported</h2>
                <p className='container__introduction__content__title--descriptiontitle'>Web Content Accessibility Guidelines (WCAG) 2.0 covers a wide range of recommendations for making Web content more accessible. Following these guidelines will make content accessible to a wider range of people with disabilities, including blindness and low vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, photosensitivity and combinations of these. Following these guidelines will also often make your Web content more usable to users in general.</p>
                <Link className='container__introduction__content__title--link' to={"https://www.w3.org/TR/WCAG20/"} >WCAG 2 Overview</Link>
            </article>
            <article className='container__introduction__content__title'>
                <h2 className='container__introduction__content__title--maintitle'>Environment Support</h2>
                <table className='container__introduction__content__title__browsersupport'>
                    <tbody className='container__introduction__content__title__browsersupport'>
                        <tr>
                            <td className='item__browser'>
                                <img className='item__browser__logo' src={edge} alt='logo of browser'/>
                                <span className='item__browser__name'>Edge</span>
                            </td>
                            <td className='item__browser'>
                                <img className='item__browser__logo' src={chrome} alt='logo of browser'/>
                                <span className='item__browser__name'>chrome</span>
                            </td>
                            <td className='item__browser'>
                                <img className='item__browser__logo' src={fox} alt='logo of browser'/>
                                <span className='item__browser__name'>Firefox</span>
                            </td>
                            <td className='item__browser'>
                                <img className='item__browser__logo' src={opera} alt='logo of browser'/>
                                <span className='item__browser__name'>Opera</span>
                            </td>
                            <td className='item__browser'>
                                <img className='item__browser__logo' src={safari} alt='logo of browser'/>
                                <span className='item__browser__name'>safari</span>
                            </td>
                            <td className='item__browser'>
                                <img className='item__browser__logo' src={electron} alt='logo of browser'/>
                                <span className='item__browser__name'>Edge</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Latest 2 versions</td>
                            <td>Latest 2 versions</td>
                            <td>Latest 2 versions</td>
                            <td>Latest 2 versions</td>
                            <td>≥ 15</td>
                            <td>Latest 2 versions</td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <article className='container__introduction__content__title'>
                <h2 className='container__introduction__content__title--maintitle'>Installation</h2>
                <p className='container__introduction__content__title--descriptiontitle'>Since Allure UI is hosted on the feed <Link className='container__introduction__content__title--link' to={"https://www.w3.org/TR/WCAG20/"} >avepoint-npm</Link> of Proget, you should create a .npmrc file under the root folder of your UI project.</p>
                <div className='container__introduction__content__title--copytext'>
                    <CodeBlock>{`@gui:registry=https://proget.avepoint.net/npm/avepoint-npm/
registry=https://proget.avepoint.net/npm/npm.org/`}
                    </CodeBlock>
                </div>
                <p className='container__introduction__content__title--descriptiontitle'>Then install the Allure UI package:</p>
                <div className='container__introduction__content__title--copytext'>
                        <span>npm install @gui/fluent-ui-allure</span>
                </div>
            </article>
            <article className='container__introduction__content__title'>
                <h2 className='container__introduction__content__title--maintitle'>Usage</h2>
                <p className='container__introduction__content__title--descriptiontitle'>In the root file of your React App, import Allure UI and set the corresponding theme and language.</p>
                        <CodeBlock>{codeStringUsage}</CodeBlock>
            </article>
        </section>
    </section>
}

export default Introduction