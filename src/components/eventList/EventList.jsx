import Event from "../event/Event";
import module from './eventList.module.css'

export default function EventList(props){
    return (
        <div className={module.container} >
            {
                props.events.map((item, key) =>(
                    <Event
                        key={key}
                        dt={item.date}
                        local={item.local}
                        desc={item.description}
                    />
                ))
            }
        </div>
    )
}