import Mars from "./mars"
import Rover from "./rover"
import { parseFile, parseDataToStr, writeData } from "./parser"


const main = () => {
    // Read And Parse File
    const { field, r1, r2 } = parseFile()

    // Create Mars
    const mars = new Mars(field.x + 1, field.y + 1)

    // Create Rovers
    const rover1 = new Rover("Rover 1", r1.position.x, r1.position.y, r1.position.direction)
    const rover2 = new Rover("Rover 2", r2.position.x, r2.position.y, r2.position.direction)

    console.log("Start at:")
    rover1.print()
    rover2.print()

    // Add Rovers to Mars
    mars.newRover(rover1)
    mars.newRover(rover2)

    // Move Rover 1
    r1.path.map((signal) => {
        mars.moveRover(rover1, signal)
    })

    // Move Rover 2
    r2.path.map((signal) => {
        mars.moveRover(rover2, signal)
    })

    // Create Output String
    const outputStr = `${parseDataToStr({
        direction: rover1.direction,
        x: rover1.cordinateX,
        y: rover1.cordinateY
    })}\n${parseDataToStr({
        direction: rover2.direction,
        x: rover2.cordinateX,
        y: rover2.cordinateY
    })}`

    // Write String in output.txt
    writeData(outputStr)

    // Print Final Rover Positions
    console.log("\nDone at:")
    rover1.print()
    rover2.print()
}

main()
