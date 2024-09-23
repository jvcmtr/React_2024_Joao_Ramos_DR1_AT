
import NavItem from "../components/navItem/NavItem"
import { colors, sections } from "../constants"

export default function Header(){
    return(
     <div style={headerStyle}>
        <h1>
            <span style={b}> Marco </span>
            <span style={l}> Madureira </span>
            <span style={o}>99</span>
            <span style={b}> Prefeito </span>
        </h1>
     </div>   
    )
}
// "Biografia", "Propostas", "Agenda", e "Contato". 
const headerStyle = {
    top:'0',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    textAlign:'center',
    backgroundColor: colors.white,
}
const l = {
    fontWeight: "200",
    color: colors.orangeDark,
    textShadow: '1px 1px #404040, -1px -1px #404040, 1px -1px #404040, -1px 1px #404040'
}
const b ={
    fontWeight: "200",
    color: colors.blue1,
    textShadow: '1px 1px #404040, -1px -1px #404040, 1px -1px #404040, -1px 1px #404040'
}
const o = {
    fontWeight: "800",
    padding: '7px',
    borderRadius: '50%',
    color: colors.orange1,
    backgroundColor: colors.blue1,
    textShadow: '1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000'
}