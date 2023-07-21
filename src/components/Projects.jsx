import React from "react";
import { fetchContent } from "../utilities/projectContent";
import { Project } from "./Project";
import { LangContext } from "../utilities/languageContext";
import { PhoneContext } from "../utilities/phoneContext";


const delayedSelect = (id) => {
    
    let target = document.querySelector(`[data-id="${id}"]`)
    let rect = target.getBoundingClientRect()
    document.querySelector('.-projects').style.pointerEvents = "none"
    document.querySelector('.-projects').style.overflowY = "hidden"
    target.style.pointerEvents = "none"
    let targetRect = document.querySelector('.-projects').getBoundingClientRect()
    for (let el of document.querySelector('.-projects').children) {
        if (el !== target) {
            el.animate([
                {marginRight: '0%', opacity: 1},
                {marginRight: "-45%", opacity: 0},
            ], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease-in-out'
            })
        }
    }
    setTimeout(() => {
        let diff = rect.top - targetRect.top
        target.animate([
            {transform: "translateY(0)"},
            {transform: `translateY(-${diff}px)`}
        ], {
            duration: 500,
            delay: 0,
            fill: 'forwards',
            easing: 'ease-in-out'
        })
        document.querySelector('.-projects').style.pointerEvents = "all"
        setTimeout(() => {
            target.style.transform = "translateY(0)"
        }, 500)
    }, 0)
}


export function Projects() {
    const {text} = React.useContext(LangContext)
    const [selection, setSelection] = React.useState({
        selected: false,
        content: <></>
    })
    const {isMobile} = React.useContext(PhoneContext)

    const handleClick = (id, description, timestamp) => {
        setTimeout(() => {
            setSelection({
                selected: true,
                content: fetchContent(id, description, handleDeselect, timestamp)
            })
        }, 600)
        delayedSelect(id)
    }

    const handleDeselect = () => {
        setSelection({
            selected: false,
            content: <></>
        })
        setTimeout(() => {
            document.querySelector('.-projects').style.pointerEvents = "all"
            document.querySelector('.-projects').style.overflowY = "auto"
        }, 200)
    }

    React.useEffect(() => {
    }, [])



    return (
        <>
            
            {
                !selection.selected 
                &&
                <>
                    <div className="-projects">
                        <div className="-title-separator">{text.projects.designdevelop}</div>
                        <Project handleClick={handleClick} title="Typerate" timestamp="2022/2023" description={text.projects.typerate.description}/>
                        <Project handleClick={handleClick} title="Noteplace" timestamp="2023" description={text.projects.noteplace.description}/>
                        <Project handleClick={handleClick} title="Archess" timestamp="2022/2023" description={text.projects.archess.description}/>
                        <Project handleClick={handleClick} title="MP3 downloader" timestamp="2023" description={text.projects.mp3.description}/>
                        <Project handleClick={handleClick} title="Vexler" timestamp="2022/2023" description={text.projects.vexler.description}/>
                        <Project handleClick={handleClick} title="TODO" timestamp="2022" description={text.projects.todo.description}/>
                        <Project handleClick={handleClick} title="CGoL" timestamp="2022" description={text.projects.cgol.description}/>
                        <Project handleClick={handleClick} title="Sort Visualizer" timestamp="2022" description={text.projects.sorter.description}/>
                        <Project handleClick={handleClick} title="Pong!" timestamp="2022" description={text.projects.pong.description}/>
                        <div className="-title-separator" style={{marginTop: '1rem'}}>{text.projects.design}</div>
                        <Project handleClick={handleClick} title='Elegant' timestamp="2023" description={text.projects.elegant.description}/>
                        {
                            isMobile
                            &&
                            <div id="filler"></div>
                        }
                    </div>
                </>
            }
            
            {
                selection.selected 
                &&
                <div className="-project-content-wrapper">
                    {
                        selection.content
                    }
                </div> 
            }
        </>
    )
}

