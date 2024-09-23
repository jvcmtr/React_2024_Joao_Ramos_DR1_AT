import React from "react";
import appState from '../../appTabs.js'
import {colors} from '../../constants.js'

export default function NavItem(props){
    const [hover, setHover] = React.useState(false);
    const [selected, setSelected] = React.useState(false)

    function checkSelected(v){
        if (v == props.name){
            setSelected(true)
        }
        if (v != props.name){
            setSelected(false)
        }
    }

    React.useEffect(()=>{
        checkSelected(appState.currentTab)
        appState.subscribe(checkSelected)
    },[])

    return(
        <div
            onClick={()=>appState.changeTab(props.name)} 
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            className={props.className}
            style={navItemStyle(selected, hover)}
        >
            {props.name}
        </div>
    )
}

const navItemStyle = (current, hover) => {
    let ActiveColor = colors.orange2;
    let b = colors.blue1
    
    return {
        color: hover? colors.white: current ? ActiveColor : b,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '10px',
        paddingLeft: hover? '15px' : '10px',
        paddingRight: hover? '15px' : '10px',
        backgroundColor: hover? ActiveColor : "transparent",   
        fontWeight: '600',
        transitionDuration: '0.1s',
        borderBottom: current? `2px solid ${ActiveColor}`: `2px solid ${b}` 
    }
}