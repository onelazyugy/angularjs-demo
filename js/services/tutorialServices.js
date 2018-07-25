services.factory("tutorialServices", function(){
    var calculation = {};
    
    calculation.timesTwo = function(a) {
        return a * 2;
    }

    calculation.pythagoreanTheorum = function(a, b) {
        return (a * a) + (b * b);
    }

    return calculation;
})