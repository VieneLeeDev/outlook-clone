import * as React from "react";
import { PrimaryButton, DefaultButton, Dialog, DialogFooter } from "@gui/fluent-ui-allure";
import CodeBlock from '../../components/CodeBlock'
import CodeExample from '../../components/CodeExample'
import './dialog.scss'
const DialogPages = () => {
    const [isDialogClosed, setDialogClosed] = React.useState(true);
    const codebasic =  <CodeBlock>
    {`import * as React from "react";
import { PrimaryButton, DefaultButton, Dialog, DialogFooter } from "@gui/fluent-ui-allure";

export const SampleBasic = () => {
    const [isDialogClosed, setDialogClosed] = React.useState(true);
    return (
        <div>
            <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
            <Dialog hidden={isDialogClosed} title="Email Confirm" maxWidth="480px" minWidth="480px">
                <div style={{ maxHeight: 100 }}>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                </div>
                <DialogFooter>
                    <DefaultButton onClick={() => setDialogClosed(true)}>Cancel</DefaultButton>
                    <PrimaryButton onClick={() => setDialogClosed(true)}>Submit</PrimaryButton>
                </DialogFooter>
            </Dialog>
        </div>
    );
};`}
    </CodeBlock>
     const codeConfirm =  <CodeBlock>
     {`import * as React from "react";
import { PrimaryButton, DefaultButton, Dialog, DialogFooter } from "@gui/fluent-ui-allure";

export const SampleNoDismiss = () => {
    const [isDialogClosed, setDialogClosed] = React.useState(true);
    return (
        <div>
            <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
            <Dialog hidden={isDialogClosed} title="Confirm" maxWidth="480px">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque, excepturi, veniam, odit quos eveniet laudantium ea aut amet in est possimus minima rerum explicabo ducimus
                    quisquam optio! Alias, totam?
                </div>
                <DialogFooter>
                    <PrimaryButton onClick={() => setDialogClosed(true)} text="OK" />
                </DialogFooter>
            </Dialog>
        </div>
    );
};`}
     </CodeBlock> 
    return <section className="dialog__container">
        <article className='dialog__container__content__title'>
            <span className='dialog__container__content__title--maintitle'>Dialog</span>
            <span className='dialog__container__content__title--descriptiontitle'>Dialogs are modal control. It is a temporary popup that requires users to interact with the application.</span>
        </article>
        <article className='dialog__container__content__title'>
            <span className='dialog__container__content__title--subtitle'>When to use</span>
            <ol>
                <li> It is used for confirming actions, such as delete/cancel an item, asking people to notice.</li>
                <li> The user must make some choices before the next step. When the error result needs the user to pay attention to, use dialog to show the alert.</li>
            </ol>
        </article>
        <article className='dialog__container__content__title'>
            <span className='dialog__container__content__title--subtitle'>Basic Usage</span>
            <span className='dialog__container__content__title--tag'>Layout</span>
            <span className='dialog__container__content__title--descriptiontitle'>Dialogs are modal control. It is a temporary popup that requires users to interact with the application.</span>
            <span className='dialog__container__content__title--tag'>Header:</span>
            <span className='dialog__container__content__title--descriptiontitle'>Provide a title on the left and keep the title as simple and intuitive as possible, such as “Delete” “Warning”</span>
            <span className='dialog__container__content__title--tag'>Button:</span>
            <span className='dialog__container__content__title--descriptiontitle'>Includes one primary button. A secondary button is optional. Primary confirmation button is always placed on the right side. Write button labels that are specific responses to the main information in the title. The title “Delete this file?” could have buttons labeled “Delete” and “Cancel” The Esc key acts like a “Cancel” effect.</span>
        </article>
        <article className='dialog__container__content__title'>
                <CodeExample codeDetail={codebasic}>
                <div>
            <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
            <Dialog hidden={isDialogClosed} title="Email Confirm" maxWidth="480px" minWidth="480px">
                <div style={{ maxHeight: 100 }}>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                </div>
                <DialogFooter>
                    <DefaultButton onClick={() => setDialogClosed(true)}>Cancel</DefaultButton>
                    <PrimaryButton onClick={() => setDialogClosed(true)}>Submit</PrimaryButton>
                </DialogFooter>
            </Dialog>
                </div>
                </CodeExample>
        </article>
        <article className='dialog__container__content__title'>
            <h2 className='container__button__content__title--subtitle'>Confirm</h2>
            <CodeExample codeDetail={codeConfirm}>
            <div>
            <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
            <Dialog hidden={isDialogClosed} title="Confirm" maxWidth="480px">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque, excepturi, veniam, odit quos eveniet laudantium ea aut amet in est possimus minima rerum explicabo ducimus
                    quisquam optio! Alias, totam?
                </div>
                <DialogFooter>
                    <PrimaryButton onClick={() => setDialogClosed(true)} text="OK" />
                </DialogFooter>
            </Dialog>
        </div>
            </CodeExample>
        </article>
    </section>
}

export default DialogPages