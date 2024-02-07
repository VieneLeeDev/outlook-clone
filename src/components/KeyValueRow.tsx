import { Label, Stack } from "@gui/fluent-ui-allure"

interface CommonTermRowProps{
    keyRow:string,
    value:string
}
const KeyValueRow = ({keyRow,value}:CommonTermRowProps) => {
    return <Stack horizontal style={{ marginLeft:10}}>
    <Label style={{fontWeight:500,marginRight:10, width:"50%"}}>{`${keyRow}`}</Label>
    <span style={{overflow:'hidden', maxWidth:"80%", whiteSpace:'nowrap'}}>{`${value}`}</span>
</Stack> 
}
export default KeyValueRow