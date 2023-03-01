import Rover from "./rover"

export const createField = (axisX: number, axisY: number) => {
    var field: string[][] = new Array

    for (let indexAxisX = 0; indexAxisX < axisX; indexAxisX++) {
        field[indexAxisX] = []
        for (let indexAxisY = 0; indexAxisY < axisY; indexAxisY++) {
            field[indexAxisX][indexAxisY] = " "
        }
    }
    return field
}

class Mars {
    field: string[][]
    axisX: number
    axisY: number
    constructor(axisX: number, axisY: number) {
        this.axisX = axisX
        this.axisY = axisY
        this.field = createField(axisX, axisY)
    }


    private removeRover(title: string) {
        this.field.map((field, i) => {
            const index = field.indexOf(title)
            if (index != -1) {
                this.field[i][index] = " "
            }
        })
    }

    private verifyValidPosition(x: number, y: number) {
        if (x > this.axisX || y > this.axisY) {
            throw new Error("Not a Valid Position")
        }
    }

    private verifyColision(x: number, y: number) {
        if (this.field[x][y] !== " ") {
            throw new Error("Colision Between Rovers!!")
        }
    }

    newRover(rover: Rover) {
        this.verifyValidPosition(rover.cordinateX, rover.cordinateY)
        this.verifyColision(rover.cordinateX, rover.cordinateY)
        this.field[rover.cordinateX][rover.cordinateY] = rover.title
    }

    print() {
        console.table(this.field)
    }

    moveRover(rover: Rover, signal: string) {
        const newPosition = rover.computeSignal(signal)
        this.verifyValidPosition(newPosition.x, newPosition.y)
        if (signal === "M") {
            this.verifyColision(newPosition.x, newPosition.y)
        }
        rover.updateRover(newPosition.x, newPosition.y, newPosition.direction)
        this.removeRover(rover.title)
        this.field[rover.cordinateX][rover.cordinateY] = rover.title
    }
}


export default Mars
