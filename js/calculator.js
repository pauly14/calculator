/**
 * Created with JetBrains RubyMine.
 * User: Paul
 * Date: 26/02/14
 * Time: 21:07
 * To change this template use File | Settings | File Templates.
 */


describe("press", function(){
    it("add-remove display element", function(){
        // Dynamically add a span element with id="display"
        $('body').append($('<span id="display">').text('0'));
        expect($('#display').length).toEqual(1);
        // Clean up after yourself here - tests should be atomic
        $('#display').remove();
        expect($('#display').length).toEqual(0);
    });

    it("add-remove display element", function(){
        $('body').append($('<span id="display">').text('0'));
        // With the display element present, run the press function
        press('2');
        expect($('#display').html()).toEqual('02');
        $('#display').remove();
    });
});

describe("execute", function(){
    it("execute a couple presses and run a calculation", function(){
        $('body').append($('<span id="display">').text('0'));
        // With the display element present, run the press function
        press('2');
        press('+');
        press('3');
        execute();
        expect($('#display').html()).toEqual('5');
        $('#display').remove();
    });
});