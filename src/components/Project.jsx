import React from "react"
export function Project(props) {
    const [selected, setSelected] = React.useState(false)


    const handleDelayedClick = (e) => {
        if (props.selected) {
            e.currentTarget.animate([
                {marginRight: 0, opacity: 1},
                {marginRight: '-45%', opactity: 0}
            ], {
                delay: 0,
                duration: 350,
                easing: 'ease-in-out',
                fill: 'forwards'
            })
            try {
                if (window.getComputedStyle(document.querySelector('.-project-content-image-wrapper')).getPropertyValue('position') == "absolute") {
                    document.querySelector('.-project-content').animate([
                        {opacity:1},
                        {opacity:0}
                    ], {
                        delay: 0,
                        duration: 350,
                        easing: 'ease-in-out',
                        fill: 'forwards'
                    })
                } else {
                    document.querySelector('.-project-content').animate([
                        {marginRight: 0, opacity:1},
                        {marginRight: "-70%", opacity:0}
                    ], {
                        delay: 0,
                        duration: 350,
                        easing: 'ease-in-out',
                        fill: 'forwards'
                    })
                }
            } catch (ex) {
                document.querySelector('.-project-content').animate([
                    {marginRight: 0, opacity:1},
                    {marginRight: "-70%", opacity:0}
                ], {
                    delay: 0,
                    duration: 350,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                })
            }
            document.querySelector('#links').animate([
                {marginRight: 0, opacity:1},
                {marginRight: "-70%", opacity:0}
            ], {
                delay: 0,
                duration: 350,
                easing: 'ease-in-out',
                fill: 'forwards'
            })
            setTimeout(() => {
                props.handleClick(props.title, props.description, props.timestamp)
            }, 400)
        } else {
            props.handleClick(props.title, props.description, props.timestamp)
        }
    }

    return (
        <div className={props.selected ? "-projects-pseudocard" : "-projects-card"} data-id={props.title} onClick={(e) => handleDelayedClick(e)}>
            {
                !selected
                &&
                <div className="-projects-preview">
                    <div className="-projects-preview-title">{props.title}</div>
                    <div className="-projects-preview-description">{props.description} - <span style={{fontWeight:'700'}}>{props.timestamp}</span></div>
                </div>
            }
        </div>
    )
}
