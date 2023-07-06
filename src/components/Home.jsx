import React from "react";

let SIZE = 20
let boundSquare = (() => {
    let pusher = []
    const fetchPos = (x, y) => (Math.abs(x) + (Math.abs(y) * SIZE))
    for (let i = 0; i < SIZE/2; i++) {
        for (let j = 0; j < SIZE/2; j++) {
            pusher.push(fetchPos(i, j))
        }
    }
    return pusher
})()
let activated = []

const gameLogic = (isStarted) => {
    if (!isStarted) return
    let HTML = document.querySelector('.-home-game')
    let type = Math.random() > 0.55 ? "destroy" : "create"
    let newpos = [uniqueCell(type)]
    newpos.push(...fetchMirroredCells(newpos[0]))
    activated = [...activated, ...newpos]
    for (let cell of newpos) {
        try {
            HTML.children[cell].style.backgroundColor = type === "destroy" ? "transparent" : 'var(--color-complement)'
        } catch (err) {
            console.log(err)
        }
    }
}

const fetchPos = (x, y) => (Math.abs(x) + (Math.abs(y) * SIZE))

const fetchMirroredCells = (index) => {
    const position = {
        x: index % SIZE,
        y: ~~(index / SIZE)
    }
    return [fetchPos(SIZE - position.x - 1, position.y),fetchPos(position.x, SIZE - position.y - 1),fetchPos(SIZE - position.x - 1, SIZE - position.y - 1)]
}

const uniqueCell = (type) => {
    let pos = boundSquare[~~(Math.random() * boundSquare.length)]
    let LOOP_LIMITER = 40
    switch (type) {
        case "destroy":
            while (!activated.includes(pos)) {
                pos = boundSquare[~~(Math.random() * boundSquare.length)]
                LOOP_LIMITER--
                if (LOOP_LIMITER <= 0) {
                    break
                }
            }
            break
        case "create":
            while (activated.includes(pos)) {
                pos = boundSquare[~~(Math.random() * boundSquare.length)]
                LOOP_LIMITER--
                if (LOOP_LIMITER <= 0) {
                    break
                }
            }
            break
    }
    return pos
}


export default React.memo(function Home(props) {
    const startRef = React.useRef(props.start)
    startRef.current = props.start

    React.useEffect(() => {
        const step = setInterval(() => gameLogic(startRef.current), 150)

        return () => {
            clearInterval(step)
        }
    }, [])

    const gridElements = React.useMemo(() => new Array(Math.pow(SIZE, 2)).fill("").map(() => <div className="-home-game-cell"></div>), []);
    
    return (
        <div className="-home">
            <div className="-home-game">
                {
                    gridElements
                }
            </div>
        </div>
    )
})