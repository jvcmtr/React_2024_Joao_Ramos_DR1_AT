import CardRow from "../components/cardRow/cardRow"
import Section from "../components/section/Section"
import EventList from "../components/eventList/EventList.jsx"
import { section } from "../constants"

export default function MainContent(props){
    return (
        <div style={mainStyle}>
            <Section
                id={section("Biografia")}
                title="Marco Madureira"
                stext={Biografia[0] + Biografia[1] + Biografia[2]}
                img='./Roberto.png'
                alt
            >
                <p style={{margin:'0px'}}>{Biografia[0]}</p>
                <p style={{margin:'0px'}}>{Biografia[1]}</p>
            </Section>
            <CardRow id={section("Propostas")} cards={cards}/>
            <Section id={section("Agenda")}
                title="Proximos Eventos">
                <EventList events={eventos}/>
            </Section>
        </div>
    )
}


const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5vh'
}

const Biografia =[ "Marco Madureira, Homem, nasceu em Abril de 1942 na Maternidade Herculano Pinheiro, localizada na Zona Norte da cidade do Rio de Janeiro. Nascido e criado em Madureira, Marco se mudou para Tijuca com 28 anos onde cuidou de sua esposa e teve 3 filhos. Este cidadão é formado em administração na PUC e possui mestrado em Ciências Políticas na UFRJ, além de prezar pela liberdade de artistas e de pequenos empreendedores, e acreditar nos valores cristões e no bem da família tradicional brasileira.",
"A infancia de Marco foi difícil, ele afirmou que havia sofrido bullying durante seu período estudantil, por conta de sua baixa estatura (168cm). Sem amigos, sempre cuidou de cachorros em suas moradias, então este pai sempre possuiu um carinho inexplicável por animais, o que incentiva suas políticas de apoio a fauna e a flora brasileira, existente em seus projeto sobre o meio ambiente. ",
"Desarte, Marco Madureira é um homem carinhoso, cuidador de animais, de sua família, e da sociedade brasileira. Este homem, com seus éticos valores preza pela vida dos cariocas e faz constantemente reformas para melhorar sua casa. Vote Marco Madureira, o homem que transformará o Rio. Vote 99."
]
const eventos = [
    {
        date: '19/08 - 16:30 ',
        local: 'Estrada da barra, 1320',
        description: 'Comprando ranção para Batman (Cachorro do Candidato)'
    },
    {
         date: '15/09 - 12:00',
        local: 'Avenida Atlantica, 16',
        description: 'Maratona de anões (candidato estará acompanhando com patinete elétrico)'
    }, 
    {
         date: '17/09 - 14:00 ',
        local: 'Igreja Maria das Dores',
        description: 'Reza em conjunto para que o candidato ganhe a eleição'
    }, 
    {
         date: '20/09 - 00:00 ',
        local: 'Rua do Abreu, 123',
        description: 'Final do XIV Campeonato intermunicipal de rinha de galo '
    }

]





const cards=[
    {
        img:'https://wallpapers.com/images/featured/anime-classroom-background-1i3dp4bzlcsed4l0.jpg',
        icon: 'bi bi-mortarboard',
        topic: 'Educação',
        text: 'Utilização do instagram reels para educação em larga escala. Inclusão de "Tiro" como disciplina do ensino fundamental.'
    },

    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8JlW9H35r5X7rEGNFXIc5qwIOD36r_QO4g&s',
        icon: 'bi bi-capsule',
        topic: 'Saude',
        text: 'Campanhas para o incentivo à reutilização de preservativos e absorventes.'
    },

    {
        img:'https://pigeonsarentreal.co.uk/wp-content/uploads/2019/04/government-spy-pigeon.jpg',
        icon: 'bi bi-shield-plus',
        topic: 'Segurança',
        text: 'Introdução de reconhecimento facial nos atuais drones biologicos de monitoramento aereo'
    },

    {
        img:'https://upload.wikimedia.org/wikipedia/commons/2/23/Esta%C3%A7%C3%A3o_Antero_de_Quental_%2815-07-2016%29_03.jpg',
        icon: 'bi bi-bicycle',
        topic: 'Mobilidade Urbana',
        text: 'Abertura da estação gavea. Implantação da linha de metrô Centro-Icaraí'
    },



    {
        img:'https://upload.',
        icon: 'bi bi-tree',
        topic: 'Meio Ambiente',
        text: 'Importação de micos-leão-dourado e outras especies em instinção para a mata atlantica'
    },

    {
        img:'',
        icon: 'bi bi-currency-dollar',
        topic: 'Economia',
        text: 'Introdução da PL-171, que promove embasamento legal à cobrança de divida entre amigos próximos'
    },
    {
        img:'',
        icon: 'bi bi-universal-access',
        topic: 'Acessibilidade',
        text: 'Construção de "Espaços de Cuidado" para o apoio emocional à homens com menos de 1,75m'
    },
    {
        img:'',
        icon: 'bi bi-cpu',
        topic: 'Teconologia',
        text: 'Inclusão de PHP como disciplina regular obrigatoria no Ensino Médio'
    },
    {
        img:'',
        icon: 'bi bi-brush',
        topic: 'Cultura',
        text: 'Incentivo fiscal à artistas independentes da zona-sul e de classe-média'
    },

]