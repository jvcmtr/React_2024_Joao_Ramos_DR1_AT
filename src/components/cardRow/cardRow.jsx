import Card from "../card/Card";
import FadeIn from "../fadeIn/FadeIn";

export default function CardRow(props){
    return (
        <div style={rowStyle} id={props.id}>
            {
                props.cards.map((item, key) =>(
                    <FadeIn id={key} key={key} type='pop'>
                        <Card
                            img={item.img}
                            icon={item.icon}
                            topic={item.topic}
                            text={item.text}
                        />
                    </FadeIn>
                ))
            }
        </div>
    )
}

const rowStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px'
}