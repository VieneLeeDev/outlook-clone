import '../../styles/pagestyle/icongallery.scss' 
import React, { useEffect, useState } from "react";
import { DefaultButton, ISearchBoxStyles, Pivot, PivotItem, SearchBox, Stack } from "@gui/fluent-ui-allure";
import { IStyleSet, Label,  Icon, Dialog, DialogType } from '@fluentui/react';
import {IconGallery, iconAllureFontData } from '../../assets/icon';
const Icongallery = () => {
    const [isModalClosed, setModalClosed] = useState(true);
    const [iconSearch, setIconSearch] = useState("")
    const [iconData, setIconData] = useState(iconAllureFontData)
    const labelStyles: Partial<IStyleSet> = {root: { marginTop: 10 },};
    const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { height: 40 }, box: { width: "100%"}, iconButton: { top: 4 } };

    useEffect(() => {
        if (iconSearch == ""){
            setIconData(iconAllureFontData)
        }
        else {
            const newArrayIcon: IconGallery[] = iconAllureFontData.filter((item) => item.iconName.includes(iconSearch))
            setIconData(newArrayIcon)
        }
    },[iconSearch])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
        e && setIconSearch(e.target.value)
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
                                {iconData.map((item,index) => 
                                    <DefaultButton key={index} onClick={() => setModalClosed(false)} style={{width:"100%", height:"100%",padding:5}}> 
                                        <Icon iconName={item.iconName} style={{fontSize:30}}/>
                                        <p style={{fontSize:10,whiteSpace:"wrap"}}>{item.iconName}</p>
                                    </DefaultButton>
                                )}
                            </section>
                            <Dialog
                                hidden={isModalClosed}
                                onDismiss={() => setModalClosed(true)}
                                dialogContentProps={{ showCloseButton: true, type: DialogType.close }}
                                maxWidth="480px"
                                minWidth="480px"
                            >
                            </Dialog>
                        </PivotItem>
                        <PivotItem headerText="Font Awesome">
                            <Label styles={labelStyles}></Label>
                        </PivotItem>
                        <PivotItem headerText="Office UI Fabric Icons">
                            <Label styles={labelStyles}></Label>
                        </PivotItem>
                </Pivot>         
            </article>
        </section>
    </section>
}
export default Icongallery