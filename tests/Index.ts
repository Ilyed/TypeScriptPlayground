import "mocha";
import * as assert from "assert";
import {SmokeTest} from "../source";


describe("Index",()=>{

    it("should say 'hello world'",()=>{
        SmokeTest.HelloWorld();
        assert.ok(true);
    });
});
