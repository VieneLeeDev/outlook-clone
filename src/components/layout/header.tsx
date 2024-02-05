import '../../styles/header.scss'
import logo from '../../assets/logo.png'
import * as React from "react";
import { Stack, Dropdown, ISearchBoxStyles, SearchBox,  IDropdownStyles, useTheme, IExtendedPalette, DefaultButton, IButtonStyles } from "@gui/fluent-ui-allure";

const optionsLanguages = [
    { text: "English", key: "0" },
    { text: "German", key: "1" },
    { text: "French", key: "2" },
    { text: "Japanese", key: "3" },
    { text: "Chinese", key: "4" },
    { text: "Korean", key: "5" },
];
const optionsThemes = [
    { text: "Theme:Magenta", key: "0", data: { type: "Clear" } },
    { text: "Theme:Teal", key: "1" },
    { text: "Theme:Ochre", key: "2" },
    { text: "Theme:Violet", key: "3" },
    { text: "Theme:Lavender", key: "4" },
    { text: "Theme:Mint", key: "5" },
];

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
const Header = () => {
    const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { height: 32 }, box: { width: 240 } };
    const palette = useTheme().palette as IExtendedPalette;
    const [selectedKey, setSelectedKey] = React.useState<string>();
    const [key, setKey] = React.useState<number>(new Date().getTime());

    const style: React.CSSProperties = { letterSpacing: "-0.21px", color: palette.slate, textAlign: "left", fontWeight: "normal" };
    return <section className='container__header'>
        <div className='container__header__logo'>
            <span className='container__header__logo__main'>
                <img src={logo} alt='Logo Allure'/>
                <span>Allure UI</span>
            </span>
            <Stack tokens={{ childrenGap: 20 }}>
                <Stack>
                    <SearchBox styles={searchBoxStyles} showIcon placeholder="Type search keyword" />
                </Stack>
            </Stack>
        </div>
        <Stack horizontal tokens={{ childrenGap: 16 }}>
        <Stack horizontal>
            <Dropdown
                options={optionsLanguages}
                key={key}
                styles={dropdownStyles}
                selectedKey={selectedKey}
                onRenderItem={(option) => (
                    <div>
                        <DefaultButton
                            styles={buttonStyle}
                            onClick={(e) => {
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
        <Stack horizontal>
            <Dropdown
                options={optionsThemes}
                key={key}
                styles={dropdownStyles}
                selectedKey={selectedKey}
                onRenderItem={(option) => (
                    <div>
                        <DefaultButton
                            styles={buttonStyle}
                            onClick={(e) => {
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
        </Stack>
        
    </section>
}
export default Header