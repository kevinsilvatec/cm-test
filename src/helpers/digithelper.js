const DigitModel = require("../models/digitModel")

class DigitHelper{
    static reduceP(p){
        let sum = 0;
        for (let i = 0; i < p.length; i++ ){
            sum += parseInt(p[i], 10);
        }
        return sum.toString()
    }
}

module.exports = DigitHelper