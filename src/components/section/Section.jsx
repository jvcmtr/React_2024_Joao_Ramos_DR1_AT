import styles from './section.module.css'
import FadeIn from "../fadeIn/FadeIn";
import appTabs from '../../appTabs'
import { colors } from '../../constants';

export default function Section(props){

    const handle = () => {
        appTabs.setCurrentTab(id)
    }

    return(
        <div id={props.id} style={{ ...sectionBaseStyle(props.alt), ...props.style}}>
            <FadeIn
                id={props.id} 
                type={props.FadeInType} 
                onVisible={()=>handle()}>
                <div className={styles.container}>
                    <div className={styles.imageContainer} style={imageContainer}>
                        <img className={styles.image} src={props.img}/>
                    </div>
                    <div className={styles.textContainer}>
                        <h2 style={{...titleStyle(props.alt), ...props.titleStyle}} className={styles.grow}>
                            {props.title}
                        </h2>
                        {
                            props.text?
                            ( <p className={styles.grow}> {props.text} </p> )
                            : ""    
                        }
                        {props.children}
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}


const sectionBaseStyle = (alt) => {
    return{
        width: '1fr',
        marginTop: '15vh',
        backgroundColor: alt? colors.blue2 :colors.white,
        color: alt? colors.white :colors.black,
        //fontWeight: alt? '600': '400'
    }
}

const titleStyle = (alt) => {
    return{
        color : alt? colors.orange2 :colors.blue1,
        borderBottom: alt? `3px solid ${colors.blue1}` :`2px solid ${colors.orange2}`,
        fontWeight: '400'
    }
}

const imageContainer = {
    backgroundColor: colors.orange1
}