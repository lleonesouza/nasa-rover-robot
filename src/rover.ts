
export interface RoverPosition { x: number, y: number, direction: string }
// Directions
// N = North
// W = West
// S = South
// E = East

// Signal: L or R
// Receive actual direction position and return new direction position
export const changeDirection = (
    actualDirection: string,
    movement: "L" | "R"
) => {
    if (movement === "L") {
        if (actualDirection === "N") {
            return "W"
        }
        if (actualDirection === "W") {
            return "S"
        }
        if (actualDirection === "S") {
            return "E"
        }
        if (actualDirection === "E") {
            return "N"
        }

        throw new Error("Rover direction Position Not Valid");
    }

    if (movement === "R") {
        if (actualDirection === "N") {
            return "E"
        }
        if (actualDirection === "E") {
            return "S"
        }
        if (actualDirection === "S") {
            return "W"
        }
        if (actualDirection === "W") {
            return "N"
        }

        throw new Error("Rover direction Position Not Valid");
    }

    throw new Error("The Rover can only turn right (R) or L (left)");
}

// Signal: M
// Receive actual rover position and return new rover position
export const moveForward = (actualDirection: RoverPosition): RoverPosition => {
    if (actualDirection.direction === "N") {
        return {
            ...actualDirection,
            y: actualDirection.y + 1
        }
    }


    if (actualDirection.direction === "W") {
        return {
            ...actualDirection,
            x: actualDirection.x - 1
        }
    }

    if (actualDirection.direction === "E") {
        return {
            ...actualDirection,
            x: actualDirection.x + 1
        }
    }

    if (actualDirection.direction === "S") {
        return {
            ...actualDirection,
            y: actualDirection.y - 1
        }
    }

    throw new Error("Rover Direction Position Not Valid");
}


// Switch Signal Handler
export const handleSignal = (signal: string, actualRoverPosition: RoverPosition): RoverPosition => {
    if (signal === "L") {
        return {
            ...actualRoverPosition,
            direction: changeDirection(actualRoverPosition.direction, signal)
        }
    }

    if (signal === "R") {
        return {
            ...actualRoverPosition,
            direction: changeDirection(actualRoverPosition.direction, signal)
        }
    }

    if (signal === "M") {
        return moveForward(actualRoverPosition)
    }

    throw new Error("Not a Valid Signal");
}


export default class Rover {
    title: string
    cordinateX: number
    cordinateY: number
    direction: string


    constructor(title: string, cordinateX: number, cordinateY: number, direction: string) {
        this.cordinateX = cordinateX
        this.cordinateY = cordinateY
        this.direction = direction
        this.title = title
    }

    updateRover(x: number, y: number, direction: string) {
        this.cordinateX = x
        this.cordinateY = y
        this.direction = direction
    }

    computeSignal(signal: string) {
        return handleSignal(signal, {
            direction: this.direction,
            x: this.cordinateX,
            y: this.cordinateY
        })
    }
    
    print(){
        console.log(`${this.title} ~> Cordinate X: ${this.cordinateX} Cordinate Y: ${this.cordinateY} Direction: ${this.direction}`)
    }
}
