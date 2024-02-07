import "./common-product.scss" 
import { Label } from "@gui/fluent-ui-allure";
import KeyValueRow from "../../components/KeyValueRow";

const CommonProduct = () => {
   
    return <section className="commonproduct">
        <article className='commonproduct__content__title'>
                <h2 className='commonproduct__content__title--maintitle'>Common Product</h2>
                <p>Allure depends on @gui/common-i18n-terms which is a package including some common function that can be used in your projects.</p>            
        </article>
        <article className='commonproduct__content__title'>
            <Label style={{fontWeight:800}}>{`Key Value`}</Label>
            <KeyValueRow keyRow="Name" value="Icon"/>           
            <KeyValueRow keyRow="DocAve Online" value="Policies for Microsoft 365"/>           
            <KeyValueRow keyRow="Cloud Governance" value="AvePoint Perimeter Online"/>           
            <KeyValueRow keyRow="DocAve Online" value="Opus"/>           
            <KeyValueRow keyRow="Cloud Backup for Salesforce ®" value="Cloud Index"/>           
            <KeyValueRow keyRow="Cloud Insights" value="AvePoint Permissions Manager (Preview)"/>           
            <KeyValueRow keyRow="AvePoint Online Services for Partners" value="ReCenter (for Microsoft 365)"/>           
            <KeyValueRow keyRow="AvePoint Perimeter Online" value="Cloud Governance"/>           
            <KeyValueRow keyRow="AvePoint Online Services for Partners" value="Cloud Insights"/>           
            <KeyValueRow keyRow="Cloud Backup for Microsoft 365" value="EnPower"/>           
            <KeyValueRow keyRow="Cloud Management" value="Fly"/>           
            <KeyValueRow keyRow="Elements Backup" value="DocAve Backup for Salesforce"/>           
            <KeyValueRow keyRow="Elements for Partners" value="	Confide"/>           
            <KeyValueRow keyRow="Opus" value="Cloud Backup for Dynamics 365"/>           
            <KeyValueRow keyRow="Cloud Backup for Dynamics 365" value="Cloud Archiving"/>           
            <KeyValueRow keyRow="Office Connect Online Manager" value="Compliance Guardian Online"/>           
            <KeyValueRow keyRow="Cloud Index" value="Cloud Backup for Google Workspace"/>           
            <KeyValueRow keyRow="GroupHub" value="Document Management System Online (Preview)"/>           
            <KeyValueRow keyRow="Cloud Operation Portal" value="GroupHub"/>           
            <KeyValueRow keyRow="Insights for Microsoft 365" value="ReCenter (for Google Workspace)"/>           
            <KeyValueRow keyRow="Policies for Microsoft 365" value="ReCenter"/>           
            <KeyValueRow keyRow="Fly" value="AvePoint Online Services"/>           
            <KeyValueRow keyRow="Cense" value="Cloud Management"/>           
            <KeyValueRow keyRow="EnPower" value="	File Share Navigator Online"/>           
            <KeyValueRow keyRow="Confide" value="Insights for Microsoft 365"/>           
            <KeyValueRow keyRow="Workspace Archiver" value="Cloud Backup for Salesforce ®"/>           
            <KeyValueRow keyRow="Cloud Backup for IaaS + PaaS" value="Cloud Backup for Microsoft 365"/>           
            <KeyValueRow keyRow="ReCenter (for Microsoft 365)" value="Cloud Backup for IaaS + PaaS"/>           
        </article>
    </section>
}
export default CommonProduct