import React from "react"

export function Intro(props) {

    React.useEffect(() => {
        if (!props.loader.loading.stillLoading) {
            document.querySelectorAll('.-intro-letter-wrapper > div').forEach((item, index) => {
                    item.animate([
                        {transform: "translateX(0rem)", opacity: 1},
                        {transform: "translateX(3rem)", opacity: 0}
                    ], {
                        fill: "forwards",
                        duration: 600,
                        delay: (7 - index) * 100
                    })
            })
            document.querySelector('.-intro-info').animate([
                {backgroundPosition: "100%"},
                {backgroundPosition: "0%"}
            ], {
                fill: "forwards",
                duration: 850,
                delay: 400
            })
            document.querySelector('.-intro-loading').animate([
                {opacity: "1"}, 
                {opacity: "0"}
            ], {
                fill: "forwards",
                duration: 550,
                delay: 400
            })
            setTimeout(() => {
                props.loader.setLoading({stillLoading: false, animationFinished: true})
            }, 1350)
        }
    }, [props.loader.loading.stillLoading])

    return (
        <>
            <div className="-intro">
                <div className='-intro-letters'>
                    <div className="-intro-letter-wrapper" style={{display: 'flex'}}>
                        <div>H</div>
                        <div>A</div>
                        <div>L</div>
                        <div>C</div>
                        <div>Y</div>
                        <div>O</div>
                        <div>N</div>
                        <div>.</div>
                    </div>
                    <div className='-intro-info'>
                        <p>FRONT-END WEB DEVELOPER PORTFOLIO</p>
                        <div className='-intro-loading'></div>
                    </div>
                </div>
            </div>
        </>
    )
}