import { Stack } from "@gui/fluent-ui-allure"
import { Link } from "react-router-dom"

interface DetailChangeLogProps {
    keyRow: string;
    description: string
}
const DetailChangeLog = ({keyRow, description}:DetailChangeLogProps) => {
 return <section>
     <Stack horizontal style={{ marginTop: 8, marginLeft:10}}>
     <Link to={`https://jira.avepoint.net/browse/${keyRow}`} style={{marginRight:10, width:150}}>{`${keyRow}`}</Link >
     <span style={{overflow:'hidden', maxWidth:"80%", whiteSpace:'nowrap'}}>{`${description}`}</span>
 </Stack>
 </section>

}

export default DetailChangeLog 