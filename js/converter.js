/**
 * Created with JetBrains RubyMine.
 * User: Paul
 * Date: 26/02/14
 * Time: 21:07
 * To change this template use File | Settings | File Templates.
 */


var Converter = (function (){
    // private stuff goes here
    var converterValue = 2.2;
    //public methods go here
    return {
        convertFromImperialToMetric: function (weight) {
            var num = parseInt(weight);

            if (isNaN(num) == true) {
                throw new Error ("not a number");
            }
            num = num / converterValue;
            return Math.round(num);
        },
        convertFromMetricToImperial: function (weight) {
            return weight / converterValue;
        }
    }

})();