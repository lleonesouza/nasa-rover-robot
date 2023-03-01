import fs from 'fs'
import { RoverPosition } from './rover';

export const parseGridSize = (command: string) => {
    var gridTextArr = command.split(" ");
    return { x: parseInt(gridTextArr[0]), y: parseInt(gridTextArr[1]) }
}

export const parseRoverPosition = (command: string) => {
    var sP = command.split(" ");
    return { x: parseInt(sP[0]), y: parseInt(sP[1]), direction: sP[2] };
}

export const parseRoverPath = (path: string) => {
    return path.split("")
}

export const parseFile = () => {
    const inputs = fs.readFileSync("text.txt", 'utf8')
    const commands = inputs.split("\n");

    // Parse field grid size
    const field = parseGridSize(commands[0]);


    // Parse Rover 1 input
    const r1 = {
        position: parseRoverPosition(commands[1]),
        path: parseRoverPath(commands[2])
    }

    // Parse Rover 2 input
    const r2 = {
        position: parseRoverPosition(commands[3]),
        path: parseRoverPath(commands[4])
    }

    return { field, r1, r2 }
}


export const parseDataToStr = (roverPosition: RoverPosition) => {
    return `${roverPosition.x} ${roverPosition.y} ${roverPosition.direction}`
}


export const writeData = (str:string) => {
    fs.writeFileSync("output.txt", str)
}