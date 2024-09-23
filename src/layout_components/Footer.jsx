
import { colors, section } from '../constants'


const Footer = (props) =>{

    const goTo = () =>{
        window.location.href = 'https://github.com/jvcmtr/React_2024_Joao_Ramos_DR1_at'
    }

    return (
    <div id={section("Contato")} style={footer}>
        <div style={row}>
            <div style={{...columnStyle, alignItems: 'end'}}>
        <b>Entre em contato :</b>
                <span onClick={goTo}> <i class="bi bi-instagram" style={orange}></i>  Instagram </span>
                <span onClick={goTo}> <i class="bi bi-facebook" style={orange}></i> Facebook </span>
                <span onClick={goTo}> <i class="bi bi-whatsapp" style={orange}></i> Whatsapp </span>
                <span onClick={goTo}> <i class="bi bi-twitter-x" style={orange}></i> Twitter-X </span>
                <span onClick={goTo}> <i class="bi bi-envelope-at-fill" style={orange}></i> E-Mail </span>
            </div>
            <div style={{...columnStyle, alignItems: 'start'}}>
                <span style={{color:"transparent"}}> .</span>
                <span> @MarcoM99</span>
                <span> PrefeitoMarcoMadureiraRJ</span>
                <span> (21)90000-9000</span>
                <span> Marco Madureira</span>
                <span> contato@MarcoMadureira.br</span>
                <span style={{color:"transparent"}}> Joao Cicero - MobuleFirst UI - Assessment</span>
                <span style={{color:"transparent"}}> Instituto Infnet 2024 - Professor Cidcley Oliveira </span>
            </div>
        </div>
        <span style={{fontSize:'smaller'}}> Esta é uma página ficticia, feita como um trabalho de universidade</span>
    </div>
    )
}
export default Footer;

const footer = {

    marginTop:'10vh',
    paddingTop:'10vh',
    paddingBottom:'5vh',
    textAlign: 'center',
    backgroundColor: colors.blue2,
    color: colors.offWhite,
}

const row = {
    display:' flex',
    flexDirection:' row',
    width: '100vw',
    //minHeight: '40vh',

    alignItems: 'stretch',
    justifyContent: 'start',
    textAlign:' center',
    gap: '3vw',
}

const columnStyle = {
    width:'50vw',

    display:'flex',
    flexDirection: 'column',
    justifyContent:'start',
    gap: '10px',
    padding: '10px',
    fontSize:'smaller'
}
const orange = {color:colors.orange1}