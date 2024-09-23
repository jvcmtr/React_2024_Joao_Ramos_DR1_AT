import { colors, sections } from "../constants.js"
import NavItem from "../components/navItem/NavItem"

export default function NavList(props){
    return(
        <div style={navList}>
            {
                sections.map((section, id) => (
                    <NavItem id={"nav"+id} key={id} name={section}/> 
                ))
            }
        </div>
    )
}
const navList = {
    minHeight:'5vh',
    position: 'sticky',
    top:'0',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    flexFlow: 'row wrap',
    zIndex:'2',
    backgroundColor: colors.white,
    padding: "5px"
}