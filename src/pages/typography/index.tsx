import './typography.scss'
import {  Stack, Text, SecondaryText, HeadingText, PageHeaderText, HeadingType } from "@gui/fluent-ui-allure";
import CodeExample from "../../components/CodeExample"
import CodeBlock from '../../components/CodeBlock';
const Typography = () => {
    const codeFontAwesome = <CodeBlock>
    {`import * as React from "react";
import { Link, Stack, Text, SecondaryText, HeadingText, PageHeaderText, HeadingType } from "@gui/fluent-ui-allure";

export const SampleText = () => {
    return (
        <Stack horizontal tokens={{ childrenGap: 120 }}>
            <Stack tokens={{ childrenGap: 10 }}>
                <PageHeaderText block>Page Header Title</PageHeaderText>
                <HeadingText type={HeadingType.LargeBold} block>
                    Heading large bold
                </HeadingText>
                <HeadingText type={HeadingType.MediumBold} block>
                    Heading medium bold
                </HeadingText>
                <HeadingText type={HeadingType.DefaultBold} block>
                    Bold heading
                </HeadingText>
                <HeadingText type={HeadingType.Semibold} block>
                    Semibold Heading
                </HeadingText>
                <Text block>Default body</Text>
                <SecondaryText block>Secondary text</SecondaryText>
                {/* <Link underline>Text link</Link> */}
            </Stack>
            <Stack tokens={{ childrenGap: 10 }}>
                <PageHeaderText block>23px, regular</PageHeaderText>
                <HeadingText type={HeadingType.LargeBold} block>
                    18px, bold
                </HeadingText>
                <HeadingText type={HeadingType.MediumBold} block>
                    16px, bold
                </HeadingText>
                <HeadingText type={HeadingType.DefaultBold} block>
                    14px, bold
                </HeadingText>
                <HeadingText type={HeadingType.Semibold} block>
                    14px, semibold
                </HeadingText>
                <Text block>14px, regular</Text>
                <SecondaryText block>14px, italic</SecondaryText>
                {/* <Link underline>Text link</Link> */}
            </Stack>
            <Stack tokens={{ childrenGap: 10 }}>
                <PageHeaderText block>Breadcrumb</PageHeaderText>
                <HeadingText type={HeadingType.LargeBold} block>
                    Calendar Month/Year
                </HeadingText>
                <HeadingText type={HeadingType.MediumBold} block>
                    Panel and popup title
                </HeadingText>
                <HeadingText type={HeadingType.DefaultBold} block>
                    Section title, table primary column value
                </HeadingText>
                <HeadingText type={HeadingType.Semibold} block>
                    Label title, table column name, action
                </HeadingText>
                <Text block>Body</Text>
                <SecondaryText block>Description, watermark</SecondaryText>
                {/* <Link underline>Text link</Link> */}
            </Stack>
        </Stack>
    );
};`}
    </CodeBlock>

    return <section className="typography">
            <article className='typography__content__title'>
                <h2 className='typography__content__title--maintitle'>Typography</h2>
                <p>This is a component for displaying text. You can use this to standardize text across your system.</p>            
            </article>
            <article className='typography__content__title'>
                <h2 className='typography__content__title--subtitle'>Letter Spacing</h2>
                <p>-15 (-0.015rem)</p>            
            </article>
            <article className='typography__content__title'>
                <p className='typography__content__title--subtitle'>Font Convention</p>
                <CodeExample codeDetail={codeFontAwesome}>
                <Stack horizontal tokens={{ childrenGap: 120 }}>
            <Stack tokens={{ childrenGap: 10 }}>
                <PageHeaderText block>Page Header Title</PageHeaderText>
                <HeadingText type={HeadingType.LargeBold} block>
                    Heading large bold
                </HeadingText>
                <HeadingText type={HeadingType.MediumBold} block>
                    Heading medium bold
                </HeadingText>
                <HeadingText type={HeadingType.DefaultBold} block>
                    Bold heading
                </HeadingText>
                <HeadingText type={HeadingType.Semibold} block>
                    Semibold Heading
                </HeadingText>
                <Text block>Default body</Text>
                <SecondaryText block>Secondary text</SecondaryText>
                {/* <Link underline>Text link</Link> */}
            </Stack>
            <Stack tokens={{ childrenGap: 10 }}>
                <PageHeaderText block>23px, regular</PageHeaderText>
                <HeadingText type={HeadingType.LargeBold} block>
                    18px, bold
                </HeadingText>
                <HeadingText type={HeadingType.MediumBold} block>
                    16px, bold
                </HeadingText>
                <HeadingText type={HeadingType.DefaultBold} block>
                    14px, bold
                </HeadingText>
                <HeadingText type={HeadingType.Semibold} block>
                    14px, semibold
                </HeadingText>
                <Text block>14px, regular</Text>
                <SecondaryText block>14px, italic</SecondaryText>
                {/* <Link underline>Text link</Link> */}
            </Stack>
            <Stack tokens={{ childrenGap: 10 }}>
                <PageHeaderText block>Breadcrumb</PageHeaderText>
                <HeadingText type={HeadingType.LargeBold} block>
                    Calendar Month/Year
                </HeadingText>
                <HeadingText type={HeadingType.MediumBold} block>
                    Panel and popup title
                </HeadingText>
                <HeadingText type={HeadingType.DefaultBold} block>
                    Section title, table primary column value
                </HeadingText>
                <HeadingText type={HeadingType.Semibold} block>
                    Label title, table column name, action
                </HeadingText>
                <Text block>Body</Text>
                <SecondaryText block>Description, watermark</SecondaryText>
                {/* <Link underline>Text link</Link> */}
            </Stack>
        </Stack>
                </CodeExample>
            </article>
    </section>
}
export default Typography