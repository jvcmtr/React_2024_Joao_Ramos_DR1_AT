import React, { useEffect, useState } from 'react';

const FadeIn = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const Id = 'fadeIn'+props.id

    // Função feita com auxilio de inteligencia artificial
    const handleScroll = () => {
        const rect = document.getElementById(Id).getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setIsVisible(true);
            if(props.onlyOnce != undefined){
                window.removeEventListener('scroll', handleScroll);
            }
        }
        else{
            setIsVisible(false)
        }
    };

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id={Id} style={FadeStyle(isVisible, props.duration) }>
            <div style={ innerItem(isVisible, props.duration, props.type)}>
                {props.children}
            </div>
        </div>
    );
};

export default FadeIn;

const FadeStyle = (visible, duration) =>{
    return{
        overflow: 'hidden',
        opacity: visible? '1': '0',
        transitionDelay: '0.2s',
        transitionDuration: duration? duration: '0.5s',
        transitionTimingFunction: 'ease-out'
    }
}

const innerItem = (visible, duration, type) => {
    return {
        position: 'relative',
        transitionDuration:  duration? duration:'0.7s',
        transitionTimingFunction: 'ease-out',
        ... getFadeInTypesStyle(visible, type)
    }
}

const getFadeInTypesStyle = (visible, type) =>{
    if(type == 'toLeft' || type == undefined){
        return {
            transform: visible? 'translateX(0)': 'translateX(100%)',
        }
    }

    if(type == 'toRight'){
        return {
            transform: visible? 'translateX(0)': 'translateX(-100%)',
        }
    }

    if (type == 'pop'){
        return{
            transform: visible? 'scale(1)' : 'scale(0)'
        }
    }

}