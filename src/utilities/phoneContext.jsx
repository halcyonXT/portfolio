import React from "react"
import { useMediaQuery } from 'react-responsive';


const PhoneContext = React.createContext()

let isMobile

function PhoneContextProvider(props) {
    isMobile = useMediaQuery({ query: `(max-width: 834px)` }); //760


    return (
        <PhoneContext.Provider value={{isMobile}}>
            {props.children}
        </PhoneContext.Provider>
    )
}

export {PhoneContextProvider, PhoneContext}