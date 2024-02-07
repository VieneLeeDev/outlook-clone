import { Link } from "react-router-dom"
import "./icon.scss"
import { Stack} from "@gui/fluent-ui-allure"
import CodeExample from "../../components/CodeExample"
import { FontIcon } from "@fluentui/react"
import CodeBlock from "../../components/CodeBlock"
const Icon = () => {
    const codeFontAwesome = <CodeBlock>
    {`import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const SampleFontAwesomeBasic = () => {
    const style: React.CSSProperties = {
        fontSize: 24,
    };

    return (
        <Stack horizontal tokens={{ childrenGap: 30 }}>
            <FontIcon style={style} iconName="fas-plus" />
            <FontIcon style={style} iconName="far-pen-to-square" />
            <FontIcon style={style} iconName="fas-trash" />
            <FontIcon style={style} iconName="af-smile" />
            <FontIcon style={style} iconName="af-face-sad-tear" />
        </Stack>
    );
};`}
    </CodeBlock>
    const condeFontAwesomeWithColor = <CodeBlock>
    {`import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const SampleFontAwesomeColors = () => {
    const style = (color: string): React.CSSProperties => {
        return {
            fontSize: 24,
            color: color,
        };
    };

    return (
        <Stack horizontal tokens={{ childrenGap: 30 }}>
            <FontIcon style={style("#0072D0")} iconName="fas-plus" />
            <FontIcon style={style("#00A84E")} iconName="far-pen-to-square" />
            <FontIcon style={style("#D01B1B")} iconName="fas-trash" />
        </Stack>
    );
};`}
    </CodeBlock>
    const condeOfficeUI = <CodeBlock>
    {`import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const SampleMicrosoftColors = () => {
    const style = (color: string): React.CSSProperties => {
        return {
            fontSize: 24,
            color: color,
        };
    };
    return (
        <Stack horizontal tokens={{ childrenGap: 30 }}>
            <FontIcon style={style("#0F78D4")} iconName="ExchangeLogo" />
            <FontIcon style={style("#038387")} iconName="SharepointLogo" />
            <FontIcon style={style("#4B53BC")} iconName="TeamsLogo16" />
        </Stack>
    );
};`}
    </CodeBlock>
    const styleAwesome: React.CSSProperties = {
        fontSize: 24,
    };
    const styleAwesomeWithColor = (color: string): React.CSSProperties => {
        return {
            fontSize: 24,
            color: color,
        };
    };
    const styleOfficeUI = (color: string): React.CSSProperties => {
        return {
            fontSize: 24,
            color: color,
        };
    };
    return <section className="icon">
            <article className='icon__content__title'>
                <h2 className='icon__content__title--maintitle'>Icon</h2>
                <p>Font awesome V6 free {<Link to="https://fontawesome.com/v6/search?m=free&s=regular%2Csolid">https://fontawesome.com/v6/search?m=free&s=regular%2Csolid</Link>}</p>
                <p>For Microsoft - Office UI Fabric Icons {<Link to="https://uifabricicons.azurewebsites.net/">https://uifabricicons.azurewebsites.net/</Link>}</p>
                <p>Icon provides visual context and enhances usability. It is often used as an action. Display the icon when it is available. Otherwise, they will be disabled. Always use a show full name when hovering on an icon, there will be a tooltip to display its full name.</p>            
            </article>
            <article className='icon__content__title'>
                <h2 className='icon__content__title--maintitle'>Font awesome basic usage</h2>
                <CodeExample codeDetail={codeFontAwesome}>
                    <Stack horizontal tokens={{ childrenGap: 30 }}>
                        <FontIcon style={styleAwesome} iconName="fas-plus" />
                        <FontIcon style={styleAwesome} iconName="far-pen-to-square" />
                        <FontIcon style={styleAwesome} iconName="fas-trash" />
                        <FontIcon style={styleAwesome} iconName="af-smile" />
                        <FontIcon style={styleAwesome} iconName="af-face-sad-tear" />
                    </Stack>
                </CodeExample>
            </article>
            <article className='icon__content__title'>
                <h2 className='icon__content__title--maintitle'>Font awesome basic usage</h2>
                <CodeExample codeDetail={condeFontAwesomeWithColor}>
                    <Stack horizontal tokens={{ childrenGap: 30 }}>
                        <Stack horizontal tokens={{ childrenGap: 30 }}>
                            <FontIcon style={styleAwesomeWithColor("#0072D0")} iconName="fas-plus" />
                            <FontIcon style={styleAwesomeWithColor("#00A84E")} iconName="far-pen-to-square" />
                            <FontIcon style={styleAwesomeWithColor("#D01B1B")} iconName="fas-trash" />
                        </Stack>
                    </Stack>
                </CodeExample>
            </article>
            <article className='icon__content__title'>
                <h2 className='icon__content__title--maintitle'>Office UI Fabric Icons with custom color</h2>
                <CodeExample codeDetail={condeOfficeUI}>
                    <Stack horizontal tokens={{ childrenGap: 30 }}>
                        <FontIcon style={styleOfficeUI("#0F78D4")} iconName="ExchangeLogo" />
                        <FontIcon style={styleOfficeUI("#038387")} iconName="SharepointLogo" />
                        <FontIcon style={styleOfficeUI("#4B53BC")} iconName="TeamsLogo16" />
                    </Stack>
                </CodeExample>
            </article>
    </section>
}
export default Icon