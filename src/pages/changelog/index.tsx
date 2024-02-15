import { AccordionItem, Label} from '@gui/fluent-ui-allure'
import VersionLog from '../../components/VersionLog'
import './changelog.scss'
import DetailChangeLog from '../../components/DetailChangeLog'
const Changelog = () => {
    return <section className='container__changelog'>
        <span className='container__changelog__title'>Change Log</span>
        <VersionLog itemKey='1.12'>
            <AccordionItem itemKey="1.12" headerText={`Allure 1.12  Dec/20/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-38`} description={`[Table]Freeze last column`}/>
                <DetailChangeLog keyRow={`APAUI-338`}  description={`Select should start to scroll from option item not search box`}/>
                <DetailChangeLog keyRow={`APAUI-339`}  description={`The item tooltip style in people picker is not correct`}/>
                <DetailChangeLog keyRow={`APAUI-340`}  description={`The outline button's disable border color is not correct`}/>
                <DetailChangeLog keyRow={`APAUI-342`}  description={`[Select]Move search icon to left side.`}/>
                <DetailChangeLog keyRow={`APAUI-343`}  description={`Remove these two search styles from the demo.`}/>
                <DetailChangeLog keyRow={`APAUI-344`}  description={`Lack of a max width for sub navigation font.`}/>
                <DetailChangeLog keyRow={`APAUI-345`}  description={`Missing tooltip for long sub navigation`}/>
                <DetailChangeLog keyRow={`APAUI-347`}  description={`Show tooltip of overflow table column header`}/>
                <DetailChangeLog keyRow={`APAUI-348`}  description={`Toast z-index should be bigger than panel`}/>
                <DetailChangeLog keyRow={`APAUI-349`}  description={`Panel action position is not right`}/>
                <DetailChangeLog keyRow={`APAUI-354`}  description={`Context Menu Button should show at top when the below space is not enough`}/>
                <DetailChangeLog keyRow={`APAUI-355`}  description={`Label name should be normal for disabled select component`}/>
                <DetailChangeLog keyRow={`APAUI-357`}  description={`When the change time contains setState, the date is incorrectly selected When the change time contains setState, the date is incorrectly selected When the change time contains setState, the date is incorrectly selected`}/>
                <DetailChangeLog keyRow={`APAUI-360`}  description={`Auto complete search loading height is different from XD design`}/>
                <DetailChangeLog keyRow={`APAUI-365`}  description={`Search no result page UI shows incorrectly`}/>
                <DetailChangeLog keyRow={`APAUI-366`}  description={`Custom table sort icon need follow new sort logic`}/>
                <DetailChangeLog keyRow={`APAUI-367`}  description={`Tooltip arrow is missing`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Improvement`}</Label>
                <DetailChangeLog keyRow={`APAUI-346`} description={`Add a long value demo in the dropdown select.`}/>
                <DetailChangeLog keyRow={`APAUI-352`}  description={`Each step section can support to customize CSS style`}/>
                <DetailChangeLog keyRow={`APAUI-359`}  description={`Add a demo to show how to use record table column width after change feature`}/>
                <DetailChangeLog keyRow={`APAUI-361`}  description={`Add a switch to freeze last column in demo site`}/>
                <DetailChangeLog keyRow={`APAUI-362`}  description={`Hide light navigation from demo site`}/>
                <DetailChangeLog keyRow={`APAUI-368`}  description={`Upgrade dependent packages to latest version`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-86`} description={`[Table]Improve table`}/>
                <DetailChangeLog keyRow={`APAUI-246`}  description={`Support sub step for vertical wizard`}/>
                <DetailChangeLog keyRow={`APAUI-294`}  description={`Rich textbox`}/>
                <DetailChangeLog keyRow={`APAUI-336`}  description={`Table column width can keep after resize`}/>
                <DetailChangeLog keyRow={`APAUI-337`}  description={`Add loading style for select`}/>
                <DetailChangeLog keyRow={`APAUI-350`}  description={`Support Korean`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.11'>
            <AccordionItem itemKey="1.11" headerText={`Allure 1.11 Dec/20/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-307`} description={`[range picker]: Clear should clear all selected dates`}/>
                <DetailChangeLog keyRow={`APAUI-314`}  description={`Time picker bug`}/>
                <DetailChangeLog keyRow={`APAUI-318`}  description={`Navigation should set a unified icon scope for navigation item`}/>
                <DetailChangeLog keyRow={`APAUI-319`}  description={`[Date range (recommended)] can not lost focus`}/>
                <DetailChangeLog keyRow={`APAUI-320`}  description={`Waffle item should add button ID`}/>
                <DetailChangeLog keyRow={`APAUI-323`}  description={`Select should add 'search no results' demo.`}/>
                <DetailChangeLog keyRow={`APAUI-325`}  description={`Arrow disabled color is not correct in [select]`}/>
                <DetailChangeLog keyRow={`APAUI-327`}  description={`Popover unread badge moves when clicking`}/>
                <DetailChangeLog keyRow={`APAUI-328`}  description={`Small switch padding is not correct`}/>
                <DetailChangeLog keyRow={`APAUI-329`}  description={`Toast icon is not same with design`}/>
                <DetailChangeLog keyRow={`APAUI-334`}  description={`Panel action position is not right`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Improvement`}</Label>
                <DetailChangeLog keyRow={`APAUI-322`} description={`Rename to multiple file uploader`}/>
                <DetailChangeLog keyRow={`APAUI-326`}  description={`Typography add 14px- bold font example.`}/>
                <DetailChangeLog keyRow={`APAUI-333`}  description={`Expander 1st level font change to 14px, bold`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-315`} description={`Character counter for multiple textbox`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.10'>
            <AccordionItem itemKey="1.10" headerText={`Allure 1.10  Oct/23/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-271`} description={`People picker: The left/right arrow key should not clear the content`}/>
                <DetailChangeLog keyRow={`APAUI-281`}  description={`Spacing in modal is not accurate`}/>
                <DetailChangeLog keyRow={`APAUI-284`}  description={`Timer picker focus border shows incompletely.`}/>
                <DetailChangeLog keyRow={`APAUI-297`}  description={`Loading needs to fit the actual content size`}/>
                <DetailChangeLog keyRow={`APAUI-299`}  description={`Date range changes to month view while clicking year view`}/>
                <DetailChangeLog keyRow={`APAUI-300`}  description={`People picker list: The second level font will turn into white after click.`}/>
                <DetailChangeLog keyRow={`APAUI-304`}  description={`Divider line should have left and right padding, instead of a through line within a modal/popup`}/>
                <DetailChangeLog keyRow={`APAUI-305`}  description={`Dialog title padding-bottom should be 24px`}/>
                <DetailChangeLog keyRow={`APAUI-308`}  description={`Expander new style issues`}/>
                <DetailChangeLog keyRow={`APAUI-311`}  description={`Click Enable daily scan time twice, the scrollbar of hours can not pull down, hours: 6-11 can not be selected`}/>
                <DetailChangeLog keyRow={`APAUI-312`}  description={`Time picker can not lost focus`}/>
                <DetailChangeLog keyRow={`APAUI-313`}  description={`Activity timeline UI problems`}/>
                <DetailChangeLog keyRow={`APAUI-317`}  description={`Remove primary button in the table`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Improvement`}</Label>
                <DetailChangeLog keyRow={`APAUI-209`} description={`[Research]Improve date range control`}/>
                <DetailChangeLog keyRow={`APAUI-301`}  description={`Change log updates`}/>
                <DetailChangeLog keyRow={`APAUI-302`}  description={`[Time picker] Add one picker with am/pm by default`}/>
                <DetailChangeLog keyRow={`APAUI-303`}  description={`Dialog and modal website wording improvement`}/>
                <DetailChangeLog keyRow={`APAUI-306`}  description={`Table primary column: Add hover style`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-195`} description={`Single file uploader`}/>
                <DetailChangeLog keyRow={`APAUI-197`} description={`Date range picker add OK button`}/>
                <DetailChangeLog keyRow={`APAUI-293`} description={`Expander another style`}/>
                <DetailChangeLog keyRow={`APAUI-295`} description={`Activity timeline`}/>
                <DetailChangeLog keyRow={`APAUI-298`} description={`Add a seperated two calendar control for Date range`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.9'>
            <AccordionItem itemKey="1.9" headerText={`Allure 1.9  Aug/22/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-170`} description={`[WCAG]Tab Problems`}/>
                <DetailChangeLog keyRow={`APAUI-178`}  description={`[WCAG]Tab issues`}/>
                <DetailChangeLog keyRow={`APAUI-268`}  description={`Shimmer color is darker than fluent`}/>
                <DetailChangeLog keyRow={`APAUI-275`}  description={`Checkbox should add white background color`}/>
                <DetailChangeLog keyRow={`APAUI-276`}  description={`Radio button should add white background color`}/>
                <DetailChangeLog keyRow={`APAUI-278`}  description={`Move diag scrollbar to the right side.`}/>
                <DetailChangeLog keyRow={`APAUI-280`}  description={`Change GUI terms for Diag`}/>
                <DetailChangeLog keyRow={`APAUI-285`}  description={`Select padding issue`}/>
                <DetailChangeLog keyRow={`APAUI-287`}  description={`Add tooltip for navigation expand/collapse action`}/>
                <DetailChangeLog keyRow={`APAUI-290`}  description={`[Multiple-select] previous selected items will be cleared once using search`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Improvement`}</Label>
                <DetailChangeLog keyRow={`APAUI-185`} description={`[Research]Scroll bar improvement`}/>
                <DetailChangeLog keyRow={`APAUI-282`}  description={`Improve logo standard in navigation`}/>
                <DetailChangeLog keyRow={`APAUI-291`}  description={`Multiple select wording improvement`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-125`} description={`[WCAG]Button`}/>
                <DetailChangeLog keyRow={`APAUI-126`} description={`[WCAG]Breadcrumb`}/>
                <DetailChangeLog keyRow={`APAUI-134`} description={`[WCAG]Expander`}/>
                <DetailChangeLog keyRow={`APAUI-140`} description={`[WCAG]Switch`}/>
                <DetailChangeLog keyRow={`APAUI-146`} description={`[WCAG]Tooltip`}/>
                <DetailChangeLog keyRow={`APAUI-147`} description={`[WCAG]Dialog`}/>
                <DetailChangeLog keyRow={`APAUI-272`} description={`Diag - remove the x icon at the right top corner.`}/>
                <DetailChangeLog keyRow={`APAUI-273`} description={`Add title property for main navigation`}/>
                <DetailChangeLog keyRow={`APAUI-279`} description={`Add the modal page`}/>
                <DetailChangeLog keyRow={`APAUI-289`} description={`Waffle support custom img icon`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.8'>
            <AccordionItem itemKey="1.8" headerText={`Allure 1.8  Jun/20/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-170`} description={`[WCAG]Tab Problems`}/>
                <DetailChangeLog keyRow={`APAUI-178`}  description={`[WCAG]Tab issues`}/>
                <DetailChangeLog keyRow={`APAUI-268`}  description={`Shimmer color is darker than fluent`}/>
                <DetailChangeLog keyRow={`APAUI-275`}  description={`Checkbox should add white background color`}/>
                <DetailChangeLog keyRow={`APAUI-276`}  description={`Radio button should add white background color`}/>
                <DetailChangeLog keyRow={`APAUI-278`}  description={`Move diag scrollbar to the right side.`}/>
                <DetailChangeLog keyRow={`APAUI-280`}  description={`Change GUI terms for Diag`}/>
                <DetailChangeLog keyRow={`APAUI-285`}  description={`Select padding issue`}/>
                <DetailChangeLog keyRow={`APAUI-287`}  description={`Add tooltip for navigation expand/collapse action`}/>
                <DetailChangeLog keyRow={`APAUI-290`}  description={`[Multiple-select] previous selected items will be cleared once using search`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Improvement`}</Label>
                <DetailChangeLog keyRow={`APAUI-185`} description={`[Research]Scroll bar improvement`}/>
                <DetailChangeLog keyRow={`APAUI-282`}  description={`Improve logo standard in navigation`}/>
                <DetailChangeLog keyRow={`APAUI-291`}  description={`Multiple select wording improvement`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-125`} description={`[WCAG]Button`}/>
                <DetailChangeLog keyRow={`APAUI-126`} description={`[WCAG]Breadcrumb`}/>
                <DetailChangeLog keyRow={`APAUI-134`} description={`[WCAG]Expander`}/>
                <DetailChangeLog keyRow={`APAUI-140`} description={`[WCAG]Switch`}/>
                <DetailChangeLog keyRow={`APAUI-146`} description={`[WCAG]Tooltip`}/>
                <DetailChangeLog keyRow={`APAUI-147`} description={`[WCAG]Dialog`}/>
                <DetailChangeLog keyRow={`APAUI-272`} description={`Diag - remove the x icon at the right top corner.`}/>
                <DetailChangeLog keyRow={`APAUI-273`} description={`Add title property for main navigation`}/>
                <DetailChangeLog keyRow={`APAUI-279`} description={`Add the modal page`}/>
                <DetailChangeLog keyRow={`APAUI-289`} description={`Waffle support custom img icon`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.7'>
            <AccordionItem itemKey="1.7" headerText={`Allure 1.7  Apr/27/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-198`} description={`Tooltip cannot show complete letter g`}/>
                <DetailChangeLog keyRow={`APAUI-210`}  description={`Waffle should show/hide when clicking`}/>
                <DetailChangeLog keyRow={`APAUI-217`}  description={`[Tab] Firefox style issue`}/>
                <DetailChangeLog keyRow={`APAUI-218`}  description={`[New UI]Job Monitor search click x with no respond`}/>
                <DetailChangeLog keyRow={`APAUI-225`}  description={`[Table]User inline preview - the margin of more panel is not correct`}/>
                <DetailChangeLog keyRow={`APAUI-226`}  description={`Wording`}/>
                <DetailChangeLog keyRow={`APAUI-227`}  description={`Customized notification color needs change`}/>
                <DetailChangeLog keyRow={`APAUI-228`}  description={`Button focus status should be only for keyboard`}/>
                <DetailChangeLog keyRow={`APAUI-230`}  description={`context menu icon color is not correct`}/>
                <DetailChangeLog keyRow={`APAUI-231`}  description={`Root breadcrumb should remove padding-left`}/>
                <DetailChangeLog keyRow={`APAUI-232`}  description={`Cursor pointer issue`}/>
                <DetailChangeLog keyRow={`APAUI-233`}  description={`Radio button space issue`}/>
                <DetailChangeLog keyRow={`APAUI-234`}  description={`Date picker should highlight current day`}/>
                <DetailChangeLog keyRow={`APAUI-236`}  description={`wizard step description description should be 13px`}/>
                <DetailChangeLog keyRow={`APAUI-237`}  description={`Link should not be focused after clicking`}/>
                <DetailChangeLog keyRow={`APAUI-238`}  description={`Radio button style issue`}/>
                <DetailChangeLog keyRow={`APAUI-239`}  description={`Checkbox disable text color`}/>
                <DetailChangeLog keyRow={`APAUI-241`}  description={`Checkbox space issue`}/>
                <DetailChangeLog keyRow={`APAUI-242`}  description={`Breadcrumb display issue`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Improvement`}</Label>
                <DetailChangeLog keyRow={`APAUI-220`} description={`[VPAT]Disable button`}/>
                <DetailChangeLog keyRow={`APAUI-221`}  description={`Remove Test tube icon before Tab`}/>
                <DetailChangeLog keyRow={`APAUI-222`}  description={`Remove Test tube icon before TimePicker`}/>
                <DetailChangeLog keyRow={`APAUI-223`}  description={`Remove Test tube icon before Expander`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-88`} description={`[Table]Add More people in table`}/>
                <DetailChangeLog keyRow={`APAUI-194`} description={`Single file browser`}/>
                <DetailChangeLog keyRow={`APAUI-204`} description={`Highlight selected sub navigation item`}/>
                <DetailChangeLog keyRow={`APAUI-206`} description={`Add designer allure standard link in the demo site`}/>
                <DetailChangeLog keyRow={`APAUI-214`} description={`[table] row text can be selected`}/>
                <DetailChangeLog keyRow={`APAUI-224`} description={`Replace placeholder text`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.6'>
            <AccordionItem itemKey="1.6" headerText={`Allure 1.6  Apr/27/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-205`} description={`Diag should always has a dismiss button`}/>
                <DetailChangeLog keyRow={`APAUI-207`}  description={`Date range select range with keyboard`}/>
                <DetailChangeLog keyRow={`APAUI-208`}  description={`Pager issue with too many items`}/>
                <DetailChangeLog keyRow={`APAUI-212`}  description={`CLONE - [Alita-11699] performance issue`}/>
                <DetailChangeLog keyRow={`APAUI-213`}  description={`Searchbox performance issue`}/>
                <DetailChangeLog keyRow={`APAUI-226`}  description={`Wording`}/>
                <DetailChangeLog keyRow={`APAUI-227`}  description={`Customized notification color needs change`}/>
                <DetailChangeLog keyRow={`APAUI-228`}  description={`Button focus status should be only for keyboard`}/>
                <DetailChangeLog keyRow={`APAUI-230`}  description={`context menu icon color is not correct`}/>
                <DetailChangeLog keyRow={`APAUI-231`}  description={`Root breadcrumb should remove padding-left`}/>
                <DetailChangeLog keyRow={`APAUI-232`}  description={`Cursor pointer issue`}/>
                <DetailChangeLog keyRow={`APAUI-233`}  description={`Radio button space issue`}/>
                <DetailChangeLog keyRow={`APAUI-234`}  description={`Date picker should highlight current day`}/>
                <DetailChangeLog keyRow={`APAUI-236`}  description={`wizard step description description should be 13px`}/>
                <DetailChangeLog keyRow={`APAUI-237`}  description={`Link should not be focused after clicking`}/>
                <DetailChangeLog keyRow={`APAUI-238`}  description={`Radio button style issue`}/>
                <DetailChangeLog keyRow={`APAUI-239`}  description={`Checkbox disable text color`}/>
                <DetailChangeLog keyRow={`APAUI-241`}  description={`Checkbox space issue`}/>
                <DetailChangeLog keyRow={`APAUI-242`}  description={`Breadcrumb display issue`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-148`} description={`[WCAG]Popover-Notification center`}/>
                <DetailChangeLog keyRow={`APAUI-192`} description={`Improve navigation animation effect`}/>
                <DetailChangeLog keyRow={`APAUI-193`} description={`Disable button should have a tooltip/title to describe some reason`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.5'>
            <AccordionItem itemKey="1.5" headerText={`Allure 1.5  Apr/27/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-169`} description={`[Progress]Static Progress UI problems`}/>
                <DetailChangeLog keyRow={`APAUI-174`}  description={`Global search和language 拥挤`}/>
                <DetailChangeLog keyRow={`APAUI-175`}  description={`Wizard is ready for production`}/>
                <DetailChangeLog keyRow={`APAUI-177`}  description={`Static Progress UI issue`}/>
                <DetailChangeLog keyRow={`APAUI-179`}  description={`[WCAG]Navigation问题`}/>
                <DetailChangeLog keyRow={`APAUI-183`}  description={`Table first column space issue`}/>
                <DetailChangeLog keyRow={`APAUI-184`}  description={`Tab space issue`}/>
                <DetailChangeLog keyRow={`APAUI-189`}  description={`People picker result issue`}/>
                <DetailChangeLog keyRow={`APAUI-190`}  description={`Panel cursor issue`}/>
                <DetailChangeLog keyRow={`APAUI-199`}  description={`Breadcrumb with no cursor change when not clickable`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Improvement`}</Label>
                <DetailChangeLog keyRow={`APAUI-186`} description={`Two scenarios for People picker`}/>
                <DetailChangeLog keyRow={`APAUI-188`}  description={`Remove address book icon within people picker`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-133`} description={`[WCAG]Date Picker`}/>
                <DetailChangeLog keyRow={`APAUI-137`} description={`[WCAG]People Picker`}/>
                <DetailChangeLog keyRow={`APAUI-139`} description={`[WCAG]Select`}/>
                <DetailChangeLog keyRow={`APAUI-141`} description={`[WCAG]Time Picker`}/>
                <DetailChangeLog keyRow={`APAUI-143`} description={`[WCAG]Carousel`}/>
                <DetailChangeLog keyRow={`APAUI-167`} description={`[Panel]Add extra panel`}/>
                <DetailChangeLog keyRow={`APAUI-168`} description={`[Select] Add a clear feature for single dropdown list`}/>
                <DetailChangeLog keyRow={`APAUI-167`} description={`[WCAG]Warning and Error icon and color changes`}/>
                <DetailChangeLog keyRow={`APAUI-181`} description={`Add common country codes`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.4'>
            <AccordionItem itemKey="1.4" headerText={`Allure 1.4  Apr/27/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-151`} description={`[Table]Custom table style issue`}/>
                <DetailChangeLog keyRow={`APAUI-152`}  description={`[Select]Multiple with all features`}/>
                <DetailChangeLog keyRow={`APAUI-154`}  description={`Disable border color issue`}/>
                <DetailChangeLog keyRow={`APAUI-162`}  description={`Static Progress UI issue`}/>
                <DetailChangeLog keyRow={`APAUI-163`}  description={`Current step font size should have bold effect in wizard`}/>
                <DetailChangeLog keyRow={`APAUI-164`}  description={`Wizard should expose the “In Progress description” parameter`}/>
                <DetailChangeLog keyRow={`APAUI-165`}  description={`[Timepicker]Change backup frequency interaction issue`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-53`} description={`[Calendar]add control`}/>
                <DetailChangeLog keyRow={`APAUI-54`}  description={`[Filter]add control`}/>
                <DetailChangeLog keyRow={`APAUI-85`} description={`[Table]Add compact table`}/>
                <DetailChangeLog keyRow={`APAUI-122`} description={`[Progress]Line Progress Bar`}/>
                <DetailChangeLog keyRow={`APAUI-123`} description={`[Progress]Circle Progress`}/>
                <DetailChangeLog keyRow={`APAUI-124`} description={`[Progress]Static Progress`}/>
                <DetailChangeLog keyRow={`APAUI-127`} description={`[WCAG]Navigationt`}/>
                <DetailChangeLog keyRow={`APAUI-132`} description={`[WCAG]Checkbox`}/>
                <DetailChangeLog keyRow={`APAUI-136`} description={`[WCAG]Input`}/>
                <DetailChangeLog keyRow={`APAUI-138`} description={`[WCAG]Radio Button`}/>
                <DetailChangeLog keyRow={`APAUI-150`} description={`[Waffle]Switch product`}/>
                <DetailChangeLog keyRow={`APAUI-153`} description={`[Na]]Adjust the spacing between sub navigations`}/>
                <DetailChangeLog keyRow={`APAUI-158`} description={`[ButtonGroup]Add another button demo: icon button group`}/>
                <DetailChangeLog keyRow={`APAUI-166`} description={`Support default i18n terms`}/>
                <DetailChangeLog keyRow={`APAUI-182`} description={`Add common product`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.3'>
            <AccordionItem itemKey="1.3" headerText={`Allure 1.3  Apr/27/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-95`} description={`people picker background issue`}/>
                <DetailChangeLog keyRow={`APAUI-96`}  description={`[FileUploader]long file name issue`}/>
                <DetailChangeLog keyRow={`APAUI-99`}  description={`[Navigation menu]Light mode sub menu issue`}/>
                <DetailChangeLog keyRow={`APAUI-100`}  description={`[Panel] close button align issue`}/>
                <DetailChangeLog keyRow={`APAUI-101`}  description={`Design principle text style issue`}/>
                <DetailChangeLog keyRow={`APAUI-103`}  description={`[Button]button space issue`}/>
                <DetailChangeLog keyRow={`APAUI-105`}  description={`Tab space issue`}/>
                <DetailChangeLog keyRow={`APAUI-106`}  description={`[Button]Icon button icon size issue`}/>
                <DetailChangeLog keyRow={`APAUI-108`}  description={`[Pager] go to page action space issue`}/>
                <DetailChangeLog keyRow={`APAUI-109`}  description={`[Table]Custom table default view style issue`}/>
                <DetailChangeLog keyRow={`APAUI-110`}  description={`[people picker]list style issue`}/>
                <DetailChangeLog keyRow={`APAUI-111`}  description={`[Tree] tree checkbox style issue`}/>
                <DetailChangeLog keyRow={`APAUI-112`}  description={`[Select]Multiple style issue`}/>
                <DetailChangeLog keyRow={`APAUI-113`}  description={`[NavPanel] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-115`}  description={`[DatePicker] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-116`}  description={`[Navigation] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-120`}  description={`[Dialog] alignment issue`}/>
                <DetailChangeLog keyRow={`APAUI-121`}  description={`[Uploader]File upload error message style issue`}/>
                <DetailChangeLog keyRow={`APAUI-155`}  description={`[Nav]The spacing between sub navigations is so crowed`}/>
                <DetailChangeLog keyRow={`APAUI-156`}  description={`Change wizard font size`}/>
                <DetailChangeLog keyRow={`APAUI-157`}  description={`Shimmer color not correct`}/>
                <DetailChangeLog keyRow={`APAUI-159`}  description={`[Panel]Panel title style issue`}/>
                <DetailChangeLog keyRow={`APAUI-160`}  description={`Firefox navigation icon style issue`}/>
                <DetailChangeLog keyRow={`APAUI-161`}  description={`Table shimmer should have animation`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Improvement`}</Label>
                <DetailChangeLog keyRow={`APAUI-102`} description={`Text in the message bar should change to regular`}/>
                <DetailChangeLog keyRow={`APAUI-107`}  description={`[Button]Button inner spacing standard`}/>
                <DetailChangeLog keyRow={`APAUI-117`}  description={`[Navigation]Wrap text when navigation text is long`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-74`} description={`[Button] Add Dashed button`}/>
                <DetailChangeLog keyRow={`APAUI-75`} description={`[Button]Add Multi Level button`}/>
                <DetailChangeLog keyRow={`APAUI-76`} description={`[Button]Add Button loading`}/>
                <DetailChangeLog keyRow={`APAUI-77`} description={`[Panel]Add secondary slide panel style`}/>
                <DetailChangeLog keyRow={`APAUI-78`} description={`[Uploader]Add Upload logo`}/>
                <DetailChangeLog keyRow={`APAUI-79`} description={`[UploaderAdd Upload avatar`}/>
                <DetailChangeLog keyRow={`APAUI-80`} description={`[Theme]Change Theme`}/>
                <DetailChangeLog keyRow={`APAUI-81`} description={`[Select]Add new and manage link in selection`}/>
                <DetailChangeLog keyRow={`APAUI-83`} description={`[Navigation menu]Navigation should have tooltip`}/>
                <DetailChangeLog keyRow={`APAUI-84`} description={`[Date Picker]Add Date Picker`}/>
                <DetailChangeLog keyRow={`APAUI-90`} description={`[Tab]Add Vertical Tab`}/>
                <DetailChangeLog keyRow={`APAUI-91`} description={`Improve search box`}/>
                <DetailChangeLog keyRow={`APAUI-93`} description={`Improve file upload`}/>
                <DetailChangeLog keyRow={`APAUI-104`} description={`[Breadcrumb] style improvement`}/>
                <DetailChangeLog keyRow={`APAUI-118`} description={`[DatePicker] add required style`}/>
                <DetailChangeLog keyRow={`APAUI-119`} description={`[Select] add multi select demo`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.2'>
            <AccordionItem itemKey="1.2" headerText={`Allure 1.2  Jun/04/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-28`} description={`[Navigation menu]interaction issue`}/>
                <DetailChangeLog keyRow={`APAUI-39`}  description={`[Table]style issue`}/>
                <DetailChangeLog keyRow={`APAUI-59`}  description={`[Select] Multiple interaction issue`}/>
                <DetailChangeLog keyRow={`APAUI-60`}  description={`[Checkbox] Select all interaction issue`}/>
                <DetailChangeLog keyRow={`APAUI-61`}  description={`Icon gallery details issues`}/>
                <DetailChangeLog keyRow={`APAUI-63`}  description={`[DatePicker]no respond when first click`}/>
                <DetailChangeLog keyRow={`APAUI-64`}  description={`Tab space issue`}/>
                <DetailChangeLog keyRow={`APAUI-65`}  description={`[Button]Icon button icon size issue`}/>
                <DetailChangeLog keyRow={`APAUI-66`}  description={`[Pager] go to page action space issue`}/>
                <DetailChangeLog keyRow={`APAUI-67`}  description={`[Table]Custom table default view style issue`}/>
                <DetailChangeLog keyRow={`APAUI-68`}  description={`[people picker]list style issue`}/>
                <DetailChangeLog keyRow={`APAUI-70`}  description={`[Select]Select all interaction issue`}/>
                <DetailChangeLog keyRow={`APAUI-71`}  description={`[Navigation menu]style improvement`}/>
                <DetailChangeLog keyRow={`APAUI-72`}  description={`[Panel]Layout issue`}/>
                <DetailChangeLog keyRow={`APAUI-92`}  description={`[RangePicker]warning in console log`}/>
                <DetailChangeLog keyRow={`APAUI-94`}  description={`[RangePicker]add clear feature`}/>
                <DetailChangeLog keyRow={`APAUI-97`}  description={`[DatePicker]clear selected`}/>
                <DetailChangeLog keyRow={`APAUI-98`}  description={`Tooltip style issue`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-55`} description={`[Tab]add control`}/>
                <DetailChangeLog keyRow={`APAUI-56`} description={`[Select]add group`}/>
                <DetailChangeLog keyRow={`APAUI-57`} description={`[Tree]add control`}/>
                <DetailChangeLog keyRow={`APAUI-58`} description={`[Navigation menu]add light mode`}/>
                <DetailChangeLog keyRow={`APAUI-73`} description={`[Expander]add large mode`}/>
                </section>
            </AccordionItem>
        </VersionLog>
        <VersionLog itemKey='1.1'>
            <AccordionItem itemKey="1.1" headerText={`Allure 1.1  Mar/25/2023`}>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Bug`}</Label>
                <DetailChangeLog keyRow={`APAUI-1`} description={`Panel styles`}/>
                <DetailChangeLog keyRow={`APAUI-2`}  description={`Panel styles`}/>
                <DetailChangeLog keyRow={`APAUI-11`}  description={`Combobox style issue`}/>
                <DetailChangeLog keyRow={`APAUI-12`}  description={`Dropdown style issue`}/>
                <DetailChangeLog keyRow={`APAUI-13`}  description={`Checkbox style issue`}/>
                <DetailChangeLog keyRow={`APAUI-14`}  description={`Datepicker style issue`}/>
                <DetailChangeLog keyRow={`APAUI-15`}  description={`Menu style issue`}/>
                <DetailChangeLog keyRow={`APAUI-18`}  description={`[Input]focus style issue`}/>
                <DetailChangeLog keyRow={`APAUI-19`}  description={`[Table] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-20`}  description={`[Notification] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-21`}  description={`[Button]Link button style issue`}/>
                <DetailChangeLog keyRow={`APAUI-22`}  description={`[Dialog] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-23`}  description={`[Input]Teal style issue`}/>
                <DetailChangeLog keyRow={`APAUI-24`}  description={`[Table]Teal style issue`}/>
                <DetailChangeLog keyRow={`APAUI-29`}  description={`[DatePicker] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-30`}  description={`[PeoplePicker] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-31`}  description={`[Radiobutton] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-32`}  description={`[Select] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-33`}  description={`[Loading]full screen style issue`}/>
                <DetailChangeLog keyRow={`APAUI-34`}  description={`[Breadcrumb] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-35`}  description={`[TimePicker] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-36`}  description={`[Checkbox]Check all style issue`}/>
                <DetailChangeLog keyRow={`APAUI-37`}  description={`[Expander] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-40`}  description={`[Panel] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-41`}  description={`[FileUploader] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-42`}  description={`[AutoComplete] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-43`}  description={`[Wizard] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-45`}  description={`[Input]Search style issue`}/>
                <DetailChangeLog keyRow={`APAUI-46`}  description={`[Select] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-47`}  description={`[Checkbox]support teal theme`}/>
                <DetailChangeLog keyRow={`APAUI-48`}  description={`[Radiobutton]hover supports teal theme`}/>
                <DetailChangeLog keyRow={`APAUI-49`}  description={`[RangePicker] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-51`}  description={`[PeoplePicker] style issue`}/>
                <DetailChangeLog keyRow={`APAUI-52`}  description={`[FileUploader] style issue`}/>
                </section>
                <section style={{marginBottom:50}}>
                <Label style={{fontWeight:800}}>{`Task`}</Label>
                <DetailChangeLog keyRow={`APAUI-3`} description={`Add DateRangePicker`}/>
                <DetailChangeLog keyRow={`APAUI-4`} description={`Add NavPanel`}/>
                <DetailChangeLog keyRow={`APAUI-5`} description={`Add Table`}/>
                <DetailChangeLog keyRow={`APAUI-6`} description={`Add Checkbox`}/>
                <DetailChangeLog keyRow={`APAUI-7`} description={`Add Radio`}/>
                <DetailChangeLog keyRow={`APAUI-7`} description={`Build system`}/>
                <DetailChangeLog keyRow={`APAUI-7`} description={`Develop Dialog Control`}/>
                <DetailChangeLog keyRow={`APAUI-7`} description={`Add Dropdown`}/>
                <DetailChangeLog keyRow={`APAUI-7`} description={`New Allure website`}/>
                <DetailChangeLog keyRow={`APAUI-7`} description={`Add datepicker & Calendar`}/>
                <DetailChangeLog keyRow={`APAUI-7`} description={`Add people picker`}/>
                <DetailChangeLog keyRow={`APAUI-7`} description={`Add Time Picker`}/>
                <DetailChangeLog keyRow={`APAUI-7`} description={`Add Carousel`}/>
                <DetailChangeLog keyRow={`APAUI-7`} description={`[RadioButton]add vertical styles`}/>
                </section>
            </AccordionItem>
        </VersionLog>
    </section>
}
export default Changelog