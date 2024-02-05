import '../styles/versionlog.scss'
import { Accordion } from "@gui/fluent-ui-allure";
interface VersionLogProps {
    children?: JSX.Element[] | JSX.Element,
    itemKey: string
}

const VersionLog = ({children}: VersionLogProps) => {
    return <section style={{marginBottom:50}}>
        <Accordion  defaultExpandedItems={[`1.12`]}>
            {children}
        </Accordion>
    </section>
}
export default VersionLog
