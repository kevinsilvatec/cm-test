const validationHelper = require('../helpers/validationHelper')
const digitModel = require('../models/digitModel')
class DigitController{
    static async calc(req, res){
        try {
            const {n, k} = req.body
            if(!validationHelper.validStringInt(n) || !validationHelper.validInt(k)){
                throw new Error('Validation error! The "n" param must be a string and the "k" param must be an integer!')
            }

            const p = await digitModel.singleDigit(n, k)

            if(!p || !Number.isInteger(p)){
                throw new Error('Error during reduce P!')
            }

            return res.status(200).json({
                singleDigit: p
            })
            
        } catch (e) {
            return res.status(500).json({
                message: e.message 
            })
        }
    }
}

module.exports = DigitController