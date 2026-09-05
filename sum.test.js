import sum from "./sum";

test("adds 2 plus 2 to equals 4", ()=>{
expect(sum(2,3)).toBe(5)
})

describe("test for some function", ()=>{
    test("adds -5 plus -7 to equals -12", ()=>{
expect(sum(-5,-7)).toBe(-12)
})
})