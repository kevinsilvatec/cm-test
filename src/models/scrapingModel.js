const fs = require('fs');
const util = require('util')
const fs_writeFile = util.promisify(fs.writeFile)

class ScrapingModel{
    static async storeScrapingFs(data){
        data =  JSON.stringify(data, null, "\t")
        try {
            await fs_writeFile('./temp/quotes.json', data)
            return true            
        } catch (e) {
            return false
        }
    }
}

module.exports = ScrapingModel