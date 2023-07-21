import React from "react"
import { Project } from "../components/Project"
import Svg from '../assets/images/Svg'
import LazyLoad from "react-lazy-load"
import { LangContext } from "./languageContext"
import { PhoneContext } from "./phoneContext"


export const fetchContent = (id, description, handleDeselect, timestamp) => {
    let content, page, github, doc;

    switch (id) {
        case "Typerate":
            content =   <ProjectContent 
                images={["https://i.ibb.co/hsPPcgv/t1.png","https://i.ibb.co/Twm8mMz/t2.png","https://i.ibb.co/82JMj5S/t3.png","https://i.ibb.co/qDRXnjP/t4.png","https://i.ibb.co/vXwRF5N/t5.png","https://i.ibb.co/BtM9GjM/t6.png","https://i.ibb.co/xjvvSMv/t7.png"]}
                technologies={['html', 'javascript', 'css', 'mongodb', 'react', 'node', 'express', 'mongodb', 'react-router', 'chartjs']}
                about="typerate"
            />
            github=["https://github.com/halcyonXT/typerate", "https://github.com/halcyonXT/typerate-backend"]
            doc="https://docdro.id/50Yq5i9"
            break
        case "Noteplace":
            content =   <ProjectContent 
                images={["https://i.ibb.co/nbPL2dP/noteplace-edit.png", "https://i.ibb.co/8b7NhZ9/noteplace-preview.png"]}
                technologies={['html', 'javascript', 'css', 'vite']}
                about="noteplace"
            />
            page="https://halcyonxt.github.io/noteplace/"
            github="https://github.com/halcyonXT/noteplace"
            break
        case "MP3 downloader":
            content =   <ProjectContent 
                images={["https://i.ibb.co/vZX7Rvd/mp31.png","https://i.ibb.co/2KTvcNp/mp32.png"]}
                technologies={['html', 'javascript', 'css', 'react', 'node', 'express']}
                about="mp3"
            />
            github="https://github.com/halcyonXT/yt-to-mp3";
            break
        case "Archess":
            content =   <ProjectContent 
                images={["https://i.ibb.co/g3XD02V/ar1.png","https://i.ibb.co/MCJ21Jr/ar2.png","https://i.ibb.co/9bj02b8/ar3.png","https://i.ibb.co/pwYZnbZ/ar4.png","https://i.ibb.co/QKNCpbk/ar5.png"]}
                technologies={['html', 'javascript', 'css', 'react', 'vite']}
                about="archess"
            />
            page="https://halcyonxt.github.io/archess/"
            github="https://github.com/halcyonXT/archess"
            break
        case "TODO":
            content =   <ProjectContent 
                images={["https://i.ibb.co/23TCn8L/todo.png"]}
                technologies={['html', 'javascript', 'css', 'react']}
                about="todo"
            />
            github="https://github.com/halcyonXT/todo-react"
            break
        case "CGoL":
            content =   <ProjectContent 
                images={["https://i.ibb.co/ggnSmMf/cgol.png","https://i.ibb.co/598v8k3/cgol2.png"]}
                technologies={['html', 'javascript', 'css']}
                about="cgol"
            />
            page="https://halcyonxt.github.io/conwaysGameOfLife/"
            github="https://github.com/halcyonXT/conwaysGameOfLife"
            break
        case "Sort Visualizer":
            content =   <ProjectContent 
                images={["https://i.ibb.co/h9cWJMV/Screenshot-1.png","https://i.ibb.co/GsFntfz/Screenshot-2.png","https://i.ibb.co/jJrM7vk/Screenshot-3.png"]}
                technologies={['html', 'javascript', 'css']}
                about="sorter"
            />
            github="https://github.com/halcyonXT/sortVisualizer"
            break
        case "Pong!":
            content =   <ProjectContent 
                images={["https://i.ibb.co/xCJHcbG/pong-1.png","https://i.ibb.co/Hq1BSN4/pong-2.png","https://i.ibb.co/ZV3NQBf/pong-4.png","https://i.ibb.co/8snyHkR/pong-5.png","https://i.ibb.co/Mnh6Vxp/pong-6.png"]}
                technologies={['html', 'javascript', 'css']}
                about="pong"
            />
            page="https://halcyonxt.github.io/"
            github="https://github.com/halcyonXT/halcyonXT.github.io"
            break
        case "Vexler":
            content =   <ProjectContent 
                images={["https://i.ibb.co/w6jFQ7Y/vx.png"]}
                technologies={['html', 'javascript', 'css', 'react', 'node', 'express']}
                about="vexler"
            />
            break
        case "Elegant":
            content =   <ProjectContent 
                images={["https://i.ibb.co/FmwCBHy/sl.png","https://i.ibb.co/17Jkw6y/sla.png","https://i.ibb.co/DMNNh55/sli.png"]}
                technologies={['css']}
                about="elegant"
            />
            page="https://starblast.dankdmitron.dev/"
            break
        default:
            content = 
                <>
                    <span style={{color: 'var(--color-complement)', fontFamily: `"Josefin Sans", sans-serif`, fontSize: '2rem'}}>Project does not exist</span>
                </>
    }

    return (
        <>
        <Project handleClick={() => handleDeselect()} title={id} description={description} timestamp={timestamp} selected={true}/>
        <div className="-project-content-technologies -popout" id="links" style={{height: '5%', marginBottom:'2%'}}>
                {
                    typeof github == "object" 
                    ?
                    github.map(item => <Svg target="github" height="100%" link={item}/>)
                    :
                    github
                    &&
                    <Svg target="github" height="100%" link={github}/>
                }
                {
                    page && <Svg target="website" height="100%" link={page}/>
                }
                {
                    doc && <Svg target="doc" height="100%" link={doc}/>
                }
            </div>
        <div className="-project-content">
            {
                content
            }
        </div>
        </>
    )
}

function generateRandomHexCode() {
    const characters = '0123456789ABCDEF';
    let hexCode = '';
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      hexCode += characters[randomIndex];
    }
  
    return hexCode;
}

function ProjectContent(props) {
    //images, technologies, about, page, github
    const imageLoaded = () => document.querySelector('.-project-content-image-buffer').style.opacity = 0
    const {text} = React.useContext(LangContext)
    const {isMobile} = React.useContext(PhoneContext)

    const getLazyLoad = (img) => {
        let key = generateRandomHexCode();
        return <LazyLoad key={key} height="max-content" onContentVisible={() => imageLoaded()}><img className="-project-content-image-display" src={img}/></LazyLoad>
    }

    const [currentImage, setCurrentImage] = React.useState({
        index: 0,
        content: getLazyLoad(props.images[0])
    })

    const [zoomed, setZoomed] = React.useState(false)

    const getImage = (direction) => {
        if (props.images.length === 1) {return}
        document.querySelector('.-project-content-image-buffer').style.opacity = 1
        switch (direction) {
            case "prev":
                setCurrentImage(prev => {
                    let obj = {}
                    obj.index = prev.index === 0 ? props.images.length - 1 > 0 ? props.images.length - 1 : 0 : prev.index - 1
                    obj.content = getLazyLoad(props.images[obj.index])
                    return obj
                })
                break
            case "next":
                setCurrentImage(prev => {
                    let obj = {}
                    obj.index = prev.index === props.images.length - 1 ? 0 : prev.index + 1
                    obj.content = getLazyLoad(props.images[obj.index])
                    return obj
                })
                break
        }
    }

    React.useEffect(() => {
        const detectArrowKeys = (e) => {
            if (e.keyCode === 37 || e.key === 'ArrowLeft') {
                getImage("prev")
            }
            if (event.keyCode === 39 || event.key === 'ArrowRight') {
                getImage("next")
            }
        }

        document.addEventListener('keydown', detectArrowKeys);

        return (() => {
            document.removeEventListener('keydown', detectArrowKeys);
        })
    }, [])

    const showInfo = (action, name) => {
        let target = document.querySelector(`[data-name="${name}"]`)
        switch (action) {
            case "enter":
                target.style.opacity = '1'
                break
            case "leave":
                target.style.opacity = '0'
                break
        }
    }

    const zoom = () => {
        if (isMobile) {return}
        setZoomed(prev => !prev)//flex
        let target = document.querySelector('.-project-content-image-wrapper')
        if (zoomed) {
            target.style.position = "relative"
            target.style.top = "0"
            target.style.width = "100%"
            document.querySelector('.-project-content-keys-indicator').style.opacity = '1'
        } else {
            let rect = target.getBoundingClientRect()
            document.querySelector('.-project-content-keys-indicator').style.opacity = '0'
            target.style.position = "absolute"
            target.style.top = `calc(50% - (${target.clientHeight}px / 2))`
            target.style.right = rect.right
            target.style.width = "75%"
        }
    }

    return (
        <>
            <div className="-project-content-image-wrapper">
                <div className="-project-content-image-controls" onClick={() => getImage("prev")}>
                    <Svg fill="var(--color-complement)" width="100%" target="arrowLeft" rotate="0"/>
                </div>
                <div className="-project-content-image">
                    <div className="-project-content-image-buffer">
                        <div className="loader">
                            <div className="inner one"></div>
                            <div className="inner two"></div>
                            <div className="inner three"></div>
                        </div>
                    </div>
                    <div className="-project-content-image-zoom -hover-appear" onClick={zoom}>
                        {
                            !zoomed &&
                            <Svg target="zoomin" height="20%"/>
                        }
                    </div>
                    {
                        currentImage.content
                    }
                </div>
                <div className="-project-content-image-controls -project-content-image-controls-right" onClick={() => getImage("next")}>
                    <Svg fill="var(--color-complement)" width="100%" target="arrowLeft" rotate="180"/>
                </div>
                {
                    !isMobile
                    &&
                    <div className="-project-content-keys-indicator">
                        <div style={{display: 'flex', width: '100%', justifyContent:'center'}}>
                            <div className="-project-content-keys-key"></div>
                        </div>
                        <div style={{display: 'flex', width: '100%', justifyContent:'space-around', gap: '2px', marginTop: '2px'}}>
                            <div className="-project-content-keys-key" style={{opacity: 1}}></div>
                            <div className="-project-content-keys-key"></div>
                            <div className="-project-content-keys-key" style={{opacity: 1}}></div>
                        </div>
                    </div>
                }
            </div>
            {
                !zoomed &&
                <>
                    
                    <div className="-bundle-wrapper">
                        <div className="-project-content-text" style={{marginTop:"1%"}}>{text.projects.about}</div>
                        <p className="-project-content-about">
                            {
                                text.projects[props.about].about
                            }
                        </p>
                    </div>
                    <div className="-bundle-wrapper" style={{height: 'max-content'}}>
                        <div className="-project-content-text" style={{marginTop:"1%", marginBottom: '2%'}}>{text.projects.tech}</div>
                        <div className="-project-content-technologies">
                            {
                                props.technologies.map(item => <Svg hover={showInfo} target={item} height="2.5rem"/>)
                            }
                        </div>
                    </div>
                </>
            }
        </>
    )
}