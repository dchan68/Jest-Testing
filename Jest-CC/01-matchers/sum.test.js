const sum = require("./sum")

describe("example tests", () => {
    it("should add 1 + 2 to equal 3", () =>{
        const result = sum(1,2)
        expect(result).toBe(3)
    })

    it("object assignment", () => {
        const obj = {}
        expect(obj).toEqual({})
    })
})

describe("truthy or falsy", ()=>{
    test("null", () => {
        //const n = null
        const n = ""
        expect(n).toBeFalsy() //zero, empty str, null will result in falsy
        expect(n).not.toBeTruthy()
        // expect(n).toBeNull()
        // expect(n).not.toBeUndefined()
    })
})

describe("numbers", () => {
    test("two plus two", () => {
        const value = 2 + 2
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(4)
        expect(value).toBeLessThan(7)
        expect(value).toBeLessThanOrEqual(4)
    })

    it("adding floats", () => {
        const value = 0.1 + 0.2
        expect(value).toBeCloseTo(0.2999999)
    })
})

describe("strings", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    })
})

describe("arrays", () => {
    const shoppingLists = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk']
    expect(shoppingLists).toContain("milk")
})

function compileAndroidCode(){
    throw new Error("you are using the wrong JDK")
}

describe("exceptions", () => {
    it("complying android goes as expected", () => {
        expect(() => compileAndroidCode()).toThrow(Error)
        expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK")
    })
})