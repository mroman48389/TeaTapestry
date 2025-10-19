import { generateFixedWavePath } from "./svg-utils";

describe("generateFixedWavePath", () => {

    it("Uses default parameters when none are provided.", () => {
        const path = generateFixedWavePath();
        expect(path).toMatch(/^M0 10 C/); // confirms path starts correctly
      });

    it("Returns a valid SVG path string.", () => {
        const path = generateFixedWavePath(3, 10, 5);
        expect(path).toMatch(/^M0 10 C/); // confirms path starts correctly
        expect(path.includes("C")).toBe(true); // confirms path has cubic Bezier curves
    });

});