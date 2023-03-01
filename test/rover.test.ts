import { expect, test } from '@jest/globals';
import { changeDirection, moveForward, handleSignal } from "../src/rover"

test("Rover Signal is not equal left(L), right(R) or move(M)", () => {
    try {
        handleSignal("WRONG_SIGNAL", { direction: "W", x: 2, y: 1 })
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
    } catch (err: any) {
        expect(err.message).toBe("Not a Valid Signal");
    }
});

test("Rover turns direction correctly", () => {
    // Try to turn from North to West(left) and East(right)
    // North -> West(left)
    // North -> East(right)
    expect(changeDirection("N", "L")).toEqual("W");
    expect(changeDirection("N", "R")).toEqual("E");

    // Verify if turns from North to West(left) and East(right) correctly
    // North -> West(left)
    // North -> East(right)
    expect(changeDirection("E", "L")).toEqual("N");
    expect(changeDirection("E", "R")).toEqual("S");

    // Verify if turns from North to West(left) and East(right) correctly
    // North -> West(left)
    // North -> East(right)
    expect(changeDirection("S", "L")).toEqual("E");
    expect(changeDirection("S", "R")).toEqual("W");

    // Verify if turns from North to West(left) and East(right) correctly
    // North -> West(left)
    // North -> East(right)
    expect(changeDirection("W", "L")).toEqual("S");
    expect(changeDirection("W", "R")).toEqual("N");
});

test("Rover move foward correctly", () => {
    // The lower-left coordinates are assumed to be 0,0.
    // Move in North Direction
    var newPosition = moveForward({ direction: "N", x: 1, y: 1 })
    expect(newPosition).toStrictEqual({ direction: "N", x: 1, y: 2 })
    // Move in West Direction
    var newPosition = moveForward({ direction: "W", x: 1, y: 1 })
    expect(newPosition).toStrictEqual({ direction: "W", x: 0, y: 1 })
    // Move in East Direction
    var newPosition = moveForward({ direction: "E", x: 1, y: 1 })
    expect(newPosition).toStrictEqual({ direction: "E", x: 2, y: 1 })
    // Move in South Direction
    var newPosition = moveForward({ direction: "S", x: 1, y: 1 })
    expect(newPosition).toStrictEqual({ direction: "S", x: 1, y: 0 })
});
