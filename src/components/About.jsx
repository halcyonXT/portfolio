import React from "react"
import { LangContext } from "../utilities/languageContext"
import { PhoneContext } from "../utilities/phoneContext"

export function About() {
    const {text} = React.useContext(LangContext)
    const {isMobile} = React.useContext(PhoneContext)

    return (
        <div className="-about">
            <div className="-title-separator -popout">{text.about.aboutme}</div>
            <p className="-project-content-about -popout" style={{maxWidth: '80%', whiteSpace: 'pre-wrap', minHeight: 'max-content'}}>
            {text.about.me[0]}<br/><br/>
            {text.about.me[1]}<br/><br/>
            {text.about.me[2]}<br/><br/>
            {text.about.me[3]}
            </p>
            <div className="-title-separator -popout" style={{marginTop: '1.5rem'}}>{text.about.achievements}</div>
            <div className="-about-card -popout">{text.about.achievementsList[0]}</div>
            <div className="-about-card -popout">{text.about.achievementsList[1]}</div>
            <div className="-title-separator -popout" style={{marginTop: '1.5rem'}}>{text.about.aspirations}</div>
            <div className="-about-card -popout">{text.about.aspirationsList[0]}</div>
            <div className="-about-card -popout">{text.about.aspirationsList[1]}</div>
            <div className="-about-card -popout">{text.about.aspirationsList[2]}</div>
            <div className="-about-card -popout">{text.about.aspirationsList[3]}</div>
            <div className="-about-card -popout">{text.about.aspirationsList[4]}</div>
            {
                isMobile
                &&
                <div id="filler"></div>
            }
        </div>
    )
}