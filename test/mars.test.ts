import { expect, test, describe } from '@jest/globals';
import Mars, {createField} from "../src/mars"
import Rover from "../src/rover"

describe("Mars", () => {
    const roverMock = {
        title: "A",
        x: 2,
        y: 2
    }
    const mars = new Mars(5,5)
    const rover = new Rover(roverMock.title, roverMock.x, roverMock.y, "N")

    
    const field = createField(5,5)

    test("Mars plateau is generated correctly", () => {
        expect(mars.field).toEqual(field)
    });
    
    test("Mars.newRover() add a new Rover to the plateau", () => {
        mars.newRover(rover)
        expect(mars.field[2][2]).toEqual(roverMock.title)
    })
    
    test("Mars.move() move the Rover correctly in the plateau", () => {
        mars.moveRover(rover, "M")
        expect(mars.field[2][3]).toEqual(roverMock.title)
        
    });

    test("Mars.move() move the Rover correctly in the plateau", () => {
        mars.moveRover(rover, "R")
        expect(rover.direction).toEqual("E")
        
    });
})

