import { useState } from 'react';
import '../styles/codeExample.scss';
import icon_open from '../assets/html.svg'
import icon_close from '../assets/triangle.svg'
interface CodeExampleProps {
    codeDetail: JSX.Element[] | JSX.Element;
    children: JSX.Element[] | JSX.Element
}

const CodeExample = ({codeDetail,children}: CodeExampleProps) => {
    const [isOpenCode, setIsOpenCode] = useState<boolean>(false)
    return <section className='container__component__custome'>
            <section className='container__component__custome__items'>
                {children}
            </section>
            {isOpenCode && <section className='container__component__custome__code'>
                {codeDetail}
            </section>}
            <button onClick={() => setIsOpenCode(!isOpenCode)} className='togglebtn'>
               {!isOpenCode ? <img className='togglebtn__icon' src={icon_open} alt='icon html'/> : <img className='togglebtn__icon' src={icon_close} alt='icon html'/>}
            </button>
    </section>
}
export default CodeExample