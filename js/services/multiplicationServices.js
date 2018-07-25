services.factory("multiplicationServices", function(){
    var number = 2;
    var multiple = {};

    multiple.multiplyBy = function(a) {
        number *=a;
        // return number;
    }
    
    multiple.getNumber = function() {
        return number;
    }

    return multiple;
    
})