import './breadcrumb.scss'
import * as React from "react";
import CodeExample from "../../components/CodeExample"
import CodeBlock from "../../components/CodeBlock"
import { Breadcrumb, IBreadcrumbItem, Label } from "@gui/fluent-ui-allure";
const BreadCrumb = () => {
    const items: IBreadcrumbItem[] = [{ text: "Home", key: "Home" }];
    function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
        console.log(`Breadcrumb item with key "${item.key}" has been clicked.`);
    }
    const items2: IBreadcrumbItem[] =  [
        { text: "Home(non-clickable)", key: "k1" },
        { text: "Sub", key: "k2", onClick: onItemClick },
        { text: "Sub2(non-clickable)", key: "k3" },
        { text: "Detail", key: "k4" },
    ];
  
    const items3: IBreadcrumbItem[] = [
        { text: "Home", key: "k1", onClick: onItemClick },
        { text: "Application", key: "k2", onClick: onItemClick },
        { text: "Application management", key: "k3", href: "/application-management" },
        { text: "Application detail", key: "k4" },
    ];
    const items4: IBreadcrumbItem[] = [
        { text: "Home", key: "k1", onClick: onItemClick },
        { text: "Second Level", key: "k2", onClick: onItemClick },
        { text: "Third Level", key: "k3", onClick: onItemClick },
        { text: "Application management", key: "k4", onClick: onItemClick },
        { text: "Application detail", key: "k5" },
    ];
    const codeHome = <CodeBlock>
    {`import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleRoot = () => {
    const items: IBreadcrumbItem[] = [{ text: "Home", key: "Home" }];

    return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
};`}
    </CodeBlock>
     const codebreadcrumb = <CodeBlock>
     {`import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleNonClickable = () => {
    function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
        console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
    }

    const items: IBreadcrumbItem[] = [
        { text: "Home(non-clickable)", key: "k1" },
        { text: "Sub", key: "k2", onClick: onItemClick },
        { text: "Sub2(non-clickable)", key: "k3" },
        { text: "Detail", key: "k4" },
    ];

    return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;`}
     </CodeBlock>
     const codebreadcrumb2 = <CodeBlock>
     {`import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleNonClickable = () => {
    function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
        console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
    }

    const items: IBreadcrumbItem[] = [
        { text: "Home", key: "k1", onClick: onItemClick },
        { text: "Application", key: "k2", onClick: onItemClick },
        { text: "Application management", key: "k3", href: "/application-management" },
        { text: "Application detail", key: "k4" },
    ];

    return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />`}
     </CodeBlock>
      const codebreadcrumb3 = <CodeBlock>
      {`import * as React from "react";
 import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";
 
 export const SampleNonClickable = () => {
     function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
         console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
     }
 
     const items: IBreadcrumbItem[] = [
        { text: "Home", key: "k1", onClick: onItemClick },
        { text: "Second Level", key: "k2", onClick: onItemClick },
        { text: "Third Level", key: "k3", onClick: onItemClick },
        { text: "Application management", key: "k4", onClick: onItemClick },
        { text: "Application detail", key: "k5" },
    ];

    return <Breadcrumb items={items} overflowIndex={1} maxDisplayedItems={3} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;`}
      </CodeBlock>
      const codebreadcrumb4 = <CodeBlock>
      {`import * as React from "react";
 import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";
 
 export const SampleNonClickable = () => {
     function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
         console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
     }
 
     const items: IBreadcrumbItem[] = [
        { text: "Home", key: "k1", onClick: onItemClick },
        { text: "Second Level", key: "k2", onClick: onItemClick },
        { text: "Third Level", key: "k3", onClick: onItemClick },
        { text: "Application management", key: "k4", onClick: onItemClick },
        { text: "Application detail", key: "k5" },
    ];

    return <Breadcrumb items={items} maxDisplayedItems={2} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;`}
      </CodeBlock>
    return <section className="breadcrumb">
            <article className='breadcrumb__content__title'>
                <h2 className='breadcrumb__title--maintitle'>Breadcrumb</h2>
                <p>It display by the page hierarchy and allows user to know where they are. Better to have this breadcrumb navigation except for homepage.</p>            
                <Label style={{fontWeight:800}}>{`Don't use when:`}</Label>
                <ul>
                    <li>Product has no logical hierarchy</li>
                    <li>There are too many navigation options that are very close together.</li>
                    <li>Breadcrumb cannot replace the primary navigation.</li>
                </ul>
            </article>
            <article className='breadcrumb__title'>
                <h2 className='breadcrumb__title--subtitle'>Usage</h2>
                <p>When there is only 1 level breadcrumb, it is not clickable. But the text color is black.</p> 
                <CodeExample codeDetail={codeHome}>
                <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />
                </CodeExample>
            </article>
            <article className='breadcrumb__title'>
                <h2 className='breadcrumb__title--subtitle'>Usage</h2>
                <p>Some links may not be clickable.</p> 
                <CodeExample codeDetail={codebreadcrumb}>
                    <Breadcrumb items={items2} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />
                </CodeExample>
            </article>
            <article className='breadcrumb__title'>
                <p>Example for multi-parent nodes. This is a common style.</p> 
                <CodeExample codeDetail={codebreadcrumb2}>
                    <Breadcrumb items={items3} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />
                </CodeExample>
            </article>
            <article className='breadcrumb__title'>
                <p>Show ... in the middle of breadcrumb when there are so many nodes that cannot show all at the same time. Always keep the first level and the last level visible.</p> 
                <CodeExample codeDetail={codebreadcrumb3}>
                    <Breadcrumb items={items4} overflowIndex={1} maxDisplayedItems={3} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />
                </CodeExample>
            </article>
            <article className='breadcrumb__title'>
                <p>Show ... at the beginning of breadcrumb when there are so many nodes that cannot show all at the same time. Always keep the last level visible.</p> 
                <CodeExample codeDetail={codebreadcrumb4}>
                    <Breadcrumb items={items4} maxDisplayedItems={2} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />
                </CodeExample>
            </article>
    </section>
}
export default BreadCrumb
