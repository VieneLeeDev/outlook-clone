import './codeblock.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow} from 'react-syntax-highlighter/dist/esm/styles/hljs';
interface CodeBlockProps {
    children: string
}
    SyntaxHighlighter.supportedLanguages
const CodeBlock = ({children}: CodeBlockProps) => {
    return <section className="container__codeblock">
        <SyntaxHighlighter language="typescript" style={tomorrow}>
            {children}
        </SyntaxHighlighter>
    </section>
}
export default CodeBlock