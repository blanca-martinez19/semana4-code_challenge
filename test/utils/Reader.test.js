const Reader = require('../../lib/utils/Reader');

describe("Test Reader Util", ()=>{
    test("1) Read file", () =>{
        const explorers = Reader.readJsonFile("visualpartners.json");

        expect(explorers.length).toBe(51);
    });
});