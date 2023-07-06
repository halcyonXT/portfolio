import React from 'react'
import { Intro } from './components/Intro'
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './components/Home'
import { Projects } from './components/Projects'
import Svg from './assets/images/Svg'
import { LangContext } from './utilities/languageContext'
import { About } from './components/About'
import { PhoneContext } from './utilities/phoneContext'
import { Contact } from './components/Contact'

const colors = {
    light: "#d3bf0f",
    dark: "#101820"
}

/**
 * Any evaluation that returns true will render a selected type of text (color-complement background with color-main font)
 * 
 * @param {boolean} isSelected 
 * @returns 
 */
const getStyles = (isSelected) => {
    if (isSelected) {
        return {
            backgroundPosition: '0%',
            color: 'var(--color-main)',
            pointerEvents: 'none',
            cursor: 'pointer'
        }
    } else {
        return {
            display: 'block'
        }
    }
}

let timer = null

function App() {
    const {language, changeLanguage, text} = React.useContext(LangContext)
    const {isMobile} = React.useContext(PhoneContext)
    const [optionsActive, setOptionsActive] = React.useState(false)

    const delayedRouteChange = (route) => {
        if (timer) return
        let right = document.querySelector('.-main-right')
        try {
            right.style.pointerEvents = "none"
        } catch (ex) {}
        right.animate([
            {opacity: 1},
            {opacity: 0}
        ], {
            delay: 0,
            fill: 'forwards',
            duration: 400
        })
        if (route === "/") {
            setActivePanel('home')
        } else {
            setActivePanel(route.slice(1))
        }
        timer = setTimeout(() => {
            navigate(route)
            right.animate([
                {opacity: 0},
                {opacity: 1}
            ], {
                delay: 0,
                fill: 'forwards',
                duration: 400
            })
            right.style.pointerEvents = "all"
            timer = null
        }, 400)
    }

    const navigate = useNavigate()
    const location = useLocation()

    const [loading, setLoading] = React.useState({
        stillLoading: true,
        animationFinished: false
    })

    const [activePanel, setActivePanel] = React.useState((() => {
        if (location.pathname === "/") {
            return "home"
        } else return location.pathname.slice(1)
    })())

    const [colorScheme, setColorScheme] = React.useState((() => {
        if (localStorage.getItem("background") === null) {
            const result = window.matchMedia('(prefers-color-scheme: dark)');
            if (result.matches) {
                return 'dark'
            } else {
                return 'light'
            }
        } else {
            return localStorage.getItem("background")
        }
    })())

    const loadBackground = (type) => {
        document.querySelector("#background").innerHTML = ``
        if (!isMobile) {
            VANTA.TOPOLOGY({
                el: "#background",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: type === "light" ? 0xd3bf0f : 0x101820,
                color: type === "light" ? 0x101820 : 0xd3bf0f
            })
        }
        document.querySelector(".-main").style.backgroundColor = type === "light" ? "#d3bf0f" : "#101820"
        //document.querySelector(".-main").style.backgroundColor = type === "light" ? "#d3bf0fDA" : "#101820DA"
    }

    React.useEffect(() => {
        changeScheme(colorScheme)
        setTimeout(() => {
            setLoading({stillLoading: false, animationFinished: false})
            loadBackground(colorScheme)
        }, 3500)
        document.querySelector("#background").animate([
            {opacity: 0},
            {opacity: 1}
        ], {
            delay: 5250,
            fill: 'forwards',
            duration: 1000
        })
        document.querySelector(".-main").animate([
            {opacity: 0},
            {opacity: 1}
        ], {
            delay: 4500,
            fill: 'forwards',
            duration: 750
        })
    }, [])


    const changeScheme = (type) => {
        localStorage.setItem('background', type)
        if (type !== colorScheme) { return window.location.reload() }
        if (type === "dark") {
            setColorScheme('dark')
            document.documentElement.style.setProperty('--color-main', colors.dark);
            document.documentElement.style.setProperty('--color-complement', colors.light);
        } else {
            setColorScheme('light')
            document.documentElement.style.setProperty('--color-main', colors.light);
            document.documentElement.style.setProperty('--color-complement', colors.dark);
        }
        if (type !== colorScheme) {
            loadBackground(type)
        }
    }

    const delayedOptions = () => {
        let targets;
        switch(!optionsActive) {
            case false:
                targets = document.querySelectorAll('.-option')
                for (let el of targets) {
                    el.animate([
                        {marginBottom: '0', opacity: 1},
                        {marginBottom: '-105%', opacity: 0}
                    ], {
                        duration: 500,
                        easing: 'ease-in',
                        delay: 0,
                        fill: 'forwards'
                    })
                }
                break
            case true:
                targets = document.querySelectorAll('.-option')
                for (let el of targets) {
                    el.animate([
                        {marginBottom: '-105%', opacity: 0},
                        {marginBottom: '0', opacity: 1}
                    ], {
                        duration: 500,
                        easing: 'ease-out',
                        delay: 0,
                        fill: 'forwards'
                    })
                }
                break
        }
        setOptionsActive(prev => !prev)
    }


    return (
        <>
            <div className="-marquee-top -marquee"></div>
            <div className="-marquee-bottom -marquee"></div>
            <div className="-main" style={{pointerEvents: !loading.animationFinished && "none"}}>
                <div className='-main-left'>
                    <div className='-main-logo'>
                        HALCYON.
                    </div>
                    <div className='-main-controls-wrapper'>
                            <div className='-main-controls'>
                                <button 
                                    style={getStyles(activePanel === 'home')}
                                    onClick={() => delayedRouteChange('/')}
                                >{text.menu.home}</button>
                                <button 
                                    style={getStyles(activePanel === 'projects')}
                                    onClick={() => delayedRouteChange('/projects')}
                                >{text.menu.projects}</button>
                                <button 
                                    style={getStyles(activePanel === 'about')}
                                    onClick={() => delayedRouteChange('/about')}
                                >{text.menu.about}</button>
                                <button 
                                    style={getStyles(activePanel === 'contact')}
                                    onClick={() => delayedRouteChange('/contact')}
                                >{text.menu.contact}</button>
                            </div>
                            <div>
                                <Svg target="options" height="2rem" click={delayedOptions}/>
                                <div className='-options'>
                                    <div className='-main-controls -option'>
                                        <p className='-over-text'>{text.language}</p>
                                        <button style={getStyles(language === 'en')} onClick={() => changeLanguage('en')}>{text.languages.en}</button>
                                        <button style={getStyles(language === 'sr')} onClick={() => changeLanguage('sr')}>{text.languages.sr}</button>
                                    </div>
                                    <div className='-main-controls -option'>
                                        <p className='-over-text'>{text.theme}</p>
                                        <button style={getStyles(colorScheme === 'dark')} onClick={() => changeScheme('dark')}>{text.themes.dark}</button>
                                        <button style={getStyles(colorScheme === 'light')} onClick={() => changeScheme('light')}>{text.themes.light}</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='-main-right'>
                    <Routes>
                        <Route exact path='/' element={
                            <Home start={loading.animationFinished}/>
                        }/>
                        <Route path='/projects' element= {<Projects />}/>
                        <Route path='/about' element={<About />}/>
                        <Route path='/contact' element={<Contact />}/>
                    </Routes>
                </div>
            </div>
            <div id='background'></div>
            {
                !loading.animationFinished
                &&
                <Intro loader={{loading, setLoading}}/>

            }
        </>
    )
}

export default App
