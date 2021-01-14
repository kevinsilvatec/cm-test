class ValidationHelper{
    static validStringInt(string){
        const strInt = parseInt(string)      
        
        if(typeof string === 'string'){
            if(strInt >= 1 && strInt < 10e1000000){
                return true
            }
        }
        
        return false
    }

    static validInt(int){
        if(Number.isInteger(int)){
            if(int >= 1 && int < 10e5){
                return true
            }
        }
        return false
    }
}

module.exports = ValidationHelper