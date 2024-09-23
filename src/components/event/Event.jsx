import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "../../constants.js"

const Event = (props) =>{
    return (
        <div style={container}>
            <p style={dtStyle}>
            <i class="bi bi-calendar-event" style={icon}></i>{" " + props.dt}
            </p>
            <p style={localStyle}>
                 {props.local}   
            </p>
            <p style={descStyle}> 
                {props.desc} 
            </p>
        </div>
    )
}

export default Event

const container = {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#eeeeee'
}

const dtStyle = {
    fontWeight: '600',
    fontSize: 'small',
    color: colors.orange2,
    margin: '0px',
}
const localStyle = {
    fontWeight: '600',
    fontSize: 'small',
    color: colors.blue1,
    borderBottom: `2px solid ${colors.orange1}`,
    margin: '0px',
    marginBottom: '5px'
}
const descStyle ={
    //fontStyle : 'italic',
    color: colors.blue1,
    margin: '0px',
}
const icon={
    color: colors.orangeDark,
}