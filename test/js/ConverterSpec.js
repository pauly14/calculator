/**
 * Created with JetBrains RubyMine.
 * User: Paul
 * Date: 26/02/14
 * Time: 19:38
 * To change this template use File | Settings | File Templates.
 */
describe ("My Converter", function() {
    it("should convert imperial weight to metric", function() {
        expect (Converter.convertFromImperialToMetric(2.2)).toBe(1);

    })
    it("should be able to deal with strings", function() {

        expect (function() {Converter.convertFromImperialToMetric("hello")}).toThrow(new Error("Not a number"));
    })
})
