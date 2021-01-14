const axios = require('axios')
const cheerio = require('cheerio')
const scrapingModel = require('../models/scrapingModel')

class ScrapingController{
    static async store(req, res){
        const url = 'http://quotes.toscrape.com/'
        try {
            const response = await axios.get(url)
            const html = response.data
            
            const $ = cheerio.load(html);

            const quoteBlock = $('.quote')

            let arrQuotes  = []

            quoteBlock.each(function(){
                let quoteText = $(this).find('.text').text()
                let author = $(this).find('.author').text()
                arrQuotes.push({
                    quoteText,
                    author
                })
            })

            const fileSaved = await scrapingModel.storeScrapingFs(arrQuotes)

            if(!fileSaved){
                throw new Error('Error while saving the quotes.json file')
            }
            
            return res.status(200).json({
                message: "File ./temp/quotes.json saved with success!"
            })

        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }
}

module.exports = ScrapingController