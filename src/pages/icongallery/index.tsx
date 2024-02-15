import './icongallery.scss' 
import React, { useEffect, useState } from "react";
import { DefaultButton, ISearchBoxStyles, Pivot, PivotItem, SearchBox, Stack,Label } from "@gui/fluent-ui-allure";
import { Icon, Dialog, DialogType } from '@fluentui/react';
import {IconGallery, iconAllureFontData, iconFontAwesome, iconFontOffice } from '../../assets/icon';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Icongallery = () => {
    const [isModalClosed, setModalClosed] = useState(true);
    const [iconSearch, setIconSearch] = useState("")
    const [iconAllureFont, setIconAllureFont] = useState(iconAllureFontData)
    const [iconAwesomeFont, setIconAwesomeFont] = useState(iconFontAwesome)
    const [iconOfficeFont, setIconOfficeFont] = useState(iconFontOffice)
    const [modalIcon, setModalIcon] = useState<IconGallery>()
    const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { height: 40 }, box: { width: "100%"}, iconButton: { top: 4 } };

    useEffect(() => {
        if (iconSearch == ""){
            setIconAllureFont(iconAllureFontData)
            setIconAwesomeFont(iconFontAwesome)
            setIconOfficeFont(iconFontOffice)
        }
        else {
            const newArrayIconAllure: IconGallery[] = iconAllureFontData.filter((item) => item.iconName.includes(iconSearch))
            const newArrayIconAwesome: IconGallery[] = iconFontAwesome.filter((item) => item.iconName.includes(iconSearch))
            const newArrayIconOffice: IconGallery[] = iconFontOffice.filter((item) => item.iconName.includes(iconSearch))
            setIconAllureFont(newArrayIconAllure)
            setIconAwesomeFont(newArrayIconAwesome)
            setIconOfficeFont(newArrayIconOffice)

        }
    },[iconSearch])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
        e && setIconSearch(e.target.value)
    }

    const handleOpenModal = (iconInformation: IconGallery) => {
        setModalIcon(iconInformation)
        setModalClosed(false)
    }

    return <section className='icongallery'>
        <section className='content'>
            <article className='content__title'>
                <h2 className='content__title--maintitle'>Icon Gallery</h2>
                <p className='content__title--descriptiontitle'>This is a preview list of all three kinds of font icons. Allure font is customized by AvePoint, Font awesome is quoted from the Font Awesome library, and another Office UI fabric Icons are Microsoft font library.</p>
                <p className='content__title--descriptiontitle'>They all can be used in design according to different scenarios.</p>
            </article>
            <article className='content__title'>
                <Stack>
                    <SearchBox styles={searchBoxStyles} showIcon placeholder="Search..." onChange={(e) => handleSearch(e)} />
                </Stack>          
            </article>
            <article className='content__title'>
                <Pivot 
                    overflowBehavior={'menu'}
                    aria-label="Basic Pivot Example">
                        <PivotItem
                            style={{gap:10}}
                            headerText="Allure Font"
                            headerButtonProps={{
                            'data-order': 1,
                            'data-title': 'My Files Title',
                        }}>
                            <section className='content__title__listitem'>
                                {iconAllureFont.map((item,index) => <>
                                    <DefaultButton key={index} onClick={() => handleOpenModal(item)} style={{width:"100%", height:"100%",padding:5}}> 
                                        <Icon iconName={item.iconName} style={{fontSize:30}}/>
                                        <p style={{fontSize:10,whiteSpace:"wrap"}}>{item.iconName}</p>
                                    </DefaultButton>
                                </>
                                )}
                            </section>
                        </PivotItem>
                        <PivotItem
                            style={{gap:10}}
                            headerText="Font Awesome"
                            headerButtonProps={{
                            'data-order': 1,
                            'data-title': 'My Files Title',
                        }}>
                            <section className='content__title__listitem'>
                            {iconAwesomeFont.map((item,index) => 
                                    <DefaultButton key={index} onClick={() => handleOpenModal(item)} style={{width:"100%", height:"100%",padding:5}}> 
                                        <Icon iconName={item.iconName} style={{fontSize:30}}/>
                                        <p style={{fontSize:10,whiteSpace:"wrap"}}>{item.iconName}</p>
                                    </DefaultButton>
                                )}
                            </section>
                        </PivotItem>
                        <PivotItem
                            style={{gap:10}}
                            headerText="Office UI Fabric Icons"
                            headerButtonProps={{
                            'data-order': 1,
                            'data-title': 'My Files Title',
                        }}>
                             <section className='content__title__listitem'>
                            {iconOfficeFont.map((item,index) => 
                                    <DefaultButton key={index} onClick={() => handleOpenModal(item)} style={{width:"100%", height:"100%",padding:5}}> 
                                        <Icon iconName={item.iconName} style={{fontSize:30}}/>
                                        <p style={{fontSize:10,whiteSpace:"wrap"}}>{item.iconName}</p>
                                    </DefaultButton>
                                )}
                            </section>
                        </PivotItem>
                </Pivot>
                <Dialog
                      title={`${modalIcon?.iconName}`}
                      hidden={isModalClosed}
                      onDismiss={() => setModalClosed(true)}
                      dialogContentProps={{ showCloseButton: true, type: DialogType.close }}
                      maxWidth="480px"
                      minWidth="480px"
                >   
                    <div style={{display:"flex",gap:20}}>
                        <Icon iconName={modalIcon?.iconName} style={{fontSize:100}}/>
                        <div>
                            <Label style={{ padding: "4px 0" }}>
                                {`HTML code`}
                            </Label>
                            <Stack style={{border:"0.5px solid rgb(242, 243, 244)"}}>
                                <SyntaxHighlighter language="typescript" style={tomorrow}>
                                    {`<i class="${modalIcon?.iconName}"></i>`}
                                </SyntaxHighlighter>
                            </Stack>
                            <Label style={{ padding: "4px 0" }}>
                                {`React code`}
                            </Label>
                            <Stack style={{border:"0.5px solid rgb(242, 243, 244)"}}>
                                <SyntaxHighlighter language="typescript" style={tomorrow}>
                                    {`<Icon iconName="${modalIcon?.iconName}" />`}
                                </SyntaxHighlighter>
                            </Stack>
                        </div>
                    </div>
                </Dialog>         
            </article>
        </section>
    </section>
}
export default Icongallery