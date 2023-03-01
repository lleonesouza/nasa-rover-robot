import { expect, test } from '@jest/globals';
import { changeDirection } from "../src/rover"

test('changeDirection returns the correct Rover Side', () => {
    expect(changeDirection("N", "L")).toEqual("W");
});
