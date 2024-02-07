import "./common-terms.scss" 
import * as React from "react";
import { Stack, Dropdown,  IDropdownStyles, useTheme, IExtendedPalette, DefaultButton, IButtonStyles, Label } from "@gui/fluent-ui-allure";
import { optionsLanguages } from "../../components/layout/header";
import KeyValueRow from "../../components/KeyValueRow";

const CommonTerm = () => {
    const [key, setKey] = React.useState<number>(new Date().getTime());
    const [selectedKey, setSelectedKey] = React.useState<string>();
    const palette = useTheme().palette as IExtendedPalette;
    const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: "280px !important" } };
    const buttonStyle: IButtonStyles = {
        root: {
            width: 280,
            padding: 0,
            height: 40,
            border: "none",
            margin: "1px",
            "&:hover": {
                background: "#f2f3f4 !important",
                borderRadius: 0,
            },
            "&:focus": {
                outline: "rgb(0, 0, 0) solid 1px !important",
                width: "278px",
            },
        },
        flexContainer: {
            paddingLeft: 12,
            paddingRight: 12,
            justifyContent: "left",
        },
    };
    const style: React.CSSProperties = { letterSpacing: "-0.21px", color: palette.slate, textAlign: "left", fontWeight: "normal" };
    return <section className="commonterms">
        <article className='commonterms__content__title'>
                <h2 className='commonterms__content__title--maintitle'>Common I18N Terms</h2>
                <p>Allure depends on @gui/common-i18n-terms which is a package including some common terms that can be used in your projects.</p>            
        </article>
        <Stack horizontal>
            <Dropdown
                options={optionsLanguages}
                defaultSelectedKey={optionsLanguages[0].key}
                key={key}
                styles={dropdownStyles}
                selectedKey={selectedKey}
                onRenderItem={(option) => (
                    <div>
                        <DefaultButton
                            styles={buttonStyle}
                            onClick={() => {
                                setSelectedKey(option?.data?.type === "Clear" ? undefined : option?.key.toString());
                                setKey(new Date().getTime());
                            }}
                        >
                            <div style={{ ...style, fontStyle: option?.data?.type === "Clear" ? "italic" : "normal" }}>{option?.text}</div>
                        </DefaultButton>
                    </div>
                )}
            />
        </Stack>
        <article className='commonterms__content__title'>
            <Label style={{fontWeight:800}}>{`Key Value`}</Label>
            <KeyValueRow keyRow="I18NShared_Product_Cloud Archiving" value="Cloud Archiving"/>           
            <KeyValueRow keyRow="I18NShared_Product_Policies for Microsoft 365" value="Policies for Microsoft 365"/>           
            <KeyValueRow keyRow="I18NShared_Product_AvePoint Perimeter Online" value="AvePoint Perimeter Online"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cloud Records" value="Opus"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cloud Index" value="Cloud Index"/>           
            <KeyValueRow keyRow="I18NShared_Product_AvePoint Permissions Manager" value="AvePoint Permissions Manager (Preview)"/>           
            <KeyValueRow keyRow="I18NShared_Product_ReCenter for Microsoft 365" value="ReCenter (for Microsoft 365)"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cloud Governance" value="Cloud Governance"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cloud Insights" value="Cloud Insights"/>           
            <KeyValueRow keyRow="I18NShared_Product_Entrust" value="EnPower"/>           
            <KeyValueRow keyRow="I18NShared_Product_Fly" value="Fly"/>           
            <KeyValueRow keyRow="I18NShared_Product_DocAve Backup for Salesforce" value="DocAve Backup for Salesforce"/>           
            <KeyValueRow keyRow="I18NShared_Product_Confide" value="	Confide"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cloud Backup for Dynamics 365" value="Cloud Backup for Dynamics 365"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cense" value="Cloud Archiving"/>           
            <KeyValueRow keyRow="I18NShared_Product_Compliance Guardian Online" value="Compliance Guardian Online"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cloud Backup for Google Workspace" value="Cloud Backup for Google Workspace"/>           
            <KeyValueRow keyRow="I18NShared_Product_Document Management System Online" value="Document Management System Online (Preview)"/>           
            <KeyValueRow keyRow="I18NShared_Product_GroupHub" value="GroupHub"/>           
            <KeyValueRow keyRow="I18NShared_Product_ReCenter for Google Workspace" value="ReCenter (for Google Workspace)"/>           
            <KeyValueRow keyRow="I18NShared_Product_ReCenter" value="ReCenter"/>           
            <KeyValueRow keyRow="I18NShared_Product_AvePoint Online Services" value="AvePoint Online Services"/>           
            <KeyValueRow keyRow="I18NShared_Product_File Share Navigator Online" value="Cloud Management"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cloud Management" value="	File Share Navigator Online"/>           
            <KeyValueRow keyRow="I18NShared_Product_Insights for Microsoft 365" value="Insights for Microsoft 365"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cloud Backup for Salesforce" value="Cloud Backup for Salesforce ®"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cloud Backup for Microsoft 365" value="Cloud Backup for Microsoft 365"/>           
            <KeyValueRow keyRow="I18NShared_Product_Cloud Backup for Azure" value="Cloud Backup for IaaS + PaaS"/>           
        </article>
    </section>
}
export default CommonTerm