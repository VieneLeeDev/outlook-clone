import './header.scss'
import logo from '../../../assets/logo.png'
import * as React from "react";
import { Stack, Dropdown, ISearchBoxStyles,  IDropdownStyles, useTheme, IExtendedPalette, DefaultButton, IButtonStyles ,AutoComplete  } from "@gui/fluent-ui-allure";
import { useDispatch, useSelector } from 'react-redux';
import { applyLanguage, applyTheme } from '../../../store/slice/allureSlice';
import { useTranslation} from "react-i18next";
import { allureSelector } from '../../../store/selector/allureSelector';
import { keywordForRoute } from '../../../routers';
import { useNavigate } from 'react-router-dom';

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


export const optionsLanguages = [
    { text: "English", key: "en" },
    { text: "Japanese", key: "jp" },
    { text: "Chinese", key: "ch" },
];

const optionsThemes = [
    { text: "Theme:Magenta", key: "0", data: { type: "Clear" } },
    { text: "Theme:Teal", key: "1" },
    { text: "Theme:Ochre", key: "2" },
    { text: "Theme:Violet", key: "3" },
    { text: "Theme:Lavender", key: "4" },
    { text: "Theme:Mint", key: "5" },
];

const Header = () => {
    const [selectedKeyLanguages, setSelectedKeyLanguages] = React.useState<string>();
    const [keyLanguages, setKeyLanguages] = React.useState<string>(optionsLanguages[0].key);
    const [selectedKeyTheme, setSelectedKeyTheme] = React.useState<string>();
    const [keyThemes, setKeyThemes] = React.useState<number>(new Date().getTime());
    const [valueSearchRoute, setValueSearchRoute] = React.useState<string>();
    const currentLanguage = useSelector(allureSelector)

    const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { height: 32,width: 240}};
    const palette = useTheme().palette as IExtendedPalette;
    const style: React.CSSProperties = { letterSpacing: "-0.21px", color: palette.slate, textAlign: "left", fontWeight: "normal" };

    React.useEffect(() => {
        i18n.changeLanguage(currentLanguage.languages)
    },[selectedKeyLanguages])

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { t,i18n } = useTranslation();

    const handleSearchRoute = (e) => {
        navigate(pathName)
    }

    return <section className='container__header'>
        <div className='container__header__logo'>
            <span className='container__header__logo__main'>
                <img src={logo} alt='Logo Allure'/>
                <span>Allure UI</span>
            </span>
            <Stack tokens={{ childrenGap: 20 }}>
                <AutoComplete
                styles={searchBoxStyles}
                calloutWidth={240}
                id={"ms-icon-complete"}
                expanding={keywordForRoute}
                placeholder={`${t('textInputSearch')}`}
                value={valueSearchRoute}
                onSelectedItem={handleSearchRoute}
                onChange={(e, v) => setValueSearchRoute(v)}
            />
            </Stack>
        </div>
        <Stack horizontal tokens={{ childrenGap: 16 }}>
            <Stack horizontal>
            <Dropdown
                options={optionsLanguages}
                defaultSelectedKey={optionsLanguages[0].key}
                key={keyLanguages}
                styles={dropdownStyles}
                selectedKey={selectedKeyLanguages}
                onRenderItem={(option) => (
                    <div>
                        <DefaultButton
                            styles={buttonStyle}
                            onClick={() => {
                                setSelectedKeyLanguages(option?.data?.type === "Clear" ? undefined : `${option?.key}`);
                                option && dispatch(applyLanguage(`${option.key}`))
                                option && setKeyLanguages(`${option.key}`);
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
                defaultSelectedKey={optionsThemes[0].key}
                key={keyThemes}
                styles={dropdownStyles}
                selectedKey={selectedKeyTheme}
                onRenderItem={(option) => (
                    <div>
                        <DefaultButton
                            styles={buttonStyle}
                            onClick={() => {
                                setSelectedKeyTheme(option?.data?.type === "Clear" ? undefined : `${option?.key}`);
                                setKeyThemes(new Date().getTime());
                                option && dispatch(applyTheme(Number(option.key)))
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