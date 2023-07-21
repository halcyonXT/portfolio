import React from "react";
import { LangContext } from "../utilities/languageContext";

export function Contact() {
    const {text} = React.useContext(LangContext)
    return (
        <div className="-about">
            <div className="-title-separator -popout" style={{marginTop: '0rem'}}>{text.contact.can}</div>
            <div className="-about-card -popout">{text.contact.canList[0]}</div>
            <div className="-about-card -popout">{text.contact.canList[1]}</div>
            <div className="-about-card -popout">{text.contact.canList[2]}</div>
            <div className="-title-separator -popout" style={{marginTop: '1.5rem'}}>{text.contact.cant}</div>
            <div className="-about-card -popout">{text.contact.cantList[0]}</div>
            <div className="-title-separator -popout" style={{marginTop: '1.5rem'}}>Email</div>
            <div className="-about-card -popout">halcyonxt1987@gmail.com</div>
        </div>
    )
}