import { render, screen } from "@testing-library/react";
const { commaSeperator } = require("./Utils/commaSeperator");

describe("Should return a string of the numbers sperated by commas", () => {
  it("The first comma from the end is at the hundreds place, the remaining are seperate at 2 digits each and roundoff the hundreds place ", () => {
    const expectedResult = "42,300";
    const result = commaSeperator(42269);
    expect(result).toStrictEqual(expectedResult);
  });
});
