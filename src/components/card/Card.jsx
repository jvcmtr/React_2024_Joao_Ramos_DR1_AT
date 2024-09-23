
import module from './card.module.css';
import { colors } from '../../constants';


export default function Card(props){
    return(
        <div className={module.container} style={container(props.img)} >
            <h1 class={props.icon} style={iconStyle}>  </h1>
            <h2 style={heading}> {props.topic} </h2>
            <p style={text}>
                {props.text}
            </p>
        </div>
    )
}

const container = (img) => {
    const opacityBlue = colors.blueDark + 'cc'
    return {
        backgroundImage : `radial-gradient(#000005f0,  ${opacityBlue}), url('${img}')`,
        color: colors.white,
    }
}

const heading = {
    fontWeight: '100'
}
const text = {

}
const iconStyle = {
    fontSize: 'xx-large',
    margin : '0',
}