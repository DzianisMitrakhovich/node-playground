const _ = require('lodash');

const numbers = [5, 7, 43, 0, 1, 9, 8];

_.each(numbers, function (number, index){
    console.log(number);
});