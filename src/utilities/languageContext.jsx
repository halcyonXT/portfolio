import React from "react"

const LangContext = React.createContext()

let text = {
    menu: {
        home: "Home",
        projects: "Projects",
        achievements: "Achievements",
        about: "About",
        contact: "Contact"
    },
    language: 'Language',
    theme: 'Theme',
    themes: {
        dark: "Dark",
        light: "Light"
    },
    languages: {
        en: "English",
        sr: "Serbian"
    },
    contact: {
        can: "What I can do",
        canList: [
            "Mostly anything front-end related",
            "Adapt to new front-end technologies",
            "Build basic back-end functionality"
        ],
        cant: "What I cannot do",
        cantList: [
            "Build WordPress sites",
            "Build complex APIs",
            "Build complex server-side functionality"
        ]
    },
    about: {
        aboutme: "About me",
        me: ["My name is Aleksandar Milošević and I am a front-end developer based in Serbia, with a passion for all things creative.", 
        "With expertise in React, I thrive on crafting beautiful and intuitive user interfaces.", 
        "I am dedicated to creating engaging web experiences that seamlessly blend aesthetics and functionality.",
        "Constantly seeking new ways to innovate and grow, I am driven by my love for technology and the limitless possibilities it offers in the realm of design and development."
        ],
        achievements: "Programming Achievements",
        achievementsList: [
            "1st place - Serbian National Informatics Competition in 2023",
            "Scrimba Front-end Career Path Graduate"
        ],
        aspirations: "Aspirations",
        aspirationsList: [
            "Master front-end technologies",
            "Master UI/UX design",
            "Strenghten my back-end knowledge",
            "Delve into the world of AI",
            "Learn Rust"
        ]
    },
    projects: {
        about: "About",
        tech: "Technologies used",
        designdevelop: "SOLO DESIGN & DEVELOP",
        design: "SOLO DESIGN",
        typerate: {
            description: "A MERN stack typing speed test",
            about: "Typerate is a typing speed test that lets users track their progress and gives them achievements for training. It is very customizable, therefore gives a better user experience. This is my first full-stack project and it won the national informatics competition."
        },
        noteplace: {
            description: "Modern note-taking app and text-editor",
            about: "Developed in pure Javascript as an experiment, Noteplace is a note-taking app that includes text-editing features and a sleek, modern design. Not all envisioned features are fully implemented."
        },
        archess: {
            description: "React chess app",
            about: "Archess is a chess application developed in React. With its sleek and intuitive interface, this app is tailored to meet the needs of both casual players and seasoned chess enthusiasts. It was designed to be simple and get you into the game quickly with no setbacks."
        },
        mp3: {
            description: "App for downloading YouTube files",
            about: "MP3 Downloader is a simple application for downloading .mp3 files by simply copying the link. It has a 'bulk download' option that allows users to seamlessly download a large quantity of files."
        },
        vexler: {
            description: "E-commerce app",
            about: "Vexler is a WIP e-commerce web application. It's meant to be an e-commerce app that provides a seamless shopping experience without all the overwhelming distractions of a regular online shop, while still being tailored to the user."
        },
        todo: {
            description: "React TODO app",
            about: "TODO is a simple task listing app made with React. As one of my first React projects, it's here to demonstrate my journey through React."
        },
        cgol: {
            description: "Remake of Conway's Game of Life",
            about: "Conway's Game of Life is a turing-complete cellular automation that is played on a 2D square grid. This is one of my older projects, a remake of the classic that provides a very easy-to-use and understand interface."
        },
        sorter: {
            description: "Sorting visualizer",
            about: "One of my very early projects, Sorting Visualizer is, as it says, a simple sorting visualizer. The app provides necessary options and information for the user, which includes special colors for the element that is being compared currently, and for elements that get swapped. A rework of the visualizer is being worked on."
        },
        pong: {
            description: "Pong game app",
            about: "Pong! is my second ever Javascript project. It marks the part of my journey when I truly discovered my love for programming, and for that reason it's very dear to me. A feature rich yet simple pong game accessible to anyone who wants a quick game."
        },
        elegant: {
            description: "Theme for an online server-listing tool",
            about: "This is a requested theme for a site that lists running starblast.io servers. Starblast is a web game made by Neuronality based on three.js. To access this theme, enter the site, choose options in the upper right corner, and select 'Elegant by Halcyon'"
        }
    }
}

function LangContextProvider(props) {
    const [language, setLanguage] = React.useState('en')

    const changeLanguage = (target) => {
        if (target === language) {return}
        switch (target) {
            case "en":
                text = {
                    menu: {
                        home: "Home",
                        projects: "Projects",
                        achievements: "Achievements",
                        about: "About",
                        contact: "Contact"
                    },
                    themes: {
                        dark: "Dark",
                        light: "Light"
                    },
                    languages: {
                        en: "English",
                        sr: "Serbian"
                    },
                    contact: {
                        can: "What I can do",
                        canList: [
                            "Mostly anything front-end related",
                            "Adapt to new front-end technologies",
                            "Build basic back-end functionality"
                        ],
                        cant: "What I cannot do",
                        cantList: [
                            "Build WordPress sites",
                            "Build complex APIs",
                            "Build complex server-side functionality"
                        ]
                    },
                    language: 'Language',
                    theme: 'Theme',
                    about: {
                        aboutme: "About me",
                        me: ["My name is Aleksandar Milošević and I am a front-end developer based in Serbia, with a passion for all things creative.", 
                        "With expertise in React, I thrive on crafting beautiful and intuitive user interfaces.", 
                        "I am dedicated to creating engaging web experiences that seamlessly blend aesthetics and functionality.",
                        "Constantly seeking new ways to innovate and grow, I am driven by my love for technology and the limitless possibilities it offers in the realm of design and development."
                        ],
                        achievements: "Programming Achievements",
                        achievementsList: [
                            "1st place - Serbian National Informatics Competition in 2023",
                            "Scrimba Front-end Career Path Graduate"
                        ],
                        aspirations: "Aspirations",
                        aspirationsList: [
                            "Master front-end technologies",
                            "Master UI/UX design",
                            "Strenghten my back-end knowledge",
                            "Delve into the world of AI",
                            "Learn Rust"
                        ]
                    },
                    projects: {
                        about: "About",
                        tech: "Technologies used",
                        designdevelop: "SOLO DESIGN & DEVELOP",
                        design: "SOLO DESIGN",
                        typerate: {
                            description: "A MERN stack typing speed test",
                            about: "Typerate is a typing speed test that lets users track their progress and gives them achievements for training. It is very customizable, therefore gives a better user experience. This is my first full-stack project and it won the national informatics competition."
                        },
                        noteplace: {
                            description: "Modern note-taking app and text-editor",
                            about: "Developed in pure Javascript as an experiment, Noteplace is a note-taking app that includes text-editing features and a sleek, modern design. Not all envisioned features are fully implemented."
                        },
                        archess: {
                            description: "React chess app",
                            about: "Archess is a chess application developed in React. With its sleek and intuitive interface, this app is tailored to meet the needs of both casual players and seasoned chess enthusiasts. It was designed to be simple and get you into the game quickly with no setbacks."
                        },
                        mp3: {
                            description: "App for downloading YouTube files",
                            about: "MP3 Downloader is a simple application for downloading .mp3 files by simply copying the link. It has a 'bulk download' option that allows users to seamlessly download a large quantity of files."
                        },
                        vexler: {
                            description: "E-commerce app",
                            about: "Vexler is a WIP e-commerce web application. It's meant to be an e-commerce app that provides a seamless shopping experience without all the overwhelming distractions of a regular online shop, while still being tailored to the user."
                        },
                        todo: {
                            description: "React TODO app",
                            about: "TODO is a simple task listing app made with React. As one of my first React projects, it's here to demonstrate my journey through React."
                        },
                        cgol: {
                            description: "Remake of Conway's Game of Life",
                            about: "Conway's Game of Life is a turing-complete cellular automation that is played on a 2D square grid. This is one of my older projects, a remake of the classic that provides a very easy-to-use and understand interface."
                        },
                        sorter: {
                            description: "Sorting visualizer",
                            about: "One of my very early projects, Sorting Visualizer is, as it says, a simple sorting visualizer. The app provides necessary options and information for the user, which includes special colors for the element that is being compared currently, and for elements that get swapped. A rework of the visualizer is being worked on."
                        },
                        pong: {
                            description: "Pong game app",
                            about: "Pong! is my second ever Javascript project. It marks the part of my journey when I truly discovered my love for programming, and for that reason it's very dear to me. A feature rich yet simple pong game accessible to anyone who wants a quick game."
                        },
                        elegant: {
                            description: "Theme for an online server-listing tool",
                            about: "This is a requested theme for a site that lists running starblast.io servers. Starblast is a web game made by Neuronality based on three.js. To access this theme, enter the site, choose options in the upper right corner, and select 'Elegant by Halcyon'"
                        }
                    }
                }
                break
            case "sr":
                text = {
                    menu: {
                        home: "Početna stranica",
                        projects: "Projekti",
                        achievements: "Dostignuća",
                        about: "Opšte",
                        contact: "Kontakt"
                    },
                    themes: {
                        dark: "Tamna",
                        light: "Svetla"
                    },
                    languages: {
                        en: "Engleski",
                        sr: "Srpski"
                    },
                    language: 'Jezik',
                    theme: 'Tema',
                    contact: {
                        can: "Šta mogu da uradim",
                        canList: [
                            "Većinu stvari vezanih za front-end",
                            "Prilagoditi se novim front-end tehnologijama",
                            "Izgraditi osnovnu funkcionalnost back-end-a"
                        ],
                        cant: "Šta ne mogu da uradim",
                        cantList: [
                            "Izgradnja WordPress sajtova",
                            "Izgradnja kompleksnih API-eva",
                            "Izgradnja kompleksne funkcionalnosti na serveru"
                        ]
                    },
                    about: {
                        aboutme: "O meni",
                        me: ["Zovem se Aleksandar Milošević i ja sam front-end developer sa sedištem u Boru, Srbija i sa strašću prema svemu kreativnom.", 
                        "Sa ekspertizom u React-u, uživam u kreiranju lepog i intuitivnog korisničkog interfejsa.", 
                        "Posvećen sam stvaranju angažujućih web iskustava koja besprekorno spajaju estetiku i funkcionalnost.",
                        "Konstantno tražim nove načine za inovacije i rast, pokreće me ljubav prema tehnologiji i neograničene mogućnosti koje nudi u oblasti dizajna i razvoja."
                        ],
                        achievements: "Programerska dostignuća",
                        achievementsList: [
                            "1. mesto - Državno takmičenje iz informatike 2023",
                            "Završen Scrimba Front-end karijerni put"
                        ],
                        aspirations: "ASPIRACIJE",
                        aspirationsList: [
                            "Majstor front-end tehnologija",
                            "Majstor dizajna korisničkog interfejsa (UI/UX)",
                            "Učvrstiti svoje znanje o back-end tehnologijama",
                            "Istražiti svet veštačke inteligencije (AI)",
                            "Naučiti Rust programski jezik"
                        ]
                    },
                    projects: {
                        designdevelop: "SOLO DIZAJN & RAZVOJ",
                        design: "SOLO DIZAJN",
                        about: "Opis",
                        tech: "Iskorišćene tehnologije",
                        typerate: {
                            description: "MERN stack test brzine kucanja",
                            about: "Typerate je test brzine kucanja koji omogućava korisnicima praćenje njihovog napretka i nagrađuje ih za trening. On je vrlo prilagodljiv, što pruža bolje korisničko iskustvo. Ovo je moj prvi full-stack projekat koji je osvojio državno takmičenje iz informatike."
                        },
                        noteplace: {
                            description: "Moderna aplikacija za beleške i uređivanje teksta",
                            about: "Razvijena u čistom Javascript-u kao eksperiment, Noteplace je aplikacija za beleške koja uključuje mogućnosti uređivanja teksta i elegantan, moderni dizajn. Nisu sve planirane funkcionalnosti u potpunosti implementirane."
                        },
                        archess: {
                            description: "React aplikacija za šah",
                            about: "Archess je aplikacija za šah razvijena u React-u. Sa svojim elegantnim i intuitivnim interfejsom, ova aplikacija je prilagođena kako za casual igrače, tako i za iskusne zaljubljenike u šah. Dizajnirana je da bude jednostavna i da vas brzo uvede u igru bez ikakvih smetnji."
                        },
                        mp3: {
                            description: "Aplikacija za preuzimanje YouTube fajlova",
                            about: "MP3 downloader je jednostavna aplikacija za preuzimanje .mp3 fajlova samo kopiranjem linka. Ima 'bulk download' opciju koja omogućuje korisniku nesmetano preuzimanje velike količine fajlova."
                        },
                        vexler: {
                            description: "E-trgovinska aplikacija",
                            about: "Vexler je trenutno u razvoju kao e-trgovinska web aplikacija. Ova aplikacija ima za cilj da pruži besprekorno iskustvo kupovine bez preopterećujućih distrakcija uobičajenih online prodavnica, dok je istovremeno prilagođena korisniku."
                        },
                        todo: {
                            description: "React aplikacija za zadatke (TODO)",
                            about: "TODO je jednostavna aplikacija za listanje zadataka napravljena sa React-om. Kao jedan od mojih prvih projekata u React-u, ova aplikacija je tu da demonstrira moj put kroz React."
                        },
                        cgol: {
                            description: "Remake Conwayeve Igre života",
                            about: "Conwayeva Igra života je Turing-kompletna ćelijska automatizacija koja se igra na 2D kvadratnoj mreži. Ovo je jedan od mojih starijih projekata, remake klasične igre koja pruža veoma jednostavan i razumljiv interfejs."
                        },
                        sorter: {
                            description: "Vizualizacija sortiranja",
                            about: "Jedan od mojih veoma ranijih projekata, Vizualizacija sortiranja je, kao što ime kaže, jednostavna vizualizacija sortiranja. Aplikacija pruža korisniku potrebne opcije i informacije, uključujući posebne boje za element koji se trenutno upoređuje i za elemente koji se zamjenjuju. Trenutno se radi na preradi vizualizatora."
                        },
                        pong: {
                            description: "Aplikacija Pong igre",
                            about: "Pong! je moj drugi JavaScript projekat ikada. On označava deo mog puta kada sam zaista otkrio svoju ljubav prema programiranju i iz tog razloga mi je veoma drag. Jednostavna Pong igra dostupna svima koji žele brzo da se zabave."
                        },
                        elegant: {
                            description: "Tema za alatku listanja dostupnih servera igre",
                            about: "Ovo je tražena tema za sajt koji prikazuje listu aktivnih servera za igru Starblast.io. Starblast je web igra koju je kreirala kompanija Neuronality koristeći three.js. Da biste pristupili ovoj temi, posetite sajt, izaberite opcije u gornjem desnom uglu i odaberite 'Elegant by Halcyon'."
                        }
                    }
                }
                break
        }
        setLanguage(target)
    }

    return (
        <LangContext.Provider value={{language, changeLanguage, text}}>
            {props.children}
        </LangContext.Provider>
    )
}

export {LangContextProvider, LangContext}
