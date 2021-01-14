const digitHelper = require('../helpers/digithelper')
class DigitModel{
    static async singleDigit(n, k){
        let p = n.repeat(k)
        do {
            p = digitHelper.reduceP(p);    
        } while (p.length > 1);

        return parseInt(p, 10)
         
    }
}

module.exports = DigitModel